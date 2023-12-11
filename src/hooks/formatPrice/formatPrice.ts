 export const formatPrice = (price: number | null) => {
  if(!price) return "R$0,00"

  return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
  }).format(price);
}

export const installmentPrice = (price: number | null) => {
  if(!price) return "R$0,00"

  return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
  }).format(price / 3);
}

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
  return formattedDate;
}


