// @ts-ignore
const triviaAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 5000
})

class QuestionsService {
  async getQuestions() {
    const response = await triviaAPI.get('?amount=10')
    console.log('GOT QUESTIONS', response.data);

  }
}

export const questionsService = new QuestionsService()