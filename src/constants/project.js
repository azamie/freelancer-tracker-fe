export const PROJECT_STATUS = {
  UNSTARTED: 'UNSTARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
};

export const PROJECT_STATUS_CONFIG = {
  [PROJECT_STATUS.UNSTARTED]: {
    label: 'Unstarted',
    color: 'bg-gray-100 text-gray-800',
  },
  [PROJECT_STATUS.IN_PROGRESS]: {
    label: 'In Progress',
    color: 'bg-blue-100 text-blue-800',
  },
  [PROJECT_STATUS.ON_HOLD]: {
    label: 'On Hold',
    color: 'bg-yellow-100 text-yellow-800',
  },
  [PROJECT_STATUS.COMPLETED]: {
    label: 'Completed',
    color: 'bg-green-100 text-green-800',
  },
  [PROJECT_STATUS.CANCELLED]: {
    label: 'Cancelled',
    color: 'bg-red-100 text-red-800',
  },
};
