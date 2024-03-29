class ProviderQuestion {

    static async getAllQuestionsQuestionnaire(id) {
        return fetch(`http://127.0.0.1:5000/quiz/api/v1.0/quiz/${id}/question`)
            .then(response => response.json())
    }

}

export default ProviderQuestion;