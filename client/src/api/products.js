import getData from "./API-service";

export default function getProducts() {
    const URL='products';
    return getData(URL);
}
