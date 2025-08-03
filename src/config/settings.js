const env = import.meta.env;

const settings = {
  apiBaseUrl: env.VITE_API_BASE_URL || 'http://localhost:8000',
};

Object.freeze(settings);

export default settings;
