class ProviderQuestion {

    static async getAllQuestionsQuestionnaire(id) {
        return fetch('http://127.0.0.1:5000/quiz/api/v1.0/question')
            .then(response => response.json())
            .then(data => {
               return data.filter(question => question.quiz_id === id);
            })
    }


}

export default ProviderQuestion;