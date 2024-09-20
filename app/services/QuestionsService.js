import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

// @ts-ignore
const triviaAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 5000
})

class QuestionsService {
  async getQuestions() {
    const response = await triviaAPI.get('?amount=10')
    console.log('GOT QUESTIONS', response.data);
    AppState.questions = response.data.results.map(questionPOJO => new Question(questionPOJO))
  }
}

export const questionsService = new QuestionsService()