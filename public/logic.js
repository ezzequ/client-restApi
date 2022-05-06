async function getMangas() {
  try {
    let response = await fetch("http://localhost:5500/api/mangas");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

async function deleteManga(id) {
  const response = await fetch(`/api/mangas/${id}`, {
    method: "DELETE",
  });
  return await response.json();
  
} 

async function POSTmanga(data) {
  const fetchMangas = await fetch("/api/mangas", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await fetchMangas.json();
}

// GET
 const test = () => window.addEventListener("load", async () => {
    let mangas = await getMangas();
    console.log(mangas);
    for (let manga of mangas) {
      let mangaDiv = document.createElement("div");
      mangaDiv.setAttribute("id", manga.id);
      mangaDiv.className = "mangaDiv";
      

      let nameManga = document.createElement("h3");
      nameManga.classList.add("nameManga");
      nameManga.innerText = manga.name;
      nameManga.className = "nameManga";

      let chapters = document.createElement("p");
      chapters.classList.add("chapters");
      chapters.innerText = "chapter: " + manga.chapters;
      chapters.className = "chapters";

      let genre = document.createElement("p");
      genre.classList.add("genre");
      genre.innerText = "genre: " + manga.genre;
      genre.className = "genre";

      let editbutton = document.createElement("button", "id");
      editbutton.classList.add("editbutton");
      editbutton.innerHTML = "edit manga";
      editbutton.className = "editbutton";
      editbutton.addEventListener("click", function () {
        saveEdits(manga)
        
       })

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton", "id");
      deleteButton.innerHTML = "delete";
      deleteButton.className = "deleteButton";
      deleteButton.addEventListener("click", function () {
        deleteManga(manga.id);
        console.log(manga);
       setTimeout(() => {
         location.reload();
       }, 1500); 
      });

      mangaDiv.append(nameManga, genre, chapters, deleteButton, editbutton);
      // mangaDiv.style.margin= "10px"
      // mangaDiv.style.backgroundColor ="lightpink"
      // mangaDiv.style.padding ="10px"
      let container = document.getElementsByClassName("myMangas")[0];
      container.append(mangaDiv);
      onclick = console.log(manga);
      
    }
      setInterval(() => {
      }, 10);(() => {
        location.reload();
      }, 2500); 
  });
  test()

  
        function saveEdits(manga) {
        console.log(manga)

         }
      //  // setting timeout so the "database" can update the mangas after user
      //  // iteracted with the website before the loation refreshes with the new information
      //  // without crashing.
        
// DELETE
function deleteMangaDOM(manga) {
  console.log(manga);
  deleteManga(manga);

}

//PUT
function put(){
  
}


//POST
function formManga() {
  let formFields = document.getElementsByTagName("input");

  let name = formFields[0].value;
  let chapters = formFields[2].value;
  let genre = formFields[1].value;

  mangaObject = {
    name,
    genre,
    chapters,
  };
  POSTmanga(mangaObject);
}

//putting reload so the user can see added information directly in the 
//user interface
document
  .getElementsByTagName("button")[0]
  .addEventListener("click", (event) => {
    event.preventDefault();
    window.location.reload()
    formManga();
    getMangas();
  });

//button to get mangas if it didnt load the first time 
  document
    .getElementsByClassName("GET")[0]
    .addEventListener("click", (event) => {
      window.location.reload();
    });

   //for edit
    document.getElementsByClassName("editbutton").addEventListener("click", event =>{
      saveEdits()
    })