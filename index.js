
const express = require("express");
const app = express();
const fs = require("fs");
const hostname = "localhost";
const port = 5500;

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("api visited");
  next();
});

app.use("/", express.static("public"));

let mangas = [
  {
    name: "Attack On Titan",
    genre: "action",
    chapters: "149",
    id: "a",
  },
  {
    name: "Tokyo Ghoul",
    genre: "dark fantasy",
    chapters: "143",
    id: "b",
  },
  {
    name: "Demon Slayer",
    genre: "dark fantasy",
    chapters: "250",
    id: "c",
  }
  // {
  //   name: "death Note",
  //   genre: "thriller",
  //   chapters: "108",
  //   id: "d",
  // },
  // {
  //   name: "Fullmetal Alchemist",
  //   genre: "adventure",
  //   chapters: "116",
  //   id: "e",
  // }
];

app.get("/api/mangas", (req, res) => {
  res.send(mangas);
});

app.post("/api/mangas", (req, res) => {
  const manga = req.body
  res.status(201);
  console.log(req.body);
  mangas.push({...manga});
  res.send("your manga has been added to the list");
});


app.delete("/api/mangas/:id",(req, res) => {
  let { id } = req.params;
  let mangaToDelete = mangas.filter((manga) => manga.id !== id);
  console.log(mangaToDelete)
  //  if (mangaToDelete == -1) {
  //   // const updatedMangas = mangas.filter(test => test.id != id);
  //   //     mangas = updatedMangas
      
  //   let updatedMangas = mangas.splice(mangaToDelete,1);
  //   updatedMangas = mangas
  //   console.log(updatedMangas);
    
  // }
  // else if (mangaToDelete != -1) {
  //   res.status(404).send("something wrong");
  // }
  
});


app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

