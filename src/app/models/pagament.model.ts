import { PaymentMethod } from "./payment-method.type";

export interface Pagament {
  id: string;
  nom: string;
  categoria: string;
  quantitat: number;
  icona: string;
  esRecurrent: boolean;
  data: Date;
  metodePagament: PaymentMethod;
  notes: string[];
  comentari?: string;
}
