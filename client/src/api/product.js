import getData from "./API-service";

export default function getProduct(id) {
  return getData(`product/${id}`);
}
