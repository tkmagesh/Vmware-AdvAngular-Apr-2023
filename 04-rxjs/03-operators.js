
const { Observable, interval } = require('rxjs')
const { filter, map, bufferCount } = require('rxjs/operators')

const counter$ = interval(200)
    .pipe(
        filter(no => no % 2 === 0),
        map(no => no * 10),
        bufferCount(5)
    )

const subscription = counter$.subscribe(no => console.log(no))

setTimeout(() => {
    subscription.unsubscribe()
}, 10000);