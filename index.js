import http from "http"
import express from 'express';
import dotenv from 'dotenv'
import dbConfig from "./config/config/dbConfig.js  ";


dotenv.config()
const app = express();

const port = process.env.PORTNUMBER


app.get("/", (req, res) => {
  res.send('Hej verden!');
});

app.get('/test', async (req, res) => {
  try {
    await dbConfig.authenticate();
    console.log('Der er forbindelse til databasen');
    res.send('Der er forbindelse til databasen');
  } catch (error) {
    console.error('Fejl! Kunne ikke forbinde til databasen: ', error);
    res.status(500).send('Fejl! Kunne ikke forbinde til databasen.');
  }
});

app.get('/about', (req, res) => {
  res.send('Dette er about siden...');
});

app.get('/contact', (req, res) => {
  res.send('Dette er kontakt siden...');
});

app.get('*', (req, res) => {
  res.send('Error ;s')
});

app.listen(port, () => {
  console.log(`Express server kører på http://localhost:${port}`);
});

