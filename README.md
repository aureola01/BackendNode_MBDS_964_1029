# backend du projet MEAN 
## Participants:
AH-THAN FIOMBONANA Marie Auréola .Numéro: 01  
RANDRIAMIHANTA Ny Aina Fanilo .Numéro: 43  

Les membres de l'équipe s'est distribué les taches et ont chacun participé grandement dans la réalisation du projet.  

La partie backend est hebergé sur render.com : https://backend-mbds-964-1029.onrender.com/  
Les diffenrents endpoints des APIs sont visibles dans le code.  

Voici le lien pour se connecter à la base de données Mongo via MongoDb compass: mongodb+srv://root:root@mycluster.qgv6h72.mongodb.net/admin?authSource=admin&replicaSet=atlas-7m7y9r-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true  

## Travail réalisé:
I- Authentification et gestion d'utilisateur 
- Ajout d'une nouvelle collection type user qui peut etre *user*(élève) ou *admin*(prof).
- Cryptage des mot de passes avec bcrypt
- JWT authentication (en s'appyant sur les expériences professionnelles + chatGPT nous a aidé dans les fonctions (jwt.verify, etc...) )
- Déconnexion

II- CRUD *assignment* 
- Modification du modèle *Assignment* avec les nouvelles propriétés (+ auteur, matière, note et remarques)
- Générer 1000 *assignments* avec les nouvelles propriétés de la structure de *Assignment* sur https://www.mockaroo.com/
- Modification des APIs de CRUD de l'*Assignment* suivant la nouvelle structure.
- gestion cors origin
