import React, { useEffect, useState } from 'react';
import { BE_URL, Category, CompanyName } from '../../info';
import './ProductComponent.css'; 
import axios from 'axios';

const ProductComponent = () => {
   const [formData, setFormData] = useState({
      companyName: '',
      categoryName: '',
      size: ''
   });
   const [productsData, setProductsData] = useState(null);

   const searchSubmit = async () => {
      console.log(formData);
      try {
         const response = await axios.get(`${BE_URL}/comapines/${formData.companyName}/categories/${formData.categoryName}/products/${formData.size}`);
         console.log(response.data);
         setProductsData(response.data.data);
      } catch (error) {
         console.log(error);
         alert("failed");
      }
   };

   const handleChange = (e) => {
      setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
   };

   return (
      <div>
         <div className="product-container">
            <div>
               <p>Company Name</p>
               <select className="select-box" name='companyName' onChange={handleChange}>
                  <option value='none'>None</option>
                  {CompanyName.map((data, index) => (
                     <option value={data} key={index}>{data}</option>
                  ))}
               </select>
            </div>
            <div>
               <p>Categories</p>
               <select className="select-box" name='categoryName' onChange={handleChange}>
                  <option value='none'>None</option>
                  {Category.map((data, index) => (
                     <option value={data} key={index}>{data}</option>
                  ))}
               </select>
            </div>
            <div>
               <p>No of Products</p>
               <input type='number' className="input-box" name='size' onChange={handleChange}/>
            </div>
            <div>
               <button className="btn-primary" onClick={searchSubmit}>Search</button>
            </div>
         </div>
         {!productsData && (<div className='loading-text'>Loading...</div>)}
         <div className='product-container'>
            {productsData &&
               productsData.map((data, index) => (
                  <div key={index} className='container-item'>
                     <h3><span>Product : </span>{data.productName}</h3>
                     <p><span>Rating : </span>{data.rating}</p>
                     <p><span>Discount : </span>{data.discount}</p>
                     <p><span>Price : </span>{data.price}</p>
                     <p><span>Availability: </span>{data.availability}</p>
                  </div>))
            }
         </div>
      </div>
   );
};

export default ProductComponent;
