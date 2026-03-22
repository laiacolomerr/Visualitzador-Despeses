import { PaymentMethod } from "./payment-method.type";

export interface Element {
    id: number;
    name: string;
    amount: number;
    paymentMethod: PaymentMethod;
    notes?: string;
}
