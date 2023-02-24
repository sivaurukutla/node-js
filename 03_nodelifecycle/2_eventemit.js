var EventEmitter=require('events').EventEmitter;     //this is an event occurs itself  based on the code  .

var logger=new EventEmitter();

logger.on('MyClickEvent',function(msg){  //on method  is on the event and also take two arguments.
    console.log('MyClickEvent : '+msg);
});

logger.emit( 'MyClickEvent','This is the first Click');   //emit method get displayed data it takes two arguments ;
logger.emit('MyClickEvent','This is the second Click');