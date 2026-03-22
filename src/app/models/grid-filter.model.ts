import { PaymentMethod } from "./payment-method.type";

export interface GridFilter {
  name?: string;
  date?: Date;
  paymentMethod?: PaymentMethod;
}
