export const DEFAULT_GET_OPTION: RequestInit = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
};

export const DEFAULT_POST_OPTION: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  credentials: 'include',
  // body: JSON.stringify(data)
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> => {
  const res = await fetch(input, init);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
};
