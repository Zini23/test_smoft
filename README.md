# test_smoft

étapes pour tester le projet côté serveur

1/Installer l'environnement local :
Placez le dossier test_smoft dans le répertoire htdocs de votre serveur local.

2/Créer une base de données :
Dans phpMyAdmin, créez une base de données nommée smoft_test.

2/Importer la structure de la base de données :
Importez le fichier tasks.sql dans la base de données smoft_test. Ce fichier contient la structure de la table des tâches.


test_smoft/
│
├── api/
│   ├── index.php
│   ├── tasks/
│   │   └── get_tasks.php
│   └── utils/
│       └── database.php
│
└── config/
    └── database.php

*Le dossier test_smoft est la racine de votre projet.
*Le dossier api contient tous les fichiers liés à votre API.
    *Le fichier index.php peut être utilisé comme point d'entrée de votre API, où vous pouvez router les requêtes vers les fichiers appropriés dans d'autres dossiers.
    *Le dossier tasks contient le fichier get_tasks.php, qui est responsable de la récupération des tâches depuis la base de données.
    *Le dossier utils contient le fichier database.php, qui contient des fonctions pour établir une connexion à la base de données.
*Le dossier config contient des fichiers de configuration, comme database.php, qui pourrait contenir des informations de configuration pour se connecter à la base de données.

http://localhost/test_smoft/api/taskes/get_taskes.php?page=1&pageSize=10

page: Numéro de la page,
pageSize: éléments par page 

étapes pour tester le projet côté client
1/ Accéder au dossier du projet :
Ouvrez une console ou un terminal et naviguez jusqu'au dossier du projet côté client, task-manager.
2/ Installer les dépendances :
Exécutez la commande npm install pour installer toutes les dépendances nécessaires au projet. Cela installera les packages définis dans le fichier package.json.
3/ Lancer le serveur de développement :
Après l'installation des dépendances, exécutez la commande npm start. Cela démarrera le serveur de développement et ouvrira automatiquement votre navigateur par défaut avec l'application React en cours d'exécution.
Si le navigateur ne s'ouvre pas automatiquement, vous pouvez accéder à l'application en ouvrant un navigateur et en naviguant vers l'URL suivante : http://localhost:3000.
