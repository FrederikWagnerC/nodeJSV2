import http from "http"
import express from 'express';
const app = express();


 app.get("/", (req, res) => {
    res.send('Hej verden!');
  });
  
  app.get('/about', (req, res) => {
    res.send('Dette er about siden...');
  });
  
  app.get('/contact', (req, res) => {
    res.send('Dette er kontakt siden...');
  });

  app.get('*', (req,res) =>  {
    res.send('Error ;s')
  });
  
  app.listen(4242, () => {
    console.log("Express server kører....");
  });

