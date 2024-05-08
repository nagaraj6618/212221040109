import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PostComponent.css'
const PostComponent = () => {
   const [postData,setPostData] = useState(null);
   useEffect(()=> {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response)=> {
         console.log(response.data);
         setPostData(response.data);
      })
      .catch((error) => console.log(error));
   },[])

 

  return (
    <div className='post-container-box'>
      {!postData && 
      (<div>Loading....</div>)
      }
      {postData &&
         postData.map( (data,index) => (
          <div key={index} className='post-container'>
            <img src={data.image} alt='user-image'/>
            <p><span>User Id :</span>{data.id}</p>
            <p><span>Title : </span>{data.title}</p>
            <p><span>Body : </span>{data.body}</p>
          </div> 
          
         ))
      }
      
    </div>
  )
}

export default PostComponent
