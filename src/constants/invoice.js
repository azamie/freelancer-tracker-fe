export const INVOICE_STATUS = {
  PAID: 'PAID',
  PENDING: 'PENDING',
  OVERDUE: 'OVERDUE',
};

export const INVOICE_STATUS_CONFIG = {
  [INVOICE_STATUS.PAID]: {
    label: 'Paid',
    color: 'bg-green-100 text-green-800',
  },
  [INVOICE_STATUS.PENDING]: {
    label: 'Pending',
    color: 'bg-yellow-100 text-yellow-800',
  },
  [INVOICE_STATUS.OVERDUE]: {
    label: 'Overdue',
    color: 'bg-red-100 text-red-800',
  },
};