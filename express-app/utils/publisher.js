const Broker = require('rascal').BrokerAsPromised
// const broker = require('rascal').PublicationSession
const config = require('../configuration/config.json');


const sendToDirectPublisher = async(name, message)=>{
    const broker = await Broker.create(config);
    broker.on('error', console.error);
    const publisherName = `pub_direct${name}`
    const availableName = Object.keys(config.vhosts['test'].publications)
    const isAvailable =()=>{ 
        for(i in availableName){
            if(availableName[i] === publisherName){
            return 1
        }
    }
    }
   if(isAvailable()===1 ){
        for (let i = 0; i<10000; i++) {
        const publication1 = await broker.publish(publisherName, message);
        publication1.on('error', console.error);

        }
    }
    else{
        throw new Error('Publisher is not avaiable')
    }
}

const sendToFanoutPublisher= async(name, message)=>{
    const broker = await Broker.create(config);
    broker.on('error', console.error);
    const publisherName = `pub_fanout${name}`
    const availableName = Object.keys(config.vhosts['/'].publications)
    const isAvailable =()=>{ 
        for(i in availableName){
            if(availableName[i] === publisherName){
            return 1
        }
    }
    }
    // const options = { headers : {
    //     name : "shubham"
    // }}
    // exchangeName: string,
    // exchangeType: string,
    // routingKey: string,
    // message: object,
    // headers: object = {},
    // deliveryMode: number = 2
    if(isAvailable()===1 ){
    const publication1 = await broker.publish(publisherName, message);
    publication1.on('error', console.error);
    }
    else{
        throw new Error('Publisher is not avaiable')
    }
}


const sendToTopicPublisher= async(name, message)=>{
    const broker = await Broker.create(config);
    broker.on('error', console.error);
    const publisherName = `pub_topic${name}`
    const availableName = Object.keys(config.vhosts['/'].publications)
    const isAvailable =()=>{ 
        for(i in availableName){
            if(availableName[i] === publisherName){
            return 1
        }
    }
    }
    console.log(publisherName, isAvailable());    
    if(isAvailable()===1 ){
    const publication1 = await broker.publish(publisherName, message);
    publication1.on('error', console.error);
    }
    else{
        throw new Error('Publisher is not avaiable')
    }
}


module.exports = {sendToTopicPublisher, sendToDirectPublisher, sendToFanoutPublisher}