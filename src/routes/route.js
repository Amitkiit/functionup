const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const newAuthorModel=require("../models/newAuthorModel")
const newPublisherModel= require("../models/newPublisherModel")
const newBookModel=require("../models/newBookModel")
const myController = require("../controllers/myController")


router.post("/newAuthorCreate",myController.newAuthor)
router.post("/newPublisherCreate",myController.newPublisher)
router.post ("/newBookCreate",myController.newBook)
router.get("/findBook",myController.getBook)
router.put("/updateBook",myController.updateBook)

























// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;