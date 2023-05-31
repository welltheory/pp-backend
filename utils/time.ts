import dayjs, { ConfigType, ManipulateType } from 'dayjs';

interface PassedOptions {
  from?: ConfigType;
  to?: ConfigType;
  threshold?: [number, ManipulateType];
}

const delay = (ms: number) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export default {
  hasPassed: (options = {} as PassedOptions) => {
    const { from, to, threshold = [0, 'minute'] } = options;
    return dayjs(from).add(...threshold).isBefore(dayjs(to || dayjs()));
  },
  delay,
  wait: delay, 
  sleep: delay,
};
