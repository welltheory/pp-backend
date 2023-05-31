export default {
  parse: (str: any, defaultValue = null as any) => {
    try {
      const parsed = JSON.parse(str);
      return parsed;
    } catch (e) {
      return defaultValue;
    }
  },
};
