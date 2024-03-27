class Question{
    constructor(id, question, answer){
        this.id = id;
        this.question = question;
        this.answer = answer;
    }
    checkAnswer(answer){
        return this.answer === answer;
    }
    getQuestion(){
        return this.question;
    }


    getAnswer(){
        return this.answer;
    }
    getId(){
        return this.id;
    }


}

export default Question;
