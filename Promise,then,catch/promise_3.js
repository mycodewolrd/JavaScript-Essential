// Performing Multiple Asynchronous Operations Sequentially

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Step 1 completed');
            resolve('Data from step 1');
        }, 1000);
    });
}

function step2(dataFromStep1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Step 2 completed', dataFromStep1);
            resolve('Data from step 2');
        }, 1000);
    });
}

function step3(dataFromStep2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Step 3 completed', dataFromStep2);
            resolve('All steps completed');
        }, 1000);
    });
}

step1()
    .then(result => step2(result))
    .then(result => step3(result))
    .then(finalResult => {
        console.log(finalResult);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    //Api = 'https://anapioficeandfire.com/api/characters/581'