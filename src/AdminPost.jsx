import axios from "axios";
import { useState } from "react";

function AdminPost() {
    const [title, setQuote] = useState();
    const [body, setBody] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get the JWT token from localStorage
        const token = localStorage.getItem("jwt");

        // Make the POST request with Authorization header
        axios.post('https://thought-backend.onrender.com/adminpost', { body, title }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(result => {
            console.log(result);
            const userId = JSON.parse(localStorage.getItem('user')).user;
            // You can use userId here if needed
        })
        .catch(err => console.log(err));
    };

    return (<div>

   
        <div className="creat_sec">
            <div className="container">
                <div className="row">
                    
            <div className="d-flex justify-content-center align-items-center">
                <div className="creat_pg ">
                    <h2>Admin Post</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title">
                                <strong>Write Title</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Quote Title" 
                                autoComplete="off" 
                                required 
                                name="title" 
                                className="form-control rounded-0"  
                                onChange={(e) => setQuote(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body">
                                <strong>Enter Name</strong>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter Name" 
                                autoComplete="off" 
                                required 
                                name="body" 
                                className="form-control rounded-0"  
                                onChange={(e) => setBody(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="main_btn btn-success w-100 rounded-0">Post</button>
                    </form>
                </div>
            </div>
            
            </div>
            </div>
            
        </div>
       
        </div>
    );
}

export default AdminPost;
