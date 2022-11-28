const RECORD_TYPE = {
  IN: 'IN',
  OUT: 'OUT',
};
const MAX_HOUR = 23;
const MAX_MIN = 59;
const HOUR_TO_SEC = 3600;
const MIN_TO_SEC = 60;

function convertToSec(startTime, endTime) {
  const [startHour, startMin] = startTime.split(':').map((item) => +item);

  if (!endTime) {
    return MAX_HOUR * HOUR_TO_SEC + MAX_MIN * MIN_TO_SEC - (startHour * HOUR_TO_SEC + startMin * MIN_TO_SEC);
  }

  const [endHour, endMin] = endTime.split(':').map((item) => +item);

  return endHour * HOUR_TO_SEC + endMin * MIN_TO_SEC - (startHour * HOUR_TO_SEC + startMin * MIN_TO_SEC);
}

function convertSecToMin(sec) {
  return Math.floor(sec / 60);
}

function cal(fees, time) {
  const [baseTime, basePrice, unitTime, unitPrice] = fees;

  if (time <= baseTime) {
    return basePrice;
  }

  return basePrice + Math.ceil((time - baseTime) / unitTime) * unitPrice;
}

function solution(fees, records) {
  const answer = [];

  const table = {};

  for (let i = 0; i < records.length; i++) {
    const [time, num, type] = records[i].split(' ');

    table[num] = table[num] ? [...table[num], [time, type]] : [[time, type]];
  }

  const keys = Array.from(Object.keys(table)).sort((a, b) => +a - +b);

  for (let i = 0; i < keys.length; i++) {
    const recordsOfKey = table[keys[i]];
    let total = 0;

    const [timeOfLastItem, typeOfLastItem] = recordsOfKey[recordsOfKey.length - 1];
    if (typeOfLastItem === RECORD_TYPE.IN) {
      total = total + convertSecToMin(convertToSec(timeOfLastItem));
      recordsOfKey.pop();
    }

    while (recordsOfKey.length > 0) {
      const [endTime] = recordsOfKey.pop();
      const [startTime] = recordsOfKey.pop();

      total = total + convertSecToMin(convertToSec(startTime, endTime));
    }
    answer.push(total);
  }

  return answer.map((time) => cal(fees, time));
}
