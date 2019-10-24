import getData from "./API-service";

export default function getCategory(id) {
  const Url = `http://localhost/api/category/${id}`;
  return getData(Url);
}
