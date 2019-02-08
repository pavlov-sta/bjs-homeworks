class Profile {
  constructor({
    username,
    name: { firstName, lastName },
    password,
  }) {
    this.username = {
      username,
      name: { firstName, lastName },
      password,
    };

    this.status = false;
    this.money = false;
  }

  createUser(
    {
      username,
      name: { firstName, lastName },
      password,
    },
    callback
  ) {
    return ApiConnector.createUser({ username, name: { firstName, lastName }, password }, (err, data) => {
      callback(err, data);
    });
  }

  performLogin({ username, password }, callback) {
    return ApiConnector.performLogin({ username, password }, (err, data) => {
      callback(err, data);
    });
  }

  addMoney({ currency, amount }, callback) {
    return ApiConnector.addMoney({ currency, amount }, (err, data) => {
      callback(err, data);
    });
  }

  transferMoney({ to, amount }, callback) {
    return ApiConnector.transferMoney({ to, amount }, (err, data) => {
      callback(err, data);
    });
  }

  convertMoney({ fromCurrency, targetCurrency, targetAmount }, callback) {
    return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount }, (err, data) => {
      callback(err, data);
    });
  }

  getStocks(callback) {
    return ApiConnector.getStocks((err, data) => {
      callback(err, data);
    });
  }
  getStatus() {
    return this.status;
  }

  isMoney() {
    return this.money;
  }
}

function main() {
  let Vova = new Profile({
    username: 'Vova',
    name: { firstName: 'Vova', lastName: 'Evdokimov' },
    password: 'gfhj'
  });


  Vova.createUser({
    username: 'vova',
    name: { firstName: 'Vova', lastName: 'Evdokimov' },
    password: 'gfhj'
  }, (err, data) => {
    if (err) {
      if (err.code === 409) {
        Vova.performLogin({ username: 'vova', password: 'gfhj' }, (err, data) => {
          if (err) {
            console.error('Не авторизован');
          } else {
            Vova.status = true;
            console.log(`Авторизован Vova`);
          }
        });
      }
    } else {
      Vova.status = true;
      console.log(`Создан пользователь ${username}`);
    }
  });

  let Fatima = new Profile({
    username: 'fatima',
    name: { firstName: 'Fatima', lastName: 'Chernyshev' },
    password: 'ivanspass',
  });
  Fatima.createUser({
    username: 'ffg',
    name: { firstName: 'ffg', lastName: 'Chernyshev' },
    password: 'ffg',
  }, (err, data) => {
    if (err) {
      if (err.code === 409) {
        Fatima.performLogin({ username: 'ffg', password: 'ffg' }, (err, data) => {
          if (err) {
            console.error(err.code);
          } else {
            Fatima.status = true;
            console.log(`Авторизован Fatima`);
          }
        });
      }
    } else {
      Fatima.status = true;
      console.log(`Создан пользователь  Fatima`);
    }
  });

  Fatima.addMoney({ currency: 'RUB', amount: 500000 }, (err, data) => {
    if (err) {
      console.error('Ошибка при добавлении денег Fatima');
    } else {
      console.log('Добавлино 500000 руб  Fatima');
      Fatima.money = true;
    }
  });


  let timer1 = setInterval(() => {
    if (Fatima.getStatus()) {
      Fatima.addMoney({ currency: 'RUB', amount: 500000 }, (err, data) => {
        if (err) {
          console.error('Ошибка при добавлении денег  Fatima');
        } else {
          console.log(`Добавлино 500000 руб  Fatima`);
          Fatima.money = true;
        }
      });
      Fatima.convertMoney({ fromCurrency: 'RUB', targetCurrency: 'NETCOIN', targetAmount: 100 }, (err, data) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log(`Конвертация рубля в 100 Netcoin`);
        }
      });

      Fatima.transferMoney({ to: 'vova', amount: 100 }, (err, data) => {
        if (err) {
          console.error(err.code);
          console.error(err.message);
        } else {
          console.log(`переведино 100 пользователю Vova`);
        }
      });

      Fatima.getStocks((err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data[0]);
        }
      });

      clearInterval(timer1);
    }
  }, 1000);
}