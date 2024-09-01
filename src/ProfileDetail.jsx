

import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import profileImg from "../src/Img/profile.jpg";


function ProfileDetail() {
  const [myposts, setMyPosts] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("https://thought-backend.onrender.com/myposts", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        if (data.mypost) {
          setMyPosts(data.mypost);
        } else {
          console.error("Unexpected response:", data);
        }
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);


  //delete post
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`https://thought-backend.onrender.com/deletepost/${postId}`, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
      });

      if (response.status === 200) {
        console.log('Post deleted successfully:', response.data);
        // Remove the deleted post from the state
        setMyPosts(myposts.filter(post => post._id !== postId));
      } else {
        console.error('Failed to delete post:', response.data);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <div className='container py-12 mt-5'>
        <div className='row'>
          <div className='flex flex-nowrap items-center  gap-6	'>
            <img className='list-image-none	 h-28 w-28' src={profileImg}></img>
            
          <h1 className='font-sans font-serif font-bold text-1xl text-4xl'>{userData.name}</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-4">
            {myposts.length > 0 ? (
              myposts.map(item => (
                <div className='quite_card min-h-32 p-6 bg-white shadow-lg rounded' key={item._id}>
                  <h2 className='font-sans line-clamp-3 text-1xl font-normal'>" {item.title} "</h2>
                  <p className='font-serif font-bold text-1xl text-red-800'>― {userData.name}</p>
                  {/* <p className='font-sans mb-6 text-1xl'>{userData.name}</p> */}

                  <button 
                    className="mt-4 text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded"
                    onClick={() => deletePost(item._id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <div>No posts available.</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileDetail;
