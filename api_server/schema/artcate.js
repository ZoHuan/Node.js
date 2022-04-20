// 导入定义验证规则的包
const joi = require("joi");

// 定义name,alias的验证规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();

// 定义id的校验规则
const id = joi.number().integer().min(1).required();

// 新增文章分类的验证规则对象
exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};

// 删除文章分类的验证规则对象
exports.delete_cate_schema = {
  params: {
    id,
  },
};

// 根据Id获取文章分类的验证规则对象
exports.get_cate_schema = {
  params: {
    id,
  },
};

// 根据Id更新文章分类的验证规则对象
exports.update_cate_schema = {
  body: {
    id,
    name,
    alias,
  },
};
