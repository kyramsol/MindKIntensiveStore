import getData from "./API-service";

export default function getCategory(id) {
  const Url = `category/${id}`;
  return getData(Url);
}
