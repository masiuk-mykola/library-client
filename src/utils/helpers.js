import dayjs from 'dayjs';

function getFormattedDateFromISOString(isoString, format) {
  return dayjs(isoString).format(format);
}

const helpers = {
  getFormattedDateFromISOString
};

export default helpers;
