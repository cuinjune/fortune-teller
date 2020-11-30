const fs = require('fs');
const path = require('path');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
var express = require("express");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
var app = express();
const projectId = 'fortune-teller-jsty'; // project ID found from https://dialogflow.cloud.google.com/
const sessionId = uuid.v4(); // A unique identifier for the given session

//middleware: request handling
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static path
const publicPath = path.resolve(`${__dirname}/public`);

// set your static server
app.use(express.static(publicPath));

// views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// start listening
app.listen(PORT, () => {
    console.log(`Server is running localhost on port: ${PORT}`)
});

app.post("/api/v1/text", async (req, res) => {

    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename:
            './functions/fortune-teller-jsty-firebase-adminsdk-govjn-eb63ac68db.json'
    });
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
    } else {
        console.log(`  No intent matched.`);
    }
    res.json(result.fulfillmentText);
});




