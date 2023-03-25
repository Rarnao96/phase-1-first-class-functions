function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(dogExercise){
    let activity;

    if (dogExercise === 'walk'){
        activity = "go for walk"
    } else if (dogExercise === 'fetch'){
        activity = "throw ball"
    } else {
        activity = 'go in pool'
    }

    return function afterWorkExercise(){
        console.log(`Today we will ${dogExercise}!`)
    };

}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('Today is a good day!');
    }
}