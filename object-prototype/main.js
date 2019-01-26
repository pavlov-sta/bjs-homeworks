function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    birthday = new Date(birthday);
    const diff = Date.now() - birthday.getTime();
    const date = new Date(diff);
    const age = date.getFullYear() - 1970;
    console.log(age);
    if (age >= 18){
      return age
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrr', 
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    const sound = animal.sound;
    if (animal == undefined){
        return null
    } else {
        return sound
    } 
}

function initCalculateStatement() {
    for (var idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',').map(Number);

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length ; i++) {
        sum += marks[i];  
    }  
    const roundedAverage = sum / marks.length
    return roundedAverage
}