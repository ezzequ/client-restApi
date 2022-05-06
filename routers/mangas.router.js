// const express = require("express");
// const fs = require("fs");
// const fetch = require("node-fetch");

// const router = express.Router();


// router.get("/", (req, res) => {
//  res.json(mangas);
// });

// router.get("/:id", (req, res, next) => {
//   fs.readFile("./mangas.json", (err, data) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     res.send(data);
//   });
//   res.send(`horse with id "${req.params.id}"`);
// });

// router.post("/", async (req, res) => {
//   const mangas = await fetch("./mangas.json");
//   console.log(mangas);
//     console.log(req.body);
//     mangas.push(req.body);
//     res.status(201).send("your manga list has been created");
//   res.send("a new horse was saved");
// });