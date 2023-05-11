const express= require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({data:"here are the users"})
})
router.post('/',(req,res)=>{
    res.send({data:"users created"})
})
router.put('/',(req,res)=>{
    res.send({data:"users updated"})
})
router.delete('/',(req,res)=>{
    res.send({data:"users deleted"})
})

module.exports = router