const express = require('express')
const app = express();
const request = require('request');

const bodyParser = require('body-parser');

const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/house_images', (req,res) => {
   let id = req.query.id;
   console.log("Request Query:", id);
   let images_url = "http://localhost:3003/house_images?id=" + id;
   request(images_url, { json: true }, (error, response, body) => {
     if (error) { return console.log(error); }
     //console.log(body);
     let results = body.results
     console.log(results);
     res.send({results});
   });

})

app.get('/description', (req, res) => {
  let id= req.query._id;
  let description_url = "http://localhost:3210/description?_id=" + id;
  request(description_url, { json: true }, (error, response, body) => {
    if (error) { return console.log(error); }
    //console.log(body);
    console.log(body);
    res.send(body);
  });
});

app.get('/morehomes', (req, res) => {
  let id= req.query.id;
  let morehome_url = "http://localhost:3000/morehomes";
  request(morehome_url, { json: true }, (error, response, body) => {
    if (error) { return console.log(error); }
    //console.log(body);
    console.log(body);
    res.send(body);
  });
});

app.get('/totalReviews', (req, res) => {
  let id= req.query.id;
  let reviews_url = "http://localhost:3004/totalReviews?id=" + id;
  request(reviews_url, { json: true }, (error, response, body) => {
    if (error) { return console.log(error); }
    //console.log(body);
    console.log(body);
    res.send(body);
  });
});


app.listen(port, () => console.log(`app listening on port ${port}!`))
