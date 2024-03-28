# Questionnaire VUE 

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)


## Description du projet

Ce projet est un questionnaire avec une partie client réalisée avec Vue.js.
La partie serveur est lancée avec flask et a été réalisée en python.

## Membres du projet

[![Yannis BARACHE](https://img.shields.io/badge/Yannis%20Barache-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Yannis-barache)
[![Khalil ABADA](https://img.shields.io/badge/Khalil%20Abada-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Khalil-45)

## Installation

Pour commencer, clonez le dépôt sur votre machine locale 

```bash
git clone https://github.com/Yannis-barache/QuestionnaireVue
``` 

Puis installez les dépendances.
```bash
npm install
```

## Lancement 

### Lancement de la partie client
Pour lancer le serveur, exécutez la commande suivante : 

```bash
npm run dev
```

### Lancement de la partie serveur

Un script `setup.sh` est disponible pour installer les dépendances du serveur.

```bash
./setup.sh
```

Une fois fait vous devez vous placer dans l'environnement virtuel créé et lancer le serveur avec les commandes suivantes : 

```bash
source venv/bin/activate
flask run
```

