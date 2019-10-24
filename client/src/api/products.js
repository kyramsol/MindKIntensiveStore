import getData from "./API-service";

export default function getProducts() {
    const Url="http://localhost/api/products";
    return getData(Url);
}
