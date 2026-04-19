import { PaymentMethod } from "./payment-method.type";

export interface PaymentApiResponse {
    id: number;
    name: string;
    amount: number;
    date: Date;
    paymentMethod: PaymentMethod;
    notes?: string;
}
