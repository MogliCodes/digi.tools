const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    const options = {
        webpackOptions: {
            module: {
                rules: [
                    {
                        test: /\.feature$/,
                        use: [
                            {
                                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                options: config,
                            },
                        ],
                    },
                ],
            },
        },

    };

    on('file:preprocessor', webpackPreprocessor(options));

    return config;
}

module.exports = {
    default: defineConfig({
        e2e: {
            baseUrl: 'http://localhost:3001',
            specPattern: 'test/cypress/e2e/**/*.cy.feature',
            // specPattern: '**/*.feature',
            supportFile: false,
            setupNodeEvents,
        },
    }),
    setupNodeEvents,
};
