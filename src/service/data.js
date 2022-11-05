import config from '../config';

export const get = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const defaultMsg = 'Oops! Something went wrong.';
  if (res.status >= 400 && res.status <= 500) {
    const msg = data.message || defaultMsg;
    throw new Error(msg);
  } else if (res.status >= 500) {
    console.error('Failed to process request');
    throw new Error(defaultMsg);
  }
  return data;
}

export const getIpData = (ip) => get(`${config.API_BASE_URL}/lookup/${ip}`);

export const getUsageCount = () => get(`${config.API_BASE_URL}/stats`);

export const getMyIP = () => get(config.MY_IP_URL);
