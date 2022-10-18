const rules = [
    {
        test: /\.ts?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    },
    {
        test: /\.feature$/,
        use: [
            {
                loader: 'cypress-cucumber-preprocessor/loader',
            },
        ],
    },
    {
        test: /\.features$/,
        use: [
            {
                loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
            },
        ],
    },
];
