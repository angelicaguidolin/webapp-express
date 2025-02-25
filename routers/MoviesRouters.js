const express =require("express");
const router= express.Router();
const movieController= require("../controller/movieController")
//LISTA ROTTE
//INDEX
router.get("/",movieController.index)
//SHOW
router.get("/:id",movieController.show)
//DESTROY
router.delete("/:id",movieController.destroy)
module.exports=router