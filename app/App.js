import { CategoriesController } from './controllers/CategoriesController.js';
import { QuestionsController } from './controllers/QuestionsController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  QuestionsController = new QuestionsController()
  CategoriesController = new CategoriesController()
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
