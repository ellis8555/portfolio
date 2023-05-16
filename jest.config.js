module.exports = {
  moduleFileExtensions: ["js"],
  testMatch: ["**/*.test.js"],
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
