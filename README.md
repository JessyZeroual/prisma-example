# Todo app avec Prisma

## Mise en place du projet

### Configuration

Installer Prisma en global

```
npm install -g prisma
```

Dans le fichier `server/prisma/docker-compose.yml.example` :

- Remplacer `<DATABASE_URL>` par votre connection String mongoDB
- Renommer le fichier `docker-compose.yml.example` par `docker-compose.yml`

### Démarrer le serveur

```
cd server/prisma
docker-compose up -d && npm install
prisma deploy

cd ../graphql
npm install
npm run start:watch
```

### Démarrer le client ( App React )

```
cd client
npm install && npm start
```

## Créer un nouveau projet avec Prisma

- [Prisma get started](https://v1.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/)
