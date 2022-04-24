
# Market Project

A simple and collaborative market project.

### Backend
- Built using MySQL, Sequelize, Node and Express
- To run backend you can just follow the steps bellow

First create a database named whatever you want, but set this name and another options on .env file (env_example shows how to insert the info), and then you can just copy and paste the following commands to install all dependencies and run all sequelize migrations and seeds:

```js
npm install
npm run config
```
If you've faced some error running "npm run config", try to use sudo steatment.

Now to run your backend you can use:
```js
npm start
```
Or the following for debug/development:
```js
npm run dev
```