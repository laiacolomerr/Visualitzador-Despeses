import { PaymentApiResponse } from '../models/payment-api-response.model';
import { Pagament } from '../models/pagament.model';

export const adaptarPagamentApi = (apiResponse: PaymentApiResponse): Pagament => {
  const { id, name, category, amount, icon, isRecurring, timestamp, paymentMethod, comment } = apiResponse;
  return {
    id: id,
    nom: name,
    categoria: category,
    quantitat: amount,
    icona: icon,
    esRecurrent: isRecurring,
    data: new Date(timestamp),
    metodePagament: paymentMethod,
    comentari: comment,
    notes: []
  }
}

export const adaptarPagamentsApi = (apiResponse: PaymentApiResponse[]): Pagament[] => {
  return apiResponse.map(payment => adaptarPagamentApi(payment));
}
