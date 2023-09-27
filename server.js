const express=require("express");
const app = express();
const dbConfig = require('./db.js');
const roomsRoute=require('./routes/roomsRoute.js');
const usersRoute=require('./routes/usersRoute.js');
app.use(express.json());
app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)
const port=process.env.PORT || 4000;
app.listen(port,() => console.log(`server is running on ${port}`));