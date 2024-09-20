import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";

export class QuestionsController {
  constructor() {
    this.getQuestions()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}