export const fetcher = {
  get: async (url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    return handleResponseData(res);
  },
  post: async <T>(url: string, data: T, init?: RequestInit) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      ...init
    });
    return handleResponseData(res);
  },
  delete: async (url: string, init?: RequestInit) => {
    const res = await fetch(url, {
      method: 'DELETE',
      ...init
    });
    return handleResponseData(res);
  }
};

const handleResponseData = (response: Response) => {
  if (!response.status || response.status >= 300) {
    throw response;
  }
  return response;
};
