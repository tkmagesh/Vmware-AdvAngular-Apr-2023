
const { Observable } = require('rxjs')

const counter$ = new Observable(observer => {
    let count = 0;
    const timerId = setInterval(() => {
        observer.next(++count)
    }, 200);
    return () => {
        console.log('[counter] - unsubscription signal received')
        clearInterval(timerId)
    }
})

/* 
function filterEven(obs$) {
    const even$ = new Observable(observer => {
        const subscription = obs$.subscribe(no => {
            if (no % 2 === 0) {
                observer.next(no)
            }
        })
        return () => {
            console.log('[filterEven] - unsubscription signal received')
            subscription.unsubscribe()
        }
    })
    return even$;
}

function filterOdd(obs$) {
    const even$ = new Observable(observer => {
        const subscription = obs$.subscribe(no => {
            if (no % 2 !== 0) {
                observer.next(no)
            }
        })
        return () => {
            console.log('[filterEven] - unsubscription signal received')
            subscription.unsubscribe()
        }
    })
    return even$;
} 
*/

function filter(obs$, predicateFn) {
    const even$ = new Observable(observer => {
        const subscription = obs$.subscribe(no => {
            if (predicateFn(no)) {
                observer.next(no)
            }
        })

        return () => {
            console.log('[filter] - unsubscription signal received')
            subscription.unsubscribe()
        }
    })
    return even$;
}

function map(obs$, transformFn) {
    const even$ = new Observable(observer => {
        const subscription = obs$.subscribe(no => {
            const v = transformFn(no)
            observer.next(v)
        })

        return () => {
            console.log('[map] - unsubscription signal received')
            subscription.unsubscribe()
        }
    })
    return even$;
}

function bufferCount(obs$, bufferSize) {
    const buffer$ = new Observable(observer => {
        let result = []
        const subscription = obs$.subscribe(no => {
            result.push(no)
            if (result.length === bufferSize){
                observer.next(result)
                result = []
            }
        })

        return () => {
            console.log('[bufferCount] - unsubscription signal received')
            subscription.unsubscribe()
        }
    })
    return buffer$;
}
// const even$ = filterEven(counter$)
const even$ = filter(counter$, no => no % 2 === 0)
const tens$ = map(even$, no => no * 10)
const buffer$ = bufferCount(tens$, 5)
const subscription = buffer$.subscribe(no => console.log(no))

setTimeout(() => {
    subscription.unsubscribe()
}, 10000);