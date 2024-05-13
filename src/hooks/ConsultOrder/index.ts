import axios from 'axios';
import nookies from 'nookies'
import { SendEmailConst } from '../SendEmail';

export async function consultApiOrder() {
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

  const idOrder = nookies.get(null,'purchaseId')['purchaseId'];
  console.log(idOrder)
  console.log(token)

  try {
    const res = await axios.get(`https://sandbox.api.pagseguro.com/checkouts/CHEC_CCE56414-3395-40E7-8A7F-568685301DDD`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data
    return data;
  } catch (error) {
    console.error('Erro ao tentar acessar a API do PagSeguro:', error);
  }
}