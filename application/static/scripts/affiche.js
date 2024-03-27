
function deleteQuiz(id) {

    fetch(`/quiz/api/v1.0/quiz/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => console.log(data));
}

function updateQuiz(id, newName) {
    fetch(`/quiz/api/v1.0/quiz/${id}`,
        {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ "name": newName })
        })
        .then(response => response.json())
        .then(data => console.log(data));

}

function deleteQuestion(id) {
    console.log(id);
    fetch(`/quiz/api/v1.0/question/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => console.log(data));

}

function updateQuestion(id, newTitle) {
    fetch(`/quiz/api/v1.0/question/${id}`,
        {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ "title": newTitle })
        })
        .then(response => response.json())
        .then(data => console.log(data));

}

function afficheQuiz() {
    function afficheQuestion(id) {
        let quiz = document.getElementById(id);
        if (quiz.classList.contains('quiz')) {
            quiz.classList.remove('quiz');
            for (let child of quiz.childNodes) {
                if (child.tagName === 'UL') {
                    child.remove();
                    return;
                }
            }

        }
        else {
            quiz.classList.add('quiz');
            let list = document.createElement('ul');
            let div = document.createElement('div');
            list.appendChild(div);
            quiz.appendChild(list);
            console.log(quiz);
            fetch(`/quiz/api/v1.0/quiz/${id}/question`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let questions = data;
                    if (questions.length === 0) {
                        div.innerHTML = 'Aucune question';
                        return;
                    }
                    for (let question of questions) {
                        let div_question = document.createElement('div');
                        let li = document.createElement('li');
                        li.appendChild(div_question);
                        div_question.textContent = question.title;
                        let modif = document.createElement('button');
                        modif.textContent = 'Modifier';
                        modif.onclick = () => {
                            let newTitle = prompt('Nouveau titre');
                            if (newTitle) {
                                updateQuestion(question.question_id, newTitle);
                            }
                        }
                        let form = document.createElement('form');
                        let supp = document.createElement('button');
                        supp.textContent = 'Supprimer';
                        supp.onclick = () => deleteQuestion(question.question_id);
                        form.appendChild(modif);
                        form.appendChild(supp);
                        li.appendChild(form);
                        list.appendChild(li);
                    }
                }).catch(error => div.innerHTML = 'Erreur' + error);
            let form = document.createElement('form');
            let add = document.createElement('button');
            add.textContent = 'Ajouter une question';
            add.onclick = () => {
                let newTitle = prompt('Titre de la question');
                if (newTitle) {
                    fetch('/quiz/api/v1.0/question',
                        {
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/json"
                            },
                            "body": JSON.stringify({ "title": newTitle, "quiz_id": id })
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            let li = document.createElement('li');
                            li.textContent = newTitle;
                            li.id = data.question_id;
                            list.appendChild(li);
                        });
                }
            }
            form.appendChild(add);
            div.appendChild(form);
        }

    }

    document.addEventListener('DOMContentLoaded', function() {
        let quizs = fetch('/quiz/api/v1.0/quiz')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let quizs = data;
                let list = document.getElementById('quiz');
                for (let quiz of quizs) {
                    let li = document.createElement('li');
                    let div = document.createElement('div');
                    li.appendChild(div);
                    div.textContent = quiz.name;
                    let modif = document.createElement('button');
                    modif.textContent = 'Modifier';
                    modif.className = 'modif';
                    modif.onclick = () => {
                        let newName = prompt('Nouveau nom');
                        if (newName) {
                            updateQuiz(quiz.quiz_id, newName);
                        }
                    };
                    let form = document.createElement('form');
                    let supp = document.createElement('button');
                    supp.textContent = 'Supprimer';
                    supp.onclick = () => deleteQuiz(quiz.quiz_id);
                    li.id = quiz.quiz_id;
                    li.onclick = () => afficheQuestion(quiz.quiz_id);
                    form.appendChild(modif);
                    form.appendChild(supp);
                    li.appendChild(form);
                    list.appendChild(li);
                }
            });
    });

}

afficheQuiz();