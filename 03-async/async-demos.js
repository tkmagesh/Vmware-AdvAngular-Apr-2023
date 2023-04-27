
(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] returning result`)
        return result
    }

    function addSyncClient(){
        console.log(`[@client] invoking the service`)
        const result = addSync(100,200)
        console.log(`[@client] result = ${result}`)
    }
    window['addSyncClient'] = addSyncClient;

    function addAsync(x, y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`)
        // simulate async
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] returning result`)
            callback(result)
        }, 4000);
        
    }

    function addAsyncClient() {
        console.log(`[@client] invoking the service`)
        addAsync(100, 200, function(result){
            console.log(`[@client] result = ${result}`)
        })
    }
    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        // simulate async
        const p = new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 4000);
        })
        return p;
    }

    /* 
    function addAsyncPromiseClient(){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(100, 200)
        p.then(result => console.log(`[@client] result = ${result}`))
    } 
    */

    async function addAsyncPromiseClient() {
        console.log(`[@client] invoking the service`)
        var result = await addAsyncPromise(100, 200)
        console.log(`[@client] result = ${result}`)
    } 
    

    window['addAsyncPromiseClient'] = addAsyncPromiseClient
})()