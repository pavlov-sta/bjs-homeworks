"use strict";
// Задача №1
function getSolutions(a, b, c){
  let d = Math.pow(b,2) - 4 * a * c;
  if (d < 0){
      let x = `D: ${d}`;
      return {
          D: d
      }
  } else if(d == 0){
      let x1 = - b / (2 *a);
      return {
          roots: [x1],
          D: d
      }
  } else {
      let x1 = (- b + Math.sqrt(d))/ (2 *a);
      let x2 = (- b - Math.sqrt(d))/ (2 *a);
      return {
          roots: [x1, x2],
          D: d
      };   
  }
}

function showSolutionsMessage( a, b, c){
 let result =  getSolutions(a, b, c);
 console.log(`Вычисляем корни квадратного уравнения ${a}x² + (${b})x + (${c}) = 0`);
 console.log('Значение дискриминанта: '+ result.D);
 if (result.D < 0){
     console.log('Уравнение не имеет вещественных корней');
 } else if(result.D == 0){
     console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
 } else {
     console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
 }
}

// Задача №2
function getPersonData(secretData){
  let arr  = {
    secretData
  };
  if (secretData.aaa == 0 & secretData.bbb == 0){
    return  {
      firstName: 'Родриго', 
      lastName: 'Родриго'
    };
  } else if (secretData.aaa == 1 & secretData.bbb == 0){
    return  {
      firstName: 'Эмилио', 
      lastName: 'Родриго'
    };
  } else if (secretData.aaa == 1 & secretData.bbb == 1){
    return  {
      firstName: 'Родриго', 
      lastName: 'Эмилио'
    };
  } else if (secretData.aaa == 0 & secretData.bbb == 1){
    return  {
      firstName: 'Эмилио', 
      lastName: 'Эмилио'
    };
  }
} 

// задание №3

function getAverageScore( data ){
  let arr = [];
  let counter = 0;
  let sum = 0;
  for (let prop in data) {
    counter++;
    let sum = 0;
    let valie = data[prop];
    for (let i = 0; i < valie.length; i++){
      sum += valie[i];
    };
    let ave = sum / valie.length;
    arr.push(ave);
    console.log(prop + ': ' + ave);
  }
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let average = sum/counter;
  return 'average: ' + average;
}
