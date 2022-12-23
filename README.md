**Overview**

This is a premade template repo allowing a quick start for new projects and ease of use. It is based on the most essential libraries most apps need.

The project backbone relies on a powerful serverless database [Xata](https://xata.io/), which comes with a generous free tier suitable for small-mid size projects and has an elegant type-safe API for your queries.

- NOTE - as of currently using Xata on the client side, exposes the API keys, to prevent leaking your keys Xata is working on implementing Cloudflare workers to query the Database and this feature is currently in private BETA. You can join the [waitlist](https://xata.io/beta/workers). If you do not have access to the private beta yet, this repo is not for you. If you wish to use Xata in your own projects then it is recommended to use server-side-rendering like NextJS or setup your own backend to prevent exposing your API keys.

The rest of the libraries included:

[Vite](https://github.com/vitejs/vite): A performant, opinionated web development build tool that serves your code via native ES Module imports during development and bundles it with Rollup for production.

[Typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.

[ESLint](https://eslint.org/): with a slighly modified Airbnb config providing a set of rules for enforcing a consistent coding rules.

[Prettier](https://prettier.io/): A code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

[react-router-dom](https://reactrouter.com/): A routing library for React that provides a simple way to declaratively map routes to your application and transform the URL into the state of your application.

[Redux](https://redux.js.org/): A state management library that helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[react-query](https://react-query.tanstack.com/): A library for fetching, caching, and updating asynchronous data in React applications, with a simple, declarative API for managing server and client state.

**Getting Started**

To get started with this boilerplate app, clone the repository and install the dependencies:

    git clone https://github.com/Exrun94/code-perfect-react-boilerplate.git
    cd code-perfect-react-boilerplate
    npm install

Install the Xata Cli

    npm i --location=global @xata.io/cli

Register your Xata account and create your database and API key - https://xata.io/docs/intro/getting-started

Authenticate your API keys through the CLI

    xata auth login

Initiate the xata/client

    xata init

Initiate the xata workers

    xata workers init && xata workers upload
