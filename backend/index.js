const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.resolve("../frontend")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("../frontend/pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("../frontend/pages/contact.html"));
});

app.get("/projects/spachet", (req, res) => {
  const folderPath = "../../resources/projects-imgs/spachet/";
  let galleryImages = [];

  for (let i = 1; i <= 11; i++) {
    galleryImages.push(folderPath + "gallery" + i + ".png");
  }

  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Spachet",
    heroImg: folderPath + "parallaxa.png",
    minHeight: "384px",
    bgPosition: "center",
    projectIdea: "web app design & implementation",
    ideaColor: "#00d6b4",
    headline: "Spachet Webservice",
    projectImg: folderPath + "logo-title.png",
    description:
      "Project of a fully functional webservice for the players community of game Spachet. Home page of this website advertises the game itself thanks to the beautiful parallax hero section, with graphis, which I've created using Adobe Illustrator. This web application allows you to Sign Up as a new player to the Spachet Game, then you can Log In to download the game, edit your profile or look through the scoreboard where for each map provided (maps can be created by players and shared through the website) you can see players with the best scores. Of course webservice is integrated with the game (they share the same database of players, scores and maps). ",
    responsibilities:
      "I have designed whole UI for the webservice with emphasis on making the User Experience as intuitive as it can be. Then I designed and executed graphics and logo used on the website with Adobe Illustrator. Next step was to setup backend side of the project for which I've used node.js and JWT for authentication. Then I implemented Frontend side of the project using React.js with Styled Components Library. At the end I integrated Frontend with Backend.",
    technologies: [
      "React.js (Frontend)",
      "Node.js + Express (Backend)",
      "MongoDB (Data Base)",
      "Styled Components (CSS Library for React)",
      "JWT (for authentication)",
      "Adobe illustrator (Design)",
    ],
    galleryImgs: galleryImages,
    next: "minigolf",
    previous: "car-dealership-system",
  });
});

app.get("/projects/minigolf", (req, res) => {
  const folderPath = "../../resources/projects-imgs/minigolf/";

  let galleryImages = [];

  for (let i = 1; i <= 2; i++) {
    galleryImages.push(folderPath + "gallery" + i + ".png");
  }

  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Mini Golf",
    heroImg: folderPath + "background.png",
    minHeight: "450px",
    bgPosition: "50% 95%",
    projectIdea: "UI design & implementation",
    ideaColor: "#222",
    headline: "Minigolf Game",
    projectImg: folderPath + "minigolf.png",
    description:
      "Project of a fully functional webservice for the players community of game Spachet. Home page of this website advertises the game itself thanks to the beautiful parallax hero section, with graphis, which I've created using Adobe Illustrator. This web application allows you to Sign Up as a new player to the Spachet Game, then you can Log In to download the game, edit your profile or look through the scoreboard where for each map provided (maps can be created by players and shared through the website) you can see players with the best scores. Of course webservice is integrated with the game (they share the same database of players, scores and maps). ",
    responsibilities:
      "I have designed whole UI for the webservice with emphasis on making the User Experience as intuitive as it can be. Then I designed and executed graphics and logo used on the website with Adobe Illustrator. Next step was to setup backend side of the project for which I've used node.js and JWT for authentication. Then I implemented Frontend side of the project using React.js with Styled Components Library. At the end I integrated Frontend with Backend.",
    technologies: [
      "React.js (Frontend)",
      "Node.js + Express (Backend)",
      "MongoDB (Data Base)",
      "Styled Components (CSS Library for React)",
      "JWT (for authentication)",
    ],
    galleryImgs: galleryImages,
    next: "go-game",
    previous: "spachet",
  });
});

app.get("/projects/go-game", (req, res) => {
  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Game of Go",
  });
});

app.get("/projects/labora", (req, res) => {
  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Labora",
  });
});

app.get("/projects/movie-recomendation", (req, res) => {
  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Movie recomendation",
  });
});

app.get("/projects/car-dealership-system", (req, res) => {
  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Car Dealership system",
  });
});

app.post("/submit-contact", (req, res) => {
  let name = req.body.userName;
  let email = req.body.userEmail;
  let msg = req.body.userMsg;

  console.log(name, email, msg);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
