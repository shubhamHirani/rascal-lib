const express= require('express')
const {sendToDirectPublisher, sendToTopicPublisher, sendToFanoutPublisher} = require('../utils/publisher')
const router = express.Router()


router.post('/direct',async (req,res)=>{
    try{
    const queueName = req.body.queueName
    const message = req.body.message
    await sendToDirectPublisher(queueName, message)
    res.status(200).send({ok: 'true', status: 'message sent succesfully'})
    }
    catch(err){
        res.status(400).send({ok: 'false', status: 'something went wrong'})
    }
})


router.post('/fanout',async (req,res)=>{
    try{
    const queueName = req.body.queueName
    const message = req.body.message
    await sendToFanoutPublisher(queueName, message)
    res.status(200).send({ok: 'true', status: 'message sent succesfully'})
    }
    catch(err){
        res.status(400).send({ok: 'false', status: 'something went wrong'})
    }
})


router.post('/topic',async (req,res)=>{
    try{
    const queueName = req.body.queueName
    const message = req.body.message
    await sendToTopicPublisher(queueName, message)
    res.status(200).send({ok: 'true', status: 'message sent succesfully'})
    }
    catch(err){
        res.status(400).send({ok: 'false', status: 'something went wrong'})
    }
})


module.exports = router