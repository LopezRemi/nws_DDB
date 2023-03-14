const express = require("express")
const router = express.Router()
const Ingredient = require("../models/ingredients")

const IndexController = require("../controllers/index.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")

router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)

router.get("/ingredients", async (request,response)=>{
    const myIngredients = await Ingredient.find()
    console.log(myIngredients)
    response.json({data:myIngredients})})

router.post("/ingredients", async (request,response)=>{
    const myIngredients = new Ingredient({ingredients:"Beef"})
    await myIngredients.save()
    console.log(myIngredients)
    response.json({data:myIngredients})})    

router.get("/main", async (request,response)=>{
    const myMains = await Main.find()
    console.log(myMains)
    response.json({data:myMains})})

module.exports = router

