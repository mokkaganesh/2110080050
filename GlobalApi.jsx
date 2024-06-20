import axios from 'axios';


const API_KEY=process.env.NEXT_PUBLIC_API_KEY;
const axiosClient=axios.create({
    baseURL:'http://20.244.56.144/test/companies',
   // baseURL:'https://doctor-appointment-admin-strapi-uyle.onrender.com/api',
    headers:{
        Authorization:`Bearer ${API_KEY}`,
        'Content-Type':'application/json',
    }

});


export const getProducts=(company,category,top,minPrice,maxPrice)=>axiosClient.get(`${company}/categories/${category}/Products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);