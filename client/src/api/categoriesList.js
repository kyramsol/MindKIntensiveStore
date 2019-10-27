import getData from "./API-service";

export default function getCategoriesList() {
  const Url = "category";
  return getData(Url);
}
