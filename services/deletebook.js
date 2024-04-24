import { URL } from "./env";

export default async function deletebook(id){
await fetch(`${URL}/deleteBook/${id}`, {
  method: 'DELETE'
})
  
}