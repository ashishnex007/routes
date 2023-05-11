const express= require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({data:"take the comments"})
})
router.post('/',(req,res)=>{
    res.send({data:"these are the comments"})
})


module.exports=router