export default (inStr: string, inObj: Record<string, string>, inDefault?: string) => {
  const defaultVal = inDefault || '';
  const keys = Object.keys(inObj);
  const key = keys.find((key) => inStr.includes(key));
  return key ? inObj[key] : defaultVal;
};
