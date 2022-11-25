function start(){
    console.log('Before promise');

    //This goes to the browserAPI, in the mean time the two cl will complete
    const p = new Promise(executor);
    p.then(onSuccess)
    p.catch(onError);

    console.log('After promise');
}

function onError(error){
    console.log(error);
}

function executor(resolve,reject){
    setTimeout(reject, 2000, 'Error');
}

function onSuccess(result){
    console.log(result)
}

start();