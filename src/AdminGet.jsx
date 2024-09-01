import React, { useEffect, useState } from 'react';
import Footer from './Footer';

function AdmminGet() {
  const [myposts, setMyPosts] = useState([]);
  const[name , setName]=useState([])

  useEffect(() => {
    fetch("https://thought-backend.onrender.com/adminpost", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.adminposts) {
          setMyPosts(data.adminposts);
        } else {
          console.error("Unexpected response:", data);
        }
      })
      .catch(err => console.error("Error fetching data:", err));


  }, []);

  return (<div>
    <div className='container max-auto p-0 py-60px' >
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {myposts.length > 0 ? (
        myposts.map(item => (
          <div className='quite_card  min-h-32  p-6 bg-white shadow-lg rounded;' key={item._id}>
            <h2 className='font-sans line-clamp-3	 text-1xl font-normal'>" {item.title} "</h2>
            <p className='font-serif	 font-bold text-1xl text-red-800'>― {item.body}</p>
          </div>
        ))
      ) : (
        <div>No posts available.</div> 
      )}
    
    </div>
    
    </div>
    </div>
  );
}

export default AdmminGet;
