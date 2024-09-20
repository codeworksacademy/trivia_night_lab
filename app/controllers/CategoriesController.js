import { categoriesService } from "../services/CategoriesService.js";
import { Pop } from "../utils/Pop.js";

export class CategoriesController {
  constructor() {
    this.getCategories()
  }

  async getCategories() {
    try {
      await categoriesService.getCategories()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}
