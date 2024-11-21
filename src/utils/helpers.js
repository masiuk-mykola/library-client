import dayjs from 'dayjs';
import { userTokenLSKey } from '@constants/common.js';

function getFormattedDateFromISOString(isoString, format) {
  return dayjs(isoString).format(format);
}

function gerToken() {
  try {
    const item = localStorage.getItem(userTokenLSKey);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
}

const helpers = {
  getFormattedDateFromISOString,
  gerToken
};

export default helpers;
