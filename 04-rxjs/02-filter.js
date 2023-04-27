
const { Observable } = require('rxjs')

const counter$ = new Observable(observer => {
    let count = 0;
    const timerId = setInterval(() => {
        observer.next(++count)
    }, 1000);
    () => {
        clearInterval(timerId)
    }
})

counter$.subscribe(no => console.log(no))