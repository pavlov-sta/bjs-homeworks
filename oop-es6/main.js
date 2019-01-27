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

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.durabilityStart = durability;
  }
  takeDamage(damage) {
    if (damage <= this.durability) {
      return this.durability = this.durability - damage;
    }
    return this.durability = 0;
  }
  getDamage() {
    if (this.durability >= this.durabilityStart * 0.3) {
      return this.attack;
    } else if (this.durability <= this.durabilityStart * 0.3 & this.durability != 0) {
      return this.attack / 2;
    }
    return this.attack = 0;
  }
  isBroken() {
    if (this.durability > 0) {
      return true;
    }
  }
}

class Arm extends Weapon {
}

class Bow extends Weapon {

}

class Sword extends Weapon {
}

class Knife extends Weapon {
}

class Staff extends Weapon {
}

class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.attack = attack || bow.attack;
    this.durability = durability || bow.durability;
    this.range = range || bow.range;
  }
}

class Axe extends Sword {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.attack = attack || sword.attack;
    this.durability = durability || sword.durability;
    this.range = range || sword.range;
    this.durabilityStart = durability || sword.durability;
  }
}

class StormStaff extends Staff {
  constructor(name, attack, durability, range) {
    super(name, attack, durability, range);
    this.attack = attack || staff.attack;
    this.durability = durability || staff.durability;
    this.range = range || staff.range;
    this.durabilityStart = durability || staff.durability;
  }
}

class Player {
  constructor(name) {
    this.life = 100;
    this.magic = 50;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.durability = 'Игрок';
    this.weapon = new Bow('Длинный лук', 15, 4, 4);
    this.name = name;
  }
  getLuck() {
    return ((0 - 0.5 + Math.random() * (100 - 0 + 1)) + this.luck) / 100
  }
  getDamage(distance) {
    if (distance <= this.weapon.range) {
      return ((this.attack + weapon.getDamage()) * this.getLuck() / distance);
    } else {
      return 0
    }
  }
  takeDamage(damage) {
    if (damage <= this.life) {
      return this.life = this.life - damage;
    }
    return this.life = 0;
  }
  isDead() {
    if (this.life = 0) {
      return true;
    }
  }

}

class Warrior extends Player {
  constructor(magic, agility) {
    super(magic, agility)
    this.life = 120;
    this.magic = player.magic;
    this.speed = 2;
    this.attack = 10;
    this.agility = player.agility;
    this.luck = player.luck;
    this.durability = 'Воин';
    this.weapon = new Sword;
    this.lifeStart = 120;
  }
  takeDamage(damage) {
    if (this.life < (this.lifeStart * 0.5) & player.getLuck() > 0.8) {
      return this.magic = this.magic - damage;
    } else if (this.magic <= 0) {
      return this.life = this.life - damage;
    } else if (this.life > (this.lifeStart * 0.5) || this.life < (this.lifeStart * 0.5) & player.getLuck() < 0.8) {
      return this.life = this.life - damage;
    }
  }
}
class Archer extends Player {
  constructor(speed) {
    super(speed)
    this.life = 80;
    this.magic = 35;
    this.speed = player.speed;
    this.attack = 5;
    this.agility = 10;
    this.luck = player.luck;
    this.durability = 'Лучник';
    this.weapon = new Bow;
  }
  getDamage(distance) {
    console.log(weapon.attack)
    console.log(player.getLuck())
    return ((this.attack + weapon.getDamage()) * player.getLuck() * distance / weapon.range)
  }
}

class Mage extends Player {
  constructor() {
    this.life = 70;
    this.magic = 100;
    this.speed = player.speed;
    this.attack = 5;
    this.agility = 8;
    this.luck = player.luck;
    this.durability = 'Маг';
    this.weapon = new Staff;
  }
}

class Dwarf extends Warrior {
  constructor(life, magic, speed, attack, agility, luck, durability, weapon) {
    super(life, magic, speed, attack, agility, luck, durability, weapon);
    this.life = life || warrior.life;
    this.magic = magic || warrior.magic;
    this.speed = speed || warrior.speed;
    this.attack = attack || warrior.attack;
    this.agility = agility || warrior.agility;
    this.luck = luck || warrior.luck;
    this.durability = durability || warrior.durability;
    this.weapon = weapon || warrior.weapon;
  }
}

class Crossbowman extends Archer {
  constructor(life, magic, speed, attack, agility, luck, durability, weapon) {
    super(life, magic, speed, attack, agility, luck, durability, weapon);
    this.life = life || archer.life;
    this.magic = magic || archer.magic;
    this.speed = speed || archer.speed;
    this.attack = attack || archer.attack;
    this.agility = agility || archer.agility;
    this.luck = luck || archer.luck;
    this.durability = durability || archer.durability;
    this.weapon = weapon || archer.weapon;
  }
}

class Demiurge extends Mage {
  constructor(life, magic, speed, attack, agility, luck, durability, weapon) {
    super(life, magic, speed, attack, agility, luck, durability, weapon);
    this.life = life || mage.life;
    this.magic = magic || mage.magic;
    this.speed = speed || mage.speed;
    this.attack = attack || mage.attack;
    this.agility = agility || mage.agility;
    this.luck = luck || mage.luck;
    this.durability = durability || mage.durability;
    this.weapon = weapon || mage.weapon;
  }
}
