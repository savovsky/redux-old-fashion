module.exports = {
    verbose: true,
    setupFiles: ['<rootDir>/src/setupTests.js'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/__tests__/**',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
};
