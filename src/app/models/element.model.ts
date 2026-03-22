import { PaymentMethod } from "./payment-method.type";

export interface Element {
    id: number;
    name: string;
    amount: number;
    date: Date;
    paymentMethod: PaymentMethod;
    notes?: string;
}
