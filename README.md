# MEAN Trello Tutorial

---

## Update Node Version

```bash
nvm install v20.11.0
nvm use v20.11.0
nvm alias default v20.11.0
```


## Install Latest Angular CLI

```bash
npm install -g @angular/cli@latest
```


## Setup Monorepo

```bash
yarn init -y

mkdir whatever
cd whatever
yarn init -y
```

Then, add in the root package.json:
- `workspaces` info
- `private` true


## Create New Angular App

```bash
ng new trello-client
```

---

## Run Angular UI

- See [mean-ui\'s README](mean-ui/README.md)
- In root folder, to run `ng-server`, type:

```bash
yarn workspace trello-client start
```

## Run Node Server

- See [mean-server\'s README](mean-server/README.md)
- In root folder, to run, type:

```bash
yarn workspace trello-server build
yarn workspace trello-server start
```

## Run Mongo Express

```bash
docker-compose up -d
docker logs mongo-express # to check
```
Type `admin:pass`
