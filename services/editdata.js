import { URL } from "./env";

export default async function editdata(data,id){
    
    try {
        const response = await fetch(`${URL}/updateBook/${id}`, {
          method: 'PUT',
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