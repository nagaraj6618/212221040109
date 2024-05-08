const router = require('express').Router();
const axios = require('axios');
let token = ''
const companyApi = "http://20.244.56.144/test"
// const userData = {
//    companyName: "saveetha",
//    clientID: "53aa431e-ffec-490f-8aaf-3be6e1c2b7e9",
//    clientSecret: "KwkfsVERuelhjRpY",
//    ownerName: "Nagaraj",
//    ownerEmail: "nagaraj516700@gmail.com",
//    rollNo: "212221040109"
// }
router.post('/auth/register',async(req,res) => {
   try{
      console.log(req.body)
      const userData = req.body;
      const response = await axios.post(`${companyApi}/auth`,
      userData)
      token = response.data.access_token;
      console.log(token)
      res.status(200).json({data:response.data});
   }
   catch(error){
      res.status(500).json({error:error})
   }
})

router.get('/get',async(req,res) => {
   try{
      const response = await axios.get(`${companyApi}/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,{
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      res.status(200).json({data:response.data});
   }
   catch(error){
      res.status(500).json({Error:error})
   }
})

module.exports = router;