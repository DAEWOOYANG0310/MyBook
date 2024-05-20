let addCoffee = function (name) {
  return function (prevName) {
    return new promise(function (resolve) {
      setTimeout(function () {
        let newName = prevName ? `${prevName}, ${name}` : name;
        console.log(newName);
        resolve(newName);
      }, 1000);
    });
  };
};

addCoffee("에소프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"));
