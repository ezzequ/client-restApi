
const express = require("express");
const app = express();
const hostname = "localhost";
const port = 5500;

Interface
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("api visited");
  next();
});

app.use("/", express.static("public"));

const mangas = [
  {
    name: "Attack On Titan",
    genre: "action",
    chapters: "149",
    id: 1,
  },
  {
    name: "Tokyo Ghoul",
    genre: "dark fantasy",
    chapters: "143",
    id: 2,
  },
  {
    name: "Demon Slayer",
    genre: "dark fantasy",
    chapters: "250",
    id:3,
  },
  {
    name: "death Note",
    genre: "thriller",
    chapters: "108",
    id:4,
  },
  {
    name: "Fullmetal Alchemist",
    genre: "adventure",
    chapters: "116",
    id: 5,
  }
];


app.get("/api/mangas", (req, res) => {
  res.json(mangas);
});

app.post("/api/mangas", (req, res) => {
  console.log(req.body);
  mangas.push(req.body);
  res.status(201).send("your manga list has been created");
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

app.delete("api/mangas/:id", (req,res)=>{
  let mangaToDelete = req.params.id;
  let myMangaListUpdated = mangas.filter((manga) => manga.id != mangaToDelete)
  mangas = myMangaListUpdated

  res.status(200).send("manga has been deleted from your list")
});