
const { Subject } = require('rxjs')

const subject = new Subject()

let count = 0
const timerId = setInterval(() => {
    if (subject.observed) {
        subject.next(++count)
    } else {
        clearInterval(timerId)
    }
}, 500);



/* 
subject.subscribe(no => console.log(no))

setTimeout(() => {
    subject.unsubscribe()
}, 4000); 
*/

const obs$ = subject.asObservable()

const subscription1 = obs$.subscribe(no => console.log('subscriber-1', no))

let subscription2;
setTimeout(() => {
    subscription2 = obs$.subscribe(no => console.log('subscriber-2', no))    
}, 5000);


setTimeout(() => {
    subscription1.unsubscribe()
    subscription2.unsubscribe()
}, 10000); 