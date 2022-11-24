function start(){
    console.log('Before promise');

    //This goes to the browserAPI, in the mean time the two cl will complete
    const p = new Promise(executor);
    p.then(onSuccess)

    console.log('After promise');
}

function executor(resolve,reject){
    setTimeout(resolve, 2000, 'Resolved');
}

function onSuccess(result){
    console.log(result)
}

start();