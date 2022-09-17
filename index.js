const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;

const app = express();

const url = "https://www.theguardian.com/";

axios(url)
  .then(response => {
    const html = response.data;
    console.log(html);
  });

app.listen(PORT, () => console.log("Server listening on PORT ${PORT"));


