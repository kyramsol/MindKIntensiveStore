import getData from "./API-service";

export default function getCategoriesList() {
  return getData("category");
}
