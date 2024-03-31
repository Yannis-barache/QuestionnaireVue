class ProviderQuestion {
    static async getAllQuestionsQuestionnaire(id) {
        const response = await fetch(`http://127.0.0.1:5000/quiz/api/v1.0/quiz/${id}/question`);
        return response.json();
    }

    static async createQuestion(question) {
        const response = await fetch('http://127.0.0.1:5000/quiz/api/v1.0/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    static async getQuestion(id) {
        const response = await fetch(`http://127.0.0.1:5000/quiz/api/v1.0/question/${id}`);
        return response.json();
    }

    static async updateQuestion(id, updatedQuestion) {
        const response = await fetch(`http://127.0.0.1:5000/quiz/api/v1.0/question/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedQuestion)
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    static async deleteQuestion(id) {
        const response = await fetch(`http://127.0.0.1:5000/quiz/api/v1.0/question/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }
}

export default ProviderQuestion;