document.getElementsByTagName("button")[0].addEventListener("click", async (event) => {
    let mangas = await getMangas();
    console.log(mangas);
    for (let manga of mangas) {
      let mangaDiv = document.createElement("div");
      mangaDiv.setAttribute('id', manga.id)
      mangaDiv.className = "mangaDiv";


      let nameManga = document.createElement("h2");
      nameManga.classList.add('nameManga');
      nameManga.innerText = manga.name;
      nameManga.className = "nameManga";

       let chapters = document.createElement("p");
       chapters.classList.add("chapters");
       chapters.innerText ="chapters: " + manga.chapters;
       chapters.className = "chapters";


      let genre = document.createElement("p");
      genre.classList.add('genre')
      genre.innerText = "genre: "  + manga.genre;
      genre.className="genre"


      let deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.innerHTML = "delete"
      deleteButton.className = "deleteButton";

      mangaDiv.append(nameManga,genre,chapters,deleteButton)
      mangaDiv.style.margin= "10px"
      mangaDiv.style.backgroundColor ="lightpink"
      mangaDiv.style.padding ="10px"
      document.body.append(mangaDiv)
      onclick=console.log(manga)
    }
  }
  );

async function getMangas() {
  try {
    let response = await fetch("http://localhost:5500/api/mangas");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
