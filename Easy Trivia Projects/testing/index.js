import { getQuestions } from "easy-trivia";

getQuestions({
  category: null,
  type: 'multiple',
  difficulty: 'easy',
  amount: 3
}).then(console.log);