class Profile {
  constructor({
    username,
    name: { firstName, lastName },
    password,
  }) {
    this.createUser = [{
      username ,
      name: { firstName, lastName},
      password,
    }];
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
      console.log(`${firstNam} , ${lastName} `);
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
      console.log(`Добавим ${amount} из ${currency} в ${this.username}`);
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
}

