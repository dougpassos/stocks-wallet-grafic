import axios from 'axios';

const configAxios = axios.create({
  baseURL: "https://brapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/*
const getTicketList = async(stockQuery) => {
  try {
    const response = await configAxios.get(`/quote/list?sortBy=close&sortOrder=desc&limit=5&search=${stockQuery}`);
    return await response.data
   
    
  } catch (error) {
    console.log(error);
  }

};*/

export default configAxios;