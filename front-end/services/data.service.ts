const BASE_URL = "http://localhost:4000";
const HEADERS = {
  "Content-Type": "application/json",
};

const RESPONSE_JSON = (res: Response) => res.json();

export const DataService = {
  Account: {
    login: async (id: number) => {
      return await fetch(`${BASE_URL}/account/login`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ id }),
      }).then(RESPONSE_JSON);
    },
  },
  DataEntry: {
    getAllData: async () => {
      return await fetch(`${BASE_URL}/data-entry`, {
        method: "GET",
        headers: HEADERS,
      }).then(RESPONSE_JSON);
    },
    getFormData: async (form: 1 | 2) => {
      return await fetch(`${BASE_URL}/data-entry/${form}`, {
        method: "GET",
        headers: HEADERS,
      }).then(RESPONSE_JSON);
    },
    setData: async (key: string, value: any) => {
      await fetch(`${BASE_URL}/data-entry`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ key, value }),
      });
    },
    deleteData: async (key: string) => {
      await fetch(`${BASE_URL}/data-entry/${key}`, {
        method: "DELETE",
        headers: HEADERS,
      });
    },
    resetData: async () => {
      await fetch(`${BASE_URL}/data-entry/reset`, {
        method: "POST",
        headers: HEADERS,
      });
    },
  },
};
