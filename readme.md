## 1.
```
npm start // to run fork mode

npm start CLUSTER // to run in Cluster mode
```
## 2 .
```
nodemon src/server.js // to run with nodemon mode cluster

ps // to see process list or task list

## 3 .
```
//FORK

forever src/server.js //run fork mode

forever list //list process with forever

```
//CLUSTER
forever src/server.js CLUSTER //run cluster mode
## 4.
```

pm2 src/server.js -w // FORK mode

pm2 start server.js -w -i max

```

```