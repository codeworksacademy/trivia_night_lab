import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuestionsController {
  constructor() {
    AppState.on('questions', this.drawQuestions)
    AppState.on('activeCategory', this.getQuestionsByCategoryId)
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

  async getQuestionsByCategoryId() {
    try {
      await questionsService.getQuestionsByCategoryId()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawQuestions() {
    const questions = AppState.questions
    let htmlContent = ''
    questions.forEach(question => htmlContent += question.cardHTMLTemplate)
    const questionsElem = document.getElementById('questions')
    questionsElem.innerHTML = htmlContent
    questionsElem.scrollTo({ behavior: "smooth" })
  }

  async answerQuestion(questionId, userAnswer) {
    try {
      questionsService.answerQuestion(questionId, userAnswer)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}