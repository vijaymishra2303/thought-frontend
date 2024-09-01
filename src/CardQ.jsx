import React, { useEffect, useState } from 'react';
import AdmminGet from './AdminGet';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse ,faHeart } from '@fortawesome/free-solid-svg-icons'; // Correct import for the solid house icon
// import { faHeart } from '@fortawesome/free-regular-svg-icons'; // Regular heart icon
// import { FaHeart, faHeart } from "@react-icons/all-files/fa/FaHeart";

//import { FaHouse } from 'react-icons/fa'; // Solid house icon
import { FaRegHeart } from 'react-icons/fa'; // Regular heart icon




function ProfileDetail() {
  const [myposts, setMyPosts] = useState([]);
  
  


  useEffect(() => {
    
    fetch("https://thought-backend.onrender.com/allpost", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")

      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.posts) {
          // console.log(data)
          setMyPosts(data.posts);
        } else {
          //console.error("Unexpected response:", data);
        }
      })
      .catch(err => console.error("Error fetching data:", err));


  }, []);

//   const likePost=(id)=>{
// fetch("http://localhost:5000/like", {
//   method:"put",
//   headers:{
//     "Content-Type":"application/json",
//     "Authorization":"Bearer "+localStorage.getItem("jwt")
//   },
//   body:JSON.stringify({
//     postId:id
//   })
// }).then(res=>res.json())
// .then(result=>{
//   //console.log(result)
//   const newData = myposts.map(item=>{
//     if(item._id===result._id){
//       return result;
//     }else {
//       return item;
//     }
//   })
//   setMyPosts(newData)
// }).catch(err=>{
//   console.log(err)
// })
//   }

  const reverseData = [...myposts].reverse()

  return (<div>
    <div className='container mx-auto  py-12 ' >
        <div className='row'>
        <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

      {reverseData.length > 0 ? (
        
        reverseData.map(item => (
          <div className='' key={item._id}>
            <div className="min-h-32	 	 quite_card p-6 bg-white shadow-lg rounded;">
            
            <h2 className=' font-sans	line-clamp-3 text-1xl font-normal '>" {item.title} "</h2>
            <p className='font-serif	 font-bold text-1xl text-red-800'>― {item.body}</p>
           {/* <h1 className='flex' onClick={()=>{likePost(item._id)}}> < FaRegHeart></FaRegHeart> </h1>
           <h2>{item.likes.length} Likes </h2> */}
            
            
  
          


            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
      </div>
      <AdmminGet></AdmminGet>
    </div>
    </div>
    

    </div>
  );
}

export default ProfileDetail;
