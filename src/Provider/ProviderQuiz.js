class ProviderQuiz {
    static async getAllQuiz() {
    return fetch('http://127.0.0.1:5000/quiz/api/v1.0/quiz')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    static async getQuizbyId(id) {
        return fetch(`http://127.0.0.1:5000/quiz/api/v1.0/quiz/${id}`)
          .then(response => response.json())
          .then(data => {
            return data;
          })
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }

    static async deleteQuiz(id) {

        return fetch(`http://127.0.0.1:5000/quiz/api/v1.0/quiz/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    static async updateQuiz(id, newName) {
        return fetch(`http://127.0.0.1:5000/quiz/api/v1.0/quiz/${id}`,
            {
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({"name": newName})
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    }

    static async createQuiz(name) {
        return fetch('http://127.0.0.1:5000/quiz/api/v1.0/quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name}),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

export default ProviderQuiz;


