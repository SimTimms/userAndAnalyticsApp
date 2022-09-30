import axios from 'axios';

export function generateRandomPassword() {
  var length = 8,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    retVal = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return `${retVal}A0!`;
}

export async function axiosCheckConnection(): Promise<boolean> {
  const response = await axios
    .get(process.env.REACT_APP_CONNECTION || '')
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
  return response;
}
