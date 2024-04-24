import { URL } from "./env";

export default async function getData(){
    const response = await fetch(`${URL}/getAllBook`);
  const result = await response.json();
  return (result.content);

}