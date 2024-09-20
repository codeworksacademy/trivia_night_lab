export class Question {
  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.answered = false
    this.answeredCorrectly = false
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div>
        <div>
          <span class="category bg-warning fw-bold">
            Question 1: ${this.category}
          </span>
          <span class="difficulty bg-info text-light">
            ${this.difficulty}
          </span>
        </div>
        <div class="border border-1 border-secondary rounded bg-dark p-3 mt-3">
          <p class="text-light fw-bold">${this.question}</p>
          <div>
            <button class="btn btn-outline-secondary">Something</button>
            <button class="btn btn-outline-secondary">Something</button>
            <button class="btn btn-outline-secondary">Something</button>
            <button class="btn btn-outline-secondary">Something</button>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

let data = {
  "type": "multiple",
  "difficulty": "easy",
  "category": "Entertainment: Video Games",
  "question": "Before it&#039;s redesign of the company logo in the year 2000, which 3D shape is NOT represented in the Electronic Arts logo?",
  "correct_answer": "Cylinder",
  "incorrect_answers": [
    "Pyramid",
    "Cube",
    "Sphere"
  ]
}