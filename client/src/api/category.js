import getData from "./API-service";

export default function getCategory(id, page) {
  const Url = `category/${id}?page=${page}`;
  return getData(Url);
}
