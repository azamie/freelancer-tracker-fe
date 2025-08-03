export const ACTIVITY_TYPES = {
  PUSH_COMMITS: 'push_commits',
  CREATE_PR: 'create_pr',
  MERGE_PR: 'merge_pr',
  CREATE_RELEASE: 'create_release',
};

export const ACTIVITY_TYPE_LABELS = {
  [ACTIVITY_TYPES.PUSH_COMMITS]: 'Push Commits',
  [ACTIVITY_TYPES.CREATE_PR]: 'Create Pull Request',
  [ACTIVITY_TYPES.MERGE_PR]: 'Merge Pull Request',
  [ACTIVITY_TYPES.CREATE_RELEASE]: 'Create Release',
};
