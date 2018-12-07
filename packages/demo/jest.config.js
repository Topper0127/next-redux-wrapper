const config = require('../../jest.config');
module.exports = Object.assign({}, config, {
    roots: [
        '<rootDir>/tests'
    ],
    preset: 'jest-puppeteer',
    testPathIgnorePatterns: config.testPathIgnorePatterns.concat('./.next'),
    coveragePathIgnorePatterns: config.coveragePathIgnorePatterns.concat('./jest-puppeteer.config.js')
});