<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Nest.js Boilerplate</h1>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

The **Nest.js Boilerplate** is a foundational template designed to accelerate the development of scalable and efficient server-side applications. It incorporates commonly used packages, best practices, and modular architecture, making it easy to extend and adapt for various use cases.

This boilerplate is a perfect starting point for building modern, efficient, and maintainable applications with Nest.js.

## Project setup

Copy the example environment configuration file to .env:

```bash
$ cp .env.example .env
```

Install all required Node.js packages:

```bash
$ npm install
```

### Environment

```bash
# Firebase
FIREBASE_ADMIN_SDK = path/to/firebase-admin-sdk.json
```

### Environment Configuration Overview

| **Name**             | **Description**                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FIREBASE_ADMIN_SDK` | The Firebase Admin SDK used for server-side interactions with Firebase services. Replace `your_firebase_admin_sdk_here` with your actual SDK credentials. |

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](./LICENSE).
