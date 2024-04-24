import { URL } from "./env";

export default async function postadd(data) {
    try {
      const response = await fetch(`${URL}/createBook`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch data: ' + error.message);
    }
  }