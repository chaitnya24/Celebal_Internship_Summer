const promise = new Promise((resolve, reject) => {
    resolve();
})

promise.then(() => {
    console.log('first');
})
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('second')
                resolve();
            },2000);
        });
    })
    .then(() => {
        setTimeout(() => {
            console.log("third");
        },1000);
    });