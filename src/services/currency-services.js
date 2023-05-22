import { configAxios } from "./config-axios";

const getCurrency = async (currency = 'USD-BRL') => {
  try {
    const response = await configAxios.get(
                              `/v2/currency?currency=${currency}`)
                              .then(response => response.data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getCurrency;
