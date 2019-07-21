module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    // 用 `vue-jest` 处理 `*.vue` 文件
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  }
};
