import { configAxios } from "./config-axios";

/* const getDataTicket = async (
  ticket = 'PETR4',
  range = '5d',
  interval = '5d'
  ) => {
  try {
    const response = await configAxios.get(
      `/quote/${ticket}?range=${range}&interval=${interval}`)
      .then(response => response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
} */

 const getDataTicket = async (ticket = 'PETR4', 
                        range = '5d', 
                        interval = '5d') =>  { 
                       await configAxios.get(`/quote/${ticket}?range=${range}&interval=${interval}`)
                      .then(response => response.data)
                      .catch(error => console.error(error))  
                }

export default getDataTicket;
