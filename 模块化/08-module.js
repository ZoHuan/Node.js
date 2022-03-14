console.log(exports);
console.log(module.exports);

console.log(exports === module.exports);

const username = "鸣人";

exports.username = username;
exports.age = 20;
exports.sayHello = function () {
  console.log("大家好!");
};

//最终，向外共享的结果，都是module.exports 所指向的对象
