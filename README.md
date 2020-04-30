

- Configuration

		Installer Prisma en global
		npm install -g prisma

		Dans le fichier server/prisma/docker-compose.yml.example 
		-Remplacer <DATABASE_URL> par votre connection String mongoDB
		-Renommer le fichier docker-compose.yml.example par docker-compose.yml


------------------------------------------------------

- Démarrer le serveur

		cd server/prisma
        docker-compose up -d && npm install
        prisma deploy

		cd ../graphql
		npm install
		npm run start:watch



------------------------------------------------------

- Démarrer le client ( App React )

		cd client
        npm install && npm start  

------------------------------------------------------