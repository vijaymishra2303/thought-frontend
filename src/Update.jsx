import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Update(){
    const [qoute ,setQuote]=useState()
    //  const params =useParams();

    //  useEffect(()=>{
    //     console.log(params)
    //     getProductDetail();
    //  },[])

    //  const getProductDetail =async()=>{
    //     let result=await fetch(`http://localhost:3001/create/${params._id}`);
    //     result =await result.json();
    //     setQuote(result.qoute);
    //  }


    const handleSubmit=  (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/create',{writer ,qoute})
        .then(result=>{console.log(result)
            const userId = JSON.parse(localStorage.getItem('user'))._id;
           
          
        })
        .catch(err=>console.log(err))
    }
    
    return(
        <div>
            <div className="d-flex justify-content-center align-item-center">
<div className="bg-white p3 rounded w25">
<h2>Qutes Update</h2>
<form onSubmit={handleSubmit}>
    <div className="mb-3">
<label htmlFor="email">
<strong>Write Qoutes</strong>
</label>
<input type="text" placeholder="Enter Quotes" autoComplete="off" required name="text" className="form-control rounded-0"  onChange={(e)=>setQuote(e.target.value)} />
    </div>
    
    <button type="submit" className="btn btn-success w-100 rounded-0">Update</button>
    </form>
    
    

</div>
</div>
        </div>
    )
}
export default Update;