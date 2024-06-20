"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
//import GlobalApi from '../_utils/GlobalApi';


function Formdata({children}) {

    const [productsList, setProductsList] = useState([]);
  const [formData, setFormData] = useState({
    companyName: '',
    category: '',
    top: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // GlobalApi.getProducts(companyName,category,top,minPrice,maxPrice).then((res) => {
    //     //   setProductsList(res.data.data);
    //       console.log(res);
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    // Add your form submission logic here
  };


    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Company Name</label>
        <Input 
          type="text" 
          name="companyName" 
          value={formData.companyName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Category</label>
        <Input 
          type="text" 
          name="category" 
          value={formData.category} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Top</label>
        <Input 
          type="number" 
          name="top" 
          value={formData.top} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Min Price</label>
        <Input 
          type="number" 
          name="minPrice" 
          value={formData.minPrice} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Max Price</label>
        <Input 
          type="number" 
          name="maxPrice" 
          value={formData.maxPrice} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" >Submit</button>
     
    </form>
  );
}

export default Formdata;
