import express from "express";
import mongoose from "mongoose";
import cardSchema from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_uri =
  "mongodb+srv://lam:Family12104090@cluster0.rvkxo2g.mongodb.net/?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Connected");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  cardSchema.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cardSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listener
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
