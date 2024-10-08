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
    setHTML('questions', htmlContent)
    const questionsElem = document.getElementById('questions')
    questionsElem.innerHTML = htmlContent
  }

  scrollToTop() {
    const timeUntilNewQuestions = 1500
    Pop.toast('Getting new questions!', 'question', 'top-end', timeUntilNewQuestions, true)
    setTimeout(() => { document.body.scrollIntoView({ behavior: 'smooth' }) }, timeUntilNewQuestions)
  }

  async answerQuestion(questionId, userAnswer) {
    try {
      const allquestionsAnswered = await questionsService.answerQuestion(questionId, userAnswer)
      if (allquestionsAnswered) this.scrollToTop()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}