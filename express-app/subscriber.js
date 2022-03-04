const Broker = require('rascal').BrokerAsPromised
const config = require('./configuration/config.json');

(async () => {
    try {
        const broker =await Broker.create(config);
        broker.on('error', console.error);
        // console.log(config.vhosts['/'].subscriptions);

const subscribers =Object.keys(config.vhosts['test'].subscriptions)

// consume a message
subscribers.forEach(async(sub)=>{
    await setTimeout(async()=>{
    const subscription =await broker.subscribe(sub);
      subscription
        .on('message', (message, content, ackOrNack) => {
            ackOrNack();
          })
        .on('error', console.error)
    }, 5000)

})
} catch (err) {
    console.error(err);
  }
})();




// (async () => {
//   try {
//       const broker =await Broker.create(config);
//       broker.on('error', console.error);
//       broker.subscribeAll((err, subscriptions) => {
//         if (err) throw err; // one or more subscriptions didn't exist
//         subscriptions.forEach((subscription) => {
//           subscription
//             .on('message', (message, content, ackOrNack) => {
//               // Do stuff with message
//             })
//             .on('error', (err) => {
//               console.error('Subscriber error', err);
//             });
//         });
//       });
      
//     } catch (err) {
//       console.error(err);
//     }
// })();