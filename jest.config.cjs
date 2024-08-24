module.exports = {
    preset: 'ts-jest', // Use ts-jest preset
    testEnvironment: 'jsdom', // Use jsdom for browser-like environment
    transform: {
      "^.+\\.tsx?$": "ts-jest", // Handle TypeScript files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };