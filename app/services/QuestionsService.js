import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaAPI } from "./AxiosService.js";



class QuestionsService {
  async answerQuestion(questionId, userAnswer) {
    const question = AppState.questions.find(question => question.id == questionId)
    console.log(question, userAnswer);

    question.answered = true
    if (question.correctAnswer == userAnswer) {
      question.answeredCorrectly = true
    }

    AppState.emit('questions')

    const allQuestionsAnswered = AppState.questions.every(question => question.answered)

    if (allQuestionsAnswered) {
      setTimeout(async () => {
        await this.getQuestions()
      }, 2000)
    }
  }

  async getQuestions() {
    const response = await triviaAPI.get('api.php?amount=10')
    console.log('GOT QUESTIONS', response.data);
    AppState.questions = response.data.results.map(questionPOJO => new Question(questionPOJO))
  }
}

export const questionsService = new QuestionsService()