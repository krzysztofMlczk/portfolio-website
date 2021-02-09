const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");
var path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;
const SERVER = process.env.SERVER;
const LIST_ID = process.env.LIST_ID;

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER,
});

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
    github: "https://gitlab.com/pythongbros/trebuchetgame",
    website: "https://spachet.netlify.app/",
    projectIdea: "web app design & implementation",
    ideaColor: "#00d6b4",
    headline: "Spachet Webservice",
    projectImg: folderPath + "logo-title.png",
    description:
      "Project of a fully functional webservice for the players community of game Spachet. Home page of this website advertises the game itself thanks to the beautiful parallax hero section, with graphics, which I've created using Adobe Illustrator. This web application allows you to Sign Up as a new player to the Spachet Game, then you can log in to download the game, edit your profile or look through the scoreboard where for each map provided (maps can be created by players and shared through the website) you can see players with the best scores. Of course webservice is integrated with the game (they share the same database of players, scores and maps). ",
    responsibilities:
      "I have designed the whole UI for the webservice with emphasis on making the User Experience as intuitive as it can be. Then I designed and executed graphics and logo used on the website with Adobe Illustrator. Next step was to setup backend side of the project for which I've used node.js and JWT for authentication. Then I implemented Frontend side of the project using React.js with Styled Components Library. At the end I integrated Frontend with Backend.",
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

  for (let i = 1; i <= 5; i++) {
    galleryImages.push(folderPath + "gallery" + i + ".png");
  }

  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Mini Golf",
    heroImg: folderPath + "background.png",
    minHeight: "450px",
    bgPosition: "50% 95%",
    github: "https://gitlab.com/pythongbros/minigolf",
    website: null,
    projectIdea: "UI design & implementation",
    ideaColor: "#222",
    headline: "Minigolf Game",
    projectImg: folderPath + "minigolf.png",
    description:
      'MiniGolf is a classic 2d game implemented in Python with the use of pygame library and pymunk physics engine. Pygame is responsible for main game loop, rendering graphics and listening for events. Pymunk provides physics simulation of the game which goes in the "background". Thanks to Pymunk we can also generate collision masks for certain objects based on the image. You can play both single and local muliplayer for at most five players.',
    responsibilities:
      "I designed every component appearing in the User Interface using Adobe Illustrator. Then I implemented classes for menu scenes and UI components making use of created earlier graphics. At the end I integrated whole menu interface with scenes provided by other team members.",
    technologies: ["Python 3", "Pygame", "Pymunk", "Adobe Illustrator"],
    galleryImgs: galleryImages,
    next: "go-game",
    previous: "spachet",
  });
});

app.get("/projects/go-game", (req, res) => {
  const folderPath = "../../resources/projects-imgs/go-game/";

  let galleryImages = [];

  for (let i = 1; i <= 9; i++) {
    galleryImages.push(folderPath + "gallery" + i + ".png");
  }

  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Game of GO",
    heroImg: folderPath + "background.png",
    minHeight: "450px",
    bgPosition: "center",
    github: "https://github.com/krzysztofMlczk/go_game-java-",
    website: null,
    projectIdea: "Game logic & Interface implementation",
    ideaColor: "#00d6b4",
    headline: "Game of GO",
    projectImg: folderPath + "logoPNG.png",
    description:
      "This project is an implementation of GO game, which is an abstract strategy board game invented in China more than 2,500 years ago. The aim is to surround more territory than the opponent. This project was implemented as a Client-Server application in Java programming language with the use of Maven automation tool. It allows you to play local multiplayer against your friends or singleplayer where you have to face bot implemented on the logic side of the application. Both Server and Client applications use threads, to allow you to simultaneously interact with interface and send information about your moves to the server.",
    responsibilities:
      "I designed User Interface as well as all the graphics you can see in the game. I used Javafx for the UI implementation. I formulated and developed a main logic loop for Client-Server communication. I also took part in developing logic aspects used for execution of the game rules including KO moves and detecting which stones lost their breaths (recursive algorithm of counting breaths). At the end I had to connect Client application with the Server keeping in mind that both of them work on threads.",
    technologies: [
      "Java",
      "Javafx (Scene Builder)",
      "Maven",
      "Object Oriented Programming",
    ],
    galleryImgs: galleryImages,
    next: "labora",
    previous: "minigolf",
  });
});

app.get("/projects/labora", (req, res) => {
  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Labora",
  });
});

app.get("/projects/compiler", (req, res) => {
  const folderPath = "../../resources/projects-imgs/compiler/";

  let galleryImages = null;

  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "C++ Compiler",
    heroImg: folderPath + "background.jpeg",
    minHeight: "450px",
    bgPosition: "center",
    github: "https://github.com/krzysztofMlczk/compiler",
    website: null,
    projectIdea: "Compiler Implementation",
    ideaColor: "#00d6b4",
    headline: "C++ Compiler",
    projectImg: folderPath + "logo.jpg",
    description:
      "This project is an implementation of Compiler for small imperative language called Imperator. It is written in C++ language with the use of Fast Lexical Analyzer (FLEX) and generator of LR parsers called Bison. FLEX code generates scanner (so called lexical analyzer - implemented as a finite state machine), which groups characters given as input into lexical units or tokens and outputs a stream of tokens. Regular expressions are used to define the tokens recognized by the scanner. Bison generates parser, which groups tokens into syntactical units and outputs a parse tree representation of the Imperator program. Context-free grammar is used to define the program structure recognized by a parser. For each syntactical unit recognized by Bison there is an action implemented in C++, which uses back of the compiler to generate assembler code.",
    responsibilities:
      "I used FLEX and regular expressions to write code responsible for generating lexical analyzer. Then I implemented module using Bison which generates parser based on Context-free grammar describing Imperator language. At the end I used C++ language to implement back of the compiler as a system of related classes and interfaces, which leads to assembler code generation.",
    technologies: [
      "C++",
      "Bison (Yacc)",
      "FLEX (Fast Lexical Analyzer)",
      "Object Oriented Programming",
      "GNU Make",
    ],
    galleryImgs: galleryImages,
    next: "car-dealership-system",
    previous: "labora",
  });
});

app.get("/projects/car-dealership-system", (req, res) => {
  const folderPath = "../../resources/projects-imgs/car-dealership-system/";

  let galleryImages = [];

  for (let i = 1; i <= 6; i++) {
    galleryImages.push(folderPath + "gallery" + i + ".png");
  }

  res.render(path.resolve("../frontend/pages/views/project_page"), {
    pageTitle: "Car Dealership System",
    heroImg: folderPath + "background.jpg",
    minHeight: "450px",
    bgPosition: "center",
    github: "https://github.com/krzysztofMlczk/car_dealership_system",
    website: null,
    projectIdea: "App & Database implementation",
    ideaColor: "#00d6b4",
    headline: "Car Dealership System",
    projectImg: folderPath + "logo.jpg",
    description:
      "This project is an implementation of a system dedicated for managing car sales. It is a desktop application written in Java, which is connected to the SQL database. You can login into the system and manipulate and/or look through the car offer depending on what kind of user you are. When you are administrator you can add and delete offers/available producers/brands and create/delete users. When you are a worker you can look through the offer and check for available cars or make an order according to the specification provided by clients, thanks to big amount of filters and criterias.",
    responsibilities:
      "I implemented triggers, procedures and transactions for the SQL database. I created application interface and implemented the logic. At the end I connected the desktop app with the database using Java Database Connection.",
    technologies: [
      "Java",
      "Javafx (UI)",
      "JDBC",
      "Maven",
      "Object Oriented Programming",
      "MySQL Database",
    ],
    galleryImgs: galleryImages,
    next: "spachet",
    previous: "compiler",
  });
});

app.post("/submit-contact", (req, res) => {
  let name = req.body.userName;
  let email = req.body.userEmail;
  let msg = req.body.userMsg;

  async function run() {
    try {
      const response = await mailchimp.lists.addListMember(LIST_ID, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: msg,
        },
      });
    } catch {
      console.log("Unable to connect to the API");
    }
  }

  run();
  res.redirect("/contact");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
