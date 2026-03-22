import { Element } from "../models/element.model";

export const PAYMENTS: Element[] = [
  {
    id: 1,
    name: 'Llum març',
    amount: 25.70,
    date: new Date(2026, 3, 16),
    paymentMethod: 'bankTransfer',
  },
  {
    id: 2,
    name: 'Aigua març',
    amount: 22.08,
    date: new Date(2026, 3, 11),
    paymentMethod: 'bankTransfer',
  },
  {
    id: 3,
    name: 'Llum febrer',
    amount: 25.89,
    date: new Date(2026, 2, 17),
    paymentMethod: 'bankTransfer',
  },
  {
    id: 4,
    name: 'Gas gener',
    amount: 22.37,
    date: new Date(2026, 1, 30),
    paymentMethod: 'bankTransfer',
  },
  {
    id: 5,
    name: 'Matrícula IOC 2026',
    amount: 150,
    date: new Date(2025, 12, 15),
    paymentMethod: 'debitCard',
    notes: 'Primer semestre',
  },
  {
    id: 6,
    name: 'Compra Caprabo',
    amount: 35.26,
    date: new Date(2025, 12, 4),
    paymentMethod: 'cash',
  },
  {
    id: 7,
    name: 'Assegurança cotxe',
    amount: 526.14,
    date: new Date(2025, 11, 26),
    paymentMethod: 'bankTransfer',
  },
  {
    id: 8,
    name: 'Compra botes Decathlon',
    amount: 78.99,
    date: new Date(2025, 10, 11),
    paymentMethod: 'paypal',
  },
  {
    id: 9,
    name: 'Gas setembre',
    amount: 75.26,
    date: new Date(2025, 9, 30),
    paymentMethod: 'bankTransfer',
    notes: 'Inclou revisió de la caldera'
  },
  {
    id: 10,
    name: 'Roba El Corte Inglés',
    amount: 62.98,
    date: new Date(2025, 9, 11),
    paymentMethod: 'cash',
    notes: 'Pantalons i camisa tardor'
  },
];