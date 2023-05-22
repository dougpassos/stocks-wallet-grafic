import axios from 'axios';

const configAxios = axios.create({
  baseURL: "https://brapi.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});


const getTicketList = async(stockQuery) => {
  try {
    const response = await configAxios.get(`/quote/list?sortBy=close&sortOrder=desc&limit=5&search=${stockQuery}`);
    return await response.data    
  } 
  catch (error) {
    console.log(error);
  }
};

const getDataTicket = async(ticket,
                            range='5d',
                            interval='5d',
                            fund=true,
                            divid=false
                            ) => {
  try {
    const response = await configAxios.get(
      `/quote/${ticket}
        ?range=${range}
        &interval=${interval}
        &fundamental=${fund}
        &dividends=${divid}`
    ).then(response => response.json());
    return response;    
  } catch (error) {
    console.log(error);
  }
}

export default getTicketList;