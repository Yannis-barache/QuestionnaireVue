from flask import jsonify, request, render_template
from .app import app
from .models import (
    db_create_question,
    db_create_quiz,
    db_get_all_quiz,
    db_get_quiz,
    Question,
    db_get_all_question,
    db_get_question,
    db_delete_quiz,
    db_delete_question,
    db_update_quiz,
    db_update_question
)


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/quiz/api/v1.0/quiz', methods=["GET"])
def get_all_quiz():
    return jsonify(
        [q.to_json() for q in db_get_all_quiz()]
    )


@app.route('/quiz/api/v1.0/quiz/<int:quiz_id>', methods=["GET"])
def get_quiz(quiz_id):
    return jsonify(db_get_quiz(quiz_id).to_json())


@app.route('/quiz/api/v1.0/question', methods=["GET"])
def get_all_question():
    return jsonify([q.to_json() for q in db_get_all_question()])


@app.route('/quiz/api/v1.0/question/<int:question_id>', methods=["GET"])
def get_question(question_id):
    return jsonify(db_get_question(question_id).to_json())


@app.route('/quiz/api/v1.0/quiz', methods=["POST"])
def create_quiz():
    json = request.json
    return jsonify(
        db_create_quiz(json).to_json()
    )


@app.route('/quiz/api/v1.0/question', methods=["POST"])
def create_question():
    json = request.get_json()
    print(json)
    return jsonify(
        db_create_question(json).to_json()
    )


@app.route('/quiz/api/v1.0/quiz/<int:quiz_id>', methods=["DELETE"])
def delete_quiz(quiz_id):
    deleted_quiz = db_delete_quiz(quiz_id)
    return jsonify({"message": f"Quiz '{deleted_quiz.name}' deleted successfully"})


@app.route('/quiz/api/v1.0/question/<int:question_id>', methods=["DELETE"])
def delete_question(question_id):
    deleted_question = db_delete_question(question_id)
    return jsonify({"message": f"Question '{deleted_question.title}' deleted successfully"})


@app.route('/quiz/api/v1.0/quiz/<int:quiz_id>', methods=["PUT"])
def update_quiz(quiz_id):
    data = request.get_json()
    new_name = data.get('name')
    updated_quiz = db_update_quiz(quiz_id, new_name)
    return jsonify(updated_quiz.to_json())


@app.route('/quiz/api/v1.0/question/<int:question_id>', methods=["PUT"])
def update_question(question_id):
    data = request.get_json()
    new_title = data.get('title')
    updated_question = db_update_question(question_id, new_title)
    return jsonify(updated_question.to_json())


@app.route('/quiz/api/v1.0/quiz/<int:quiz_id>/question', methods=["GET"])
def get_quiz_questions(quiz_id):
    return jsonify(
        [q.to_json() for q in db_get_quiz(quiz_id).questions]
    )
