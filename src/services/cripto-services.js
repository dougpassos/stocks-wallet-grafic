import { configAxios } from "./config-axios";

const getDataCripto = async (coin, currency = 'BRL') => {
  try {
    const response = await configAxios.get(
                              `/v2/crypto?coin=${coin}&currency=${currency}`)
                              .then(response => response);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getDataCripto;
