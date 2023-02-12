module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
      "<rootDir>/src/static/*"
    ],
    testMatch: [
        "<rootDir>/src/features/**/*.steps.{ts,tsx}",
        "<rootDir>/src/features/**/*.test.tsx"
      ],
    setupFilesAfterEnv: [
      "<rootDir>/configuration/jest/jest.setup.ts"
    ],  
    transform: {
      // '\\.(gql|graphql)$': 'jest-transform-graphql',
        "^.+\\.(ts|tsx|mjs)$": "<rootDir>/node_modules/babel-jest",
        "^(?!.*\\.(ts|tsx|mjs|css|json)$)": "<rootDir>/configuration/jest/fileTransform.ts"
      },
    moduleFileExtensions: [
        "feature",
        "js",
        "json",
        "ts",
        "tsx"
    ]
}
