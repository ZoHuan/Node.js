// 默认情况下， module.exports = {}
const age = 20;
module.exports.age = age;
module.exports.username = "鸣人";
module.exports.sayHello = function () {
  console.log("Hello");
};

// 让module.exports指向全新的对象
module.exports = {
  nicknam: "旋涡鸣人",
  sayHi() {
    console.log("Hi!");
  },
};
