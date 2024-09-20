import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaAPI } from "./AxiosService.js";



class QuestionsService {
  async answerQuestion(questionId, userAnswer) {
    const question = AppState.questions.find(question => question.id == questionId)

    question.answered = true
    question.answeredCorrectly = question.correctAnswer == userAnswer

    AppState.emit('questions')

    const allQuestionsAnswered = AppState.questions.every(question => question.answered)

    if (allQuestionsAnswered) {
      setTimeout(async () => {
        AppState.activeCategory ? await this.getQuestionsByCategoryId() : await this.getQuestions()
      }, 1000)
    }
  }

  async getQuestions() {
    const response = await triviaAPI.get('api.php?amount=10')
    console.log('GOT QUESTIONS', response.data);
    AppState.questions = response.data.results.map(questionPOJO => new Question(questionPOJO))
  }

  async getQuestionsByCategoryId() {
    const category = AppState.activeCategory
    const response = await triviaAPI.get(`api.php?amount=10&category=${category.id}`)
    console.log('GOT QUESTIONS', response.data);
    AppState.questions = response.data.results.map(questionPOJO => new Question(questionPOJO))
  }
}

export const questionsService = new QuestionsService()