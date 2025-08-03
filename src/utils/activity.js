import { ACTIVITY_TYPES } from 'constants/activity.js';
import { formatDate } from 'utils/date.js';

export const generateActivityDisplayTitle = (activity) => {
  const { activityType, repositoryName, username, created, details } = activity;
  const dateTime = formatDate(created, true);

  switch (activityType) {
    case ACTIVITY_TYPES.PUSH_COMMITS: {
      const commitCount = details.commits?.length || 0;
      const commitText = commitCount === 1 ? 'commit' : 'commits';
      return `${commitCount} ${commitText} pushed to ${repositoryName} by ${username} on ${dateTime}`;
    }

    case ACTIVITY_TYPES.CREATE_PR: {
      const prNumber = details.prNumber;
      return `Pull request #${prNumber} created in ${repositoryName} by ${username} on ${dateTime}`;
    }

    case ACTIVITY_TYPES.MERGE_PR: {
      const prNumber = details.prNumber;
      return `Pull request #${prNumber} merged in ${repositoryName} by ${username} on ${dateTime}`;
    }

    case ACTIVITY_TYPES.CREATE_RELEASE: {
      const tagName = details.tagName;
      return `Release ${tagName} created in ${repositoryName} by ${username} on ${dateTime}`;
    }
  }
};
