import getData from "./API-service";

export default function getProducts() {
    const Url='products';
    return getData(Url);
}
