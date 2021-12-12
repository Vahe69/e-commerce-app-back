<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Projet de création d'un site e-commerce

Nous sommes sur le répertoire back-end. 
Merci de commencer à faire cette installation avant d'installer le front-end via la commande :

```git clone https://github.com/Vahe69/e-commerce-app-back.git```

## Installation

Une fois la commande terminé, déplacez-vous dans le répertoire du projet. Puis exécutez la commande suivante : 

```bash
$ npm install
```

## Pour lancer l'application

Pour lancer le projet après l'installation de celui-ci, il faut lancer la commande suivante :

```bash
$ npm start
```
ou
```bash
$ nest start
```
Le projet va se lancer sur l'url suivante : [http://localhost:3030](http://localhost:3030) Vous pouvez tester l'application via l'application Postman selon les différentes routes de l'application expliquée dans la partie ci-dessous. Ou alors tester l'application avec le front en suivant l'installation et le lancement de celle-ci sur [https://github.com/Vahe69/e_commerce-app](https://github.com/Vahe69/e_commerce-app)


## Explication de l'application

L'application Nest comporte plusieurs routes selon les méthodes HTTP : 

- /, GET

Permet juste de tester l'application.

- /users, GET

Permet de récupérer tous les utilisateurs.

- /users/auth, GET

Permet de récupérer l'authentification de l'utilisateur.

- /users/add, POST

Permet d'ajouter un nouveau utilisateur.

- /users/auth, POST

Permet de s'authentifier sur la page de connexion.

- /products, GET

Permet de récupérer tous les produits.

- /users/commande, GET

Permet de récupérer la commande de l'utilisateur.

- /users/commande/:id, POST

Permet d'ajouter un produit dans la commande de l'utilisateur.

Fait par : - THOBOIS Antonin. - ODIN Anthony.