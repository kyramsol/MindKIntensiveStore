import getData from "./API-service";

export default function getProducts() {
  return getData("products");
}
