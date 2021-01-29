module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@views(.*)$": "<rootDir>/src/views$1",
    "^@features(.*)$": "<rootDir>/src/features$1",
    "^@uikit(.*)$": "<rootDir>/src/uikit$1",
  },
};
