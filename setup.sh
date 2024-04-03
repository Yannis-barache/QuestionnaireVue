virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
echo "FLASK_APP=application" > .flaskenv
echo "FLASK_DEBUG= TRUE" >> .flaskenv

echo "Setup complete. Lancez 'source venv/bin/activate' pour activer l'environnement virtuel."
