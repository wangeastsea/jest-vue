//
module.exports = {
  // preset: '@vue/cli-plugin-unit-jest'
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    // tell Jest to handle *.vue files
    'vue'
  ],
  //     模块的转化器
  transform: {
    // process *.vue files with vue-jest
    '^.+\\.vue$': 'vue-jest',
    // 静态文件转化为字符串，没有包含的图片类型,需要加入到这里
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  //     不需要被转化
  transformIgnorePatterns: ['/node_modules/'],
  //   // support the same @ -> src alias mapping in source code
  //     模块映射
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  //   // serializer for snapshots
  //     对快照进行格式化
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.(test|spec).[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)'
  ],
  //  忽略对此文件的测试执行
  // testPathIgnorePatterns: [
  //     '\.eslintrc\.js'
  // ],
  //   // https://github.com/facebook/jest/issues/6766
  //     模拟浏览器的环境地址
  testURL: 'http://localhost/'
//   watchPlugins: [
//     require.resolve('jest-watch-typeahead/filename'),
//     require.resolve('jest-watch-typeahead/testname')
//   ]
}
