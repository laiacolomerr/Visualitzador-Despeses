import { PaymentMethod } from "./payment-method.type";

export interface PaymentApiResponse {
  id: string;
  name: string;
  category: string;
  amount: number;
  icon: string;
  isRecurring: boolean;
  timestamp: number;
  paymentMethod: PaymentMethod;
  comment?: string;
}
