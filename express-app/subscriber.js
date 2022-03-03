const Broker = require('rascal').BrokerAsPromised
const config = require('./configuration/config.json');

(async () => {
    try {
        const broker =await Broker.create(config);
        broker.on('error', console.error);
        // console.log(config.vhosts['/'].subscriptions);

const subscribers =Object.keys(config.vhosts['/'].subscriptions)

// consume a message
subscribers.forEach(async(sub)=>{
const subscription =await broker.subscribe(sub);
subscription
  .on('message', (message, content, ackOrNack) => {
    console.log(content, sub);
    ackOrNack();
  })
  .on('error', console.error)

})
} catch (err) {
    console.error(err);
  }
})();
