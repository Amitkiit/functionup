const newAuthorModel=require("../models/newAuthorModel")
const newPublisherModel= require("../models/newPublisherModel")
const newBookModel=require("../models/newBookModel")


const newAuthor=async function(req,res){
    let data =req.body
   let AuthorDetails= await newAuthorModel.create(data)
   res.send({msg:AuthorDetails})
}

const newPublisher=async function(req,res){
    let body =req.body
    let publisherDetail=await newPublisherModel.create(body)
    res.send({msg:publisherDetail})
}

const newBook=async function(req,res){
    let data =req.body

    let a= await newAuthorModel.findOne({_id:"63a3a3b5285863daa9377a9a"})
    let b= await newPublisherModel.findOne({_id:"63a3a9c42b6007458346a33d"})
    //console.log(b)
    if (!data.authorID){
        res.send({msg:"authorid  is required"})
    }
    else if(data.authorID);{
        
        if(data.authorID==a._id){
            if (!data.publisherID){
                res.send({msg:"publisherid is required"})
            
            }
            else if(data.publisherDetail);{
                if (data.publisherID==b._id){
                    let bookDetail= await newBookModel.create(data)
                    res.send({msg:bookDetail})
                }
                else{
                    res.send({msg:"publisher is invalid"})
                }
            }

        }
        else{
            res.send({msg:"author is invalid"})
        }
        

    }

}



const getBook=async function(req,res){

    let findBook=await newBookModel.find().populate("authorID").populate("publisherID")
    res.send({msg:findBook})
}

//last problem
const updateBook=async function(req,res){
    let newbook=await newBookModel.updateMany(
        {ratings:{$gt:3.5}},
        {$set:{price:10}}
        )
        res.send({msg:newBook})
}







module.exports.newAuthor=newAuthor;
module.exports.newPublisher=newPublisher
module.exports.newBook=newBook
module.exports.updateBook=updateBook
module.exports.getBook=getBook