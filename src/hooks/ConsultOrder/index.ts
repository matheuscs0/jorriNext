import axios from 'axios';
import nookies from 'nookies'

export async function consultApiCheckout() {

  const purchaseId = "CHEC_B1AF2650-B7D3-456B-84F1-4F1B1CACF47D"

  try {
    const res = await axios.post(`https://mongodb-jorri-next-production.up.railway.app/consultApiCheckout/${purchaseId}`);
    const data = res.data
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro ao tentar acessar a API do PagSeguro:', error);
  }
}