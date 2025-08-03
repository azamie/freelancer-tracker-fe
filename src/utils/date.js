export const formatDate = (dateString, includeTime = false) => {
  const options = {
    year: 'numeric',
    day: 'numeric',
  };

  if (includeTime) {
    options.month = 'long';
    options.hour = 'numeric';
    options.minute = '2-digit';
    options.hour12 = true;
  } else {
    options.month = 'short';
  }

  return new Date(dateString).toLocaleDateString('en-US', options);
};
