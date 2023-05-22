import { configAxios } from "./config-axios";

const getDataTicket = async(ticket,
                            range='5d',
                            interval='5d'
                            ) => {
  try {
    const response = await configAxios.get(
      `/quote/${ticket.toString()}?range=${range}&interval=${interval}`)
      .then(response => response.data);
      console.log(response)
    return response;    
  } catch (error) {
    console.log(error);
  }
}
/*
const getTicketList = async(stockQuery) => {
  try {
    const response = await configAxios.get(`/quote/list?sortBy=close&sortOrder=desc&limit=5&search=${stockQuery}`);
    return await response.data    
  } 
  catch (error) {
    console.log(error);
  }
};
*/

export default getDataTicket;
