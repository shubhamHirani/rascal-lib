const Broker = require('rascal').BrokerAsPromised
const config = require('./config.json');

(async () => {
  try {
    const broker = await Broker.create(config);
    broker.on('error', console.error);

    // let msg = 'this is for class 9'
    // // Publish a message
    // const publication1 = await broker.publish('pub_direct9', msg);
    // publication1.on('error', console.error);


    //  msg = 'this is for class 10'
    // // Publish a message
    // const publication2 = await broker.publish('pub_direct10', msg);
    // publication2.on('error', console.error);


     msg = 'this is for class 11'
    // Publish a message
    const publication3 = await broker.publish('pub_topic1', msg);
    publication3.on('error', console.error);


    //  msg = 'this is for class 12'
    // // Publish a message
    // const publication4 = await broker.publish('pub_direct12', msg);
    // publication4.on('error', console.error);


    //  msg = 'this is for class 1'
    // // Publish a message
    // const publication5 = await broker.publish('pub_direct1', msg);
    // publication5.on('error', console.error);



    // Consume a message
    const subscription =await broker.subscribe('sub_direct9');
    subscription
      .on('message', (message, content, ackOrNack) => {
        console.log(content);
        ackOrNack();
      })
      .on('error', console.error);


      // Consume a message
    const subscription2 =await broker.subscribe('sub_direct10');
    subscription2
      .on('message',async (message, content, ackOrNack) => {
         console.log(content)
        ackOrNack();
      })
      .on('error', console.error);

      // Consume a message
    const subscription3 =await broker.subscribe('sub_direct11');
    subscription3
      .on('message',async (message, content, ackOrNack) => {
       
        console.log(content);
        ackOrNack();
      })
      .on('error', console.error);

      // Consume a message
    const subscription4 =await broker.subscribe('sub_direct12');
    subscription4
      .on('message', async(message, content, ackOrNack) => {
        await console.log(content);
        ackOrNack();
      })
      .on('error', console.error);

      // Consume a message
    const subscription5 =await broker.subscribe('sub_direct1');
    subscription5
      .on('message', (message, content, ackOrNack) => {
        console.log(content);
        ackOrNack();
      })
      .on('error', console.error);


  } catch (err) {
    console.error(err);
  }
})();