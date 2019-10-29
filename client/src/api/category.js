import getData from "./API-service";

class Category {

  static getCategoriesList() {
    return getData("category");
  }

  static getCategory(id, page) {
    return getData(`category/${id}?page=${page}`);
  }
}

export default Category;