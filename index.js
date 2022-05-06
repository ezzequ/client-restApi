import express from "express"
import fs from "fs";
import cros from "cors"
import bodyParser from "body-parser"
const hostname = "localhost";
const port = 5500;
const app = express();

app.use("/", express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  console.log("api visited");
  next();
});

const getMangasFS = () => {
   let mangaFromJson = fs.readFileSync("./mangas.json")
   let mangasParse = JSON.parse(mangaFromJson);
   return mangasParse
  }
  



const mangasWrite = (data) =>{
  fs.writeFile("./mangas.json",JSON.stringify(data),(err)=>{
    if (err){
      console.error(err)
    }
    });
}

function randomID() {
  let ID = Math.random(0.4) * 100;
  
  return ID;
}



let mangas = getMangasFS();
app.get("/api/mangas", (req, res, next) => {
  res.send(getMangasFS());
  next()
});

app.post("/api/mangas", (req, res, next) => {
  const addManga = req.body
  mangas.push({...addManga, id:randomID()});

  mangasWrite(mangas)
  res.status(200).send("your manga has been added to the list");
  next()
});

app.put("/api/mangas/:id",(req,res, next) => {
let { id } = req.params;
let mangaToEdit = mangas.find((manga) => manga.id == id);
if (!mangaToEdit) {
  res.status(404).send("could not find manga");

  }
let updatedManga = mangas.map((manga) => {
    if (manga.id == id){
      return req.body
    }
    return manga
  })
  mangasWrite(updatedManga)
  res.status(200).send("manga Updated")
  next()
});

app.delete("/api/mangas/:id",(req, res, next) => {
  let { id } = req.params;
  let mangaToDelete = mangas.find((manga)=> manga.id == id);
  if (!mangaToDelete){
    res.status(404).send("could not find manga")
  }
  let mangaNewAfterDeteted = mangas.filter((manga) => manga.id != id);
  mangasWrite(mangaNewAfterDeteted)
  res.status(200).send("manga deleted")
  next()
  
});


app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});






