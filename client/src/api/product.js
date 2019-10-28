import getData from "./API-service";

export default function getProduct(id) {
  const Url = `product/${id}`;
  return getData(Url);
}
