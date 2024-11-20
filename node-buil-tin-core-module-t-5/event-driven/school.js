const EventEmitter = require('events');

class School extends EventEmitter {
     startPeriod(){
        console.log('Class Start')
        
        // raise event when bell rings
        // raise an event
    setTimeout(()=>{
    
        // emitter.emit('bellRing', 'first period ended', 'insa Allah')
        this.emit('bellRing', {
            period:'first',
            text: 'period ended'
        })
    }, 2000)
    }
}

module.exports = School;