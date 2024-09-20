import { triviaAPI } from "./AxiosService.js"

class CategoriesService {
  async getCategories() {
    const response = await triviaAPI.get('api_category.php')
    console.log('GOT CATEGORIES', response.data);
  }
}

export const categoriesService = new CategoriesService()