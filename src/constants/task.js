import { FaStar, FaBug, FaCog } from 'react-icons/fa';

export const TASK_STATUS = {
  UNSTARTED: 'UNSTARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
  DELIVERED: 'DELIVERED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
};

export const TASK_STATUS_CONFIG = {
  [TASK_STATUS.UNSTARTED]: {
    label: 'Unstarted',
    color: 'bg-gray-100 text-gray-800',
  },
  [TASK_STATUS.IN_PROGRESS]: {
    label: 'In Progress',
    color: 'bg-blue-100 text-blue-800',
  },
  [TASK_STATUS.FINISHED]: {
    label: 'Finished',
    color: 'bg-green-100 text-green-800',
  },
  [TASK_STATUS.DELIVERED]: {
    label: 'Delivered',
    color: 'bg-purple-100 text-purple-800',
  },
  [TASK_STATUS.ACCEPTED]: {
    label: 'Accepted',
    color: 'bg-emerald-100 text-emerald-800',
  },
  [TASK_STATUS.REJECTED]: {
    label: 'Rejected',
    color: 'bg-red-100 text-red-800',
  },
};

export const TASK_TYPE = {
  FEATURE: 'FEATURE',
  BUG: 'BUG',
  CHORE: 'CHORE',
};

export const TASK_TYPE_CONFIG = {
  [TASK_TYPE.FEATURE]: {
    icon: FaStar,
    color: 'text-blue-600',
    label: 'Feature',
  },
  [TASK_TYPE.BUG]: {
    icon: FaBug,
    color: 'text-red-600',
    label: 'Bug',
  },
  [TASK_TYPE.CHORE]: {
    icon: FaCog,
    color: 'text-yellow-600',
    label: 'Chore',
  },
};
