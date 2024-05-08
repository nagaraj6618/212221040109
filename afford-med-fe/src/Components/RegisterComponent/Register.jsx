import React, { useState } from 'react';
import './Register.css'; // Import CSS file
import axios from 'axios'
import { BE_URL } from '../../info';
import { useNavigate } from 'react-router-dom';
const Register = () => {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({
      companyName: '',
      ownerName: '',
      ownerEmail: '',
      rollno: '',
      clientID: "53aa431e-ffec-490f-8aaf-3be6e1c2b7e9",
      clientSecret: "KwkfsVERuelhjRpY",
   });
   const formSubmit = async() => {
      try{
         const response = await axios.post(`${BE_URL}/auth/register`,{userData});
         console.log(response.data.data.access_token);
         localStorage.setItem('token',response.data.data.access_token)
         navigate('/products')
      }
      catch(error){
         console.log(error);
         alert(error.message);
      }
   }
   const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
   };

   return (
      <div className="register-container">
         <div>
            <input
               type="text"
               name="companyName"
               placeholder='Company Name'
               value={userData.companyName}
               onChange={handleChange}
            />
         </div>
         <div>
            <input
               type='text'
               name='ownerName'
               placeholder='Owner Name'
               value={userData.ownerName}
               onChange={handleChange}
            />
         </div>
         <div>
            <input
               type='text'
               name='ownerEmail'
               placeholder='Owner Email'
               value={userData.ownerEmail}
               onChange={handleChange}
            />
         </div>
         <div>
            <input
               type='text'
               name='rollno'
               placeholder='Roll'
               value={userData.rollno}
               onChange={handleChange}
            />
         </div>
         <div>
            <button onClick={formSubmit}>Register</button>
         </div>
      </div>
   );
};

export default Register;
