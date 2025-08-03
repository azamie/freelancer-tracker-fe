import { useInvoices } from 'hooks/use-invoices.js';
import PaginatedTable from 'components/PaginatedTable.jsx';
import StatsCard from 'components/StatsCard.jsx';
import { INVOICE_STATUS_CONFIG } from 'constants/invoice.js';

const Invoices = () => {
  const {
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
    currentPage,
  } = useInvoices();

  const columns = [
    { header: 'Invoice' },
    { header: 'Project' },
    { header: 'Amount' },
    { header: 'Status' },
    { header: 'Date' },
  ];

  const renderRow = (invoice) => (
    <tr key={invoice.id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {invoice.invoiceNumber}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {invoice.projectName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ${invoice.amount.toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-xs rounded-full ${INVOICE_STATUS_CONFIG[invoice.status].color}`}
        >
          {INVOICE_STATUS_CONFIG[invoice.status].label}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {new Date(invoice.dueDate).toLocaleDateString()}
      </td>
    </tr>
  );

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Paid">
          <p className="text-2xl font-semibold text-green-600">
            ${totalPaid.toLocaleString()}
          </p>
        </StatsCard>

        <StatsCard title="Overdue">
          <p className="text-2xl font-semibold text-red-600">
            ${totalOverdue.toLocaleString()}
          </p>
        </StatsCard>

        <StatsCard title="Total Invoices">
          <p className="text-2xl font-semibold text-gray-900">
            {totalInvoices}
          </p>
        </StatsCard>
      </div>

      <div className="bg-white shadow rounded-lg flex-1 flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">All Invoices</h2>
        </div>

        <PaginatedTable
          items={invoices}
          columns={columns}
          renderRow={renderRow}
          isLoading={isLoading}
          error={error}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          onNextPage={goToNextPage}
          onPreviousPage={goToPreviousPage}
          currentPage={currentPage}
          totalItems={totalInvoices}
          loadingText="Loading invoices..."
        />
      </div>
    </div>
  );
};

export default Invoices;
