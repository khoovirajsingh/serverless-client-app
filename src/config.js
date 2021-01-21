const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IBGDrDkYWHywyzPG6tPjY5ztCJgfSqcDfb6OkEbCjkn8crhLtNgFOI2CsIkPx4UqGNAMTIphXTtClEC35V01NXk00jHjbqo4D",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-playground",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://q1lu0clqfj.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_OvFTz9g8R",
        APP_CLIENT_ID: "6042jc9lak5inb5esqct2amsnq",
        IDENTITY_POOL_ID: "us-east-1:4ec94e9d-f074-4dfa-913c-f492d1cbfd2b",
    }
};

export default config;