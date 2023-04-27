
const { Observable } = require('rxjs')

const obs$ = new Observable(observer => {
    console.log(`   [@service] - starting the observable`)
    let count = 0
    const timerId = setInterval(() => {
        count++
        observer.next(count * 10)
    }, 1000);
    return () => {
        console.log(`   [@service] - received unsubscribe signal. stopping the timer`)
        clearInterval(timerId)
    }
})


setTimeout(() => {
    const subscription = obs$.subscribe({
        next: (no) => console.log('[client - 1]', no),
        complete: () => console.log('[client - 1] All values received'),
        error: (err) => console.log('[client - 1] error occurred :', err)
    })

    setTimeout(() => {
        console.log('[client - 1] unsubscribing the observable')
        subscription.unsubscribe()
    }, 20000);
}, 5000); 

setTimeout(() => {
    const subscription = obs$.subscribe({
        next: (no) => console.log('[client - 2]', no),
        complete: () => console.log('[client - 2] All values received'),
        error: (err) => console.log('[client - 2] error occurred :', err)
    })

    setTimeout(() => {
        console.log('[client - 2] unsubscribing the observable')
        subscription.unsubscribe()
    }, 20000);
}, 10000); 

