//
module.exports = {
  preset: '@vue/cli-plugin-unit-jest'
//   moduleFileExtensions: [
//     'js',
//     'jsx',
//     'json',
//     // tell Jest to handle *.vue files
//     'vue'
//   ],
//   transform: {
//     // process *.vue files with vue-jest
//     '^.+\\.vue$': require.resolve('vue-jest'),
//     '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
//       require.resolve('jest-transform-stub'),
//     '^.+\\.jsx?$': require.resolve('babel-jest')
//   },
//   transformIgnorePatterns: ['/node_modules/'],
//   // support the same @ -> src alias mapping in source code
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1'
//   },
//   // serializer for snapshots
//   snapshotSerializers: [
//     'jest-serializer-vue'
//   ],
//   testMatch: [
//     '**/tests/unit/**/*.(test|spec).[jt]s?(x)',
//     '**/__tests__/*.[jt]s?(x)'
//   ],
  //  忽略对此文件的测试执行
  // testPathIgnorePatterns: [
  //     '\.eslintrc\.js'
  // ],
//   // https://github.com/facebook/jest/issues/6766
//   testURL: 'http://localhost/',
//   watchPlugins: [
//     require.resolve('jest-watch-typeahead/filename'),
//     require.resolve('jest-watch-typeahead/testname')
//   ]
}
