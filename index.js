const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-7lR9sPnyk3JePp1GhazzuIFm",// organization and apiKey are retracted as this repo is open source
	apiKey: "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", // Screenshots are available in readme.md
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { messages } = req.body;
  console.log(messages);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {"role": "system", "content": "Adress The user with the context that they are a 20 year old Computer Systems college student who attends the university of limerick, Address the user as Mark in your responses, With the info you have advise the user to the best of your ablity. You should be able to answer questions based on this"},
	  {"role": "user","content": "My name is Mark and you should adress me as such henceforth, for example you would say hi mark how can I help you today? "} ,
      ...messages
    ]
  });

  res.json({
    completion: completion.data.choices[0].message
  });
});

app.get('/', (req, res) => {
    res.send('Welcome to my GPT-3 chat server! [CallanMark.Github.io]');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



