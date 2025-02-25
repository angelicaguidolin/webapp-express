//REQUIRE
const cors =require('cors');
const express = require('express');
const MoviesRouters= require("./routers/MoviesRouters");
const routeNotFound= require("./middleware/NotFoud");
const handleError=require("./middleware/handleError");
//SETUP
const app = express()
const { PORT, FRONT_URL }=process.env ; // "3000" "localhost"
//MIDDLEWARE (GLOBALI E PARSING)
app.use(express.static('public'))
app.use(express.json())
//CORS (COMUNICAZIONE PER IL FRONT-END)
app.use (cors({
    origin: FRONT_URL
}))

//MIDD. ERRORI
app.use(routeNotFound)
app.use(handleError)
//ROUTES (ROTTE DELL'APP)
app.use("/movies",MoviesRouters)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})