let p = new Promise((resolve, reject) => {
    resolve('1')
});

p.then((rs) => {
    console.log('p1', rs);
    // return 2;
}).then(rs => {
    console.log('p2', rs)
});