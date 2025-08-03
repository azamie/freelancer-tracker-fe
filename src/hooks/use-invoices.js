import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getInvoices } from 'apis/invoices.js';

export const useInvoices = () => {
  const [currentCursor, setCurrentCursor] = useState(null);
  const [previousCursors, setPreviousCursors] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['invoices', currentCursor],
    queryFn: () => {
      const params = currentCursor ? { cursor: currentCursor } : {};
      return getInvoices(params);
    },
  });

  const invoices = data?.results || [];
  const totalPaid = data?.totalPaid || 0;
  const totalOverdue = data?.totalOverdue || 0;
  const totalInvoices = data?.totalInvoices || 0;

  const hasNextPage = !!data?.next;
  const hasPreviousPage = previousCursors.length > 0;

  const goToNextPage = () => {
    if (data?.next) {
      const url = new URL(data.next);
      const nextCursor = url.searchParams.get('cursor');

      // Save current cursor to history
      setPreviousCursors((prev) => [...prev, currentCursor]);
      setCurrentCursor(nextCursor);
    }
  };

  const goToPreviousPage = () => {
    if (previousCursors.length > 0) {
      const prevCursor = previousCursors[previousCursors.length - 1];
      setPreviousCursors((prev) => prev.slice(0, -1));
      setCurrentCursor(prevCursor);
    }
  };

  return {
    invoices,
    isLoading,
    error,
    totalPaid,
    totalOverdue,
    totalInvoices,
    hasNextPage,
    hasPreviousPage,
    goToNextPage,
    goToPreviousPage,
    currentPage: previousCursors.length + 1,
  };
};
