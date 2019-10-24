import getData from "./API-service";

export default function getProduct(id) {
    const Url=`http://localhost/api/product/${id}`;
    return getData(Url);
}