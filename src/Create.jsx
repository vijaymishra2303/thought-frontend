
import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import { Filter } from "bad-words";

function Create() {
    const [title, setQuote] = useState("");
    const [body, setBody] = useState("");

    // Initialize the profanity filter
    const filter = new Filter();  //npm install bad-words this is command
    filter.addWords('fuck', 'shit', 'bitch', 'bastard', 'asshole', 'damn', 'crap', 'dick', 'Vulgar','gandu','gandoo','bhadwa','bhadawa','bhadva','bhadava',
        'pussy', 'cunt', 'slut', 'whore', 'faggot', 'nigger', 'cock', 'prick', 'dick','pig','boob','boobs','बूब्स',
        'motherfucker', 'son of a bitch', 'bollocks', 'bugger', 'twat',    'चूतिया', 'मादरचोद', 'बहनचोद', 'साला', 'गांड', 'लौड़ा', 'लौंडी','सुअर','tatti','poop','kutta','dog','doggy','kutti', 
        'बोसड़ीके', 'हरामी', 'कमीना', 'भोसड़ीवाला', 'गांडू', 'भड़वा', 'लंड के','मम्मे',
        'भोसड़ी', 'चुत', 'चूत', 'रंडी', 'झाड़', 'लवड़ा', 'चोदा','land ke', 'landke','Chutiya','Chutia','Madarchod','motherfucher','Behenchod','Sala','Gaand','ass','Lauda','loda','land ke','lawda','dick','Laundi','lodi','Bosadike','bsdk','Harami','basterd','Kamina','Bhosadivala','bhosadi','Chut','Choot','Randi','whore','Choda'
    );


    // Function to validate text input (only allows letters and spaces)
    const validateText = (text) => {
        return text.replace(/[^a-zA-Z\s]/g, '');
    };

    const handleTitleChange = (e) => {
        const validatedTitle = validateText(e.target.value);
        setQuote(validatedTitle);
    };

    const handleBodyChange = (e) => {
        const validatedBody = validateText(e.target.value);
        setBody(validatedBody);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check for inappropriate language in title and body
        if (filter.isProfane(title) || filter.isProfane(body)) {
            alert('Your post contains inappropriate language. Please remove it before submitting.');
            return;
        }
        
        // Get the JWT token from localStorage
        const token = localStorage.getItem("jwt");

        // Make the POST request with Authorization header
        axios.post('https://thought-backend.onrender.com/createpost', { body, title }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(result => {
            //console.log(result);
            const userId = JSON.parse(localStorage.getItem('user')).user;
            alert('Post created successfully!');

            // You can use userId here if needed
        })
        .catch(err => alert('Error creating post. Please try again.'));
    };

    return (
        <div>
            <div className="creat_sec">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="creat_pg">
                                <h2>Write Thought</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title">
                                            <strong>Write Thought</strong>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Enter Thought" 
                                            autoComplete="off" 
                                            required 
                                            name="title" 
                                            className="form-control rounded-0"  
                                            value={title} 
                                            onChange={handleTitleChange} 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="body">
                                            <strong>Writer Name</strong>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="Writer Name" 
                                            autoComplete="off" 
                                            required 
                                            name="body" 
                                            className="form-control rounded-0"  
                                            value={body} 
                                            onChange={handleBodyChange} 
                                        />
                                    </div>
                                    <button type="submit" className="main_btn btn-success w-100 rounded-0">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Create;
