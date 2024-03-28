import axios from 'axios';
import nookies from 'nookies'
import { SendEmailConst } from '../SendEmail';

export async function consultApiOrder() {
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

  const idOrder = nookies.get(null,'purchaseId')['purchaseId'];
  console.log(idOrder)

  try {
    const res = await axios.get(`https://sandbox.api.pagseguro.com/checkouts/${idOrder}`, {
      headers: {
        Accept: 'application/json',
        Authorization: token,
      },
    });
    const data = res.data
    if(data.status === "PAY"){
        SendEmailConst()
    }
    return data;
  } catch (error) {
    console.error('Erro ao tentar acessar a API do PagSeguro:', error);
  }
}