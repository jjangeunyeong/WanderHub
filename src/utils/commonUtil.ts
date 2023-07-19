export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

type QueryToObjType = {
  [key: string]: string;
};
export const querystringToObject = (queryString: string): QueryToObjType => {
  const queryObject: QueryToObjType = {};
  if (!queryString) queryObject;
  const queryParams = queryString.substr(1).split('&');
  for (const param of queryParams) {
    const [key, value] = param.split('=');
    if (!key) {
      continue;
    }
    queryObject[key] = value;
  }
  return queryObject;
};
export const objectToQuerystring = (queryObject: QueryToObjType): string => {
  const keys = Object.keys(queryObject);
  if (keys.length === 0) return '';

  const queryString = keys.map(key => `${key}=${queryObject[key]}`).join('&');

  return `?${queryString}`;
};
