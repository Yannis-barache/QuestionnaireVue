import Question from './Question.js';
class Questionnaire {
    text;

    constructor(text) {
        this.text = text;
        this.questions = [];
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    addQuestions(text, answers, correctAnswer) {
        let id = this.questions.length;
        let question = new Question(id, text, correctAnswer);


    }

    getQuestions() {
        return this.questions;
    }


}

export default Questionnaire;
