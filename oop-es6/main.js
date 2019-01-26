"use strict"

//Задание №1

class StudentLog {
  constructor(log) {
    this.nameStudent = log;
    this.log = [];
    this.allAverage = [];
  }
  getName() {
    return  log.nameStudent;
  }
  addGrade(grade, subject) {
    if (grade >= 5.1 || grade <= 0) {
      return `Вы пытальсь поставть оценку 'отлично' по предмету ${subject}. Допустимая оценка: 0-5`;
    } else if (subject in this.log) {
      return this.log[subject].push(grade);
    } else {
      return this.log[subject] = [grade];
    }
  }
  getAverageBySubject(subject) {
    if (subject in this.log) {
      let sum = 0;
      for (let grade of this.log[subject]) {
        sum += grade;
      }
      let average = sum / this.log[subject].length;
      this.allAverage.push(average);
      return average ;
    } else {
      return 0;
    }
  }
  getTotalAverage() {
    let sum = 0;
    for (let i = 0; i < this.allAverage.length; i++) {
      sum += this.allAverage[i];
    }
    return sum / this.allAverage.length;
  }
  getGradesBySubject(subject) {
    if (subject in this.log) {
      return this.log[subject]
    } else {
      const arr = [];
      return arr;
    }
  }
  getGrades() {
    for (var prop in this.log) {
      if (prop.length !== 0) {
        return this.log;
      }
    }
    return 0;
  }
}

var log = new StudentLog('Олег Никифоров');

// Задание № 2