const express = require('express');
const { Client } = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 4000;
const HOST = "localhost";

const notion = new Client({ auth: // client token would go here});
const databaseId = // database id would go here

// POST request
// POST name, phoneNumber, extraInfo
// Functionality: Make a database entry in a Notion page with the database



app.post('/submitFormToNotion', jsonParser, async (req, res) => {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const extraInfo = req.body.extraInfo;
  
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name
                }
              }
            ]
          },
          "Phone Number": {
            phone_number: phoneNumber
          },
          "Extra Information": {
            rich_text: [
              {
                text: {
                  content: extraInfo
                }
              }
            ]
          }
        }
      });
  
      console.log(response);
      console.log("success");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });
  

app.listen(PORT, HOST, () => {
  console.log("Starting proxy at " + HOST + ":" + PORT);
});
