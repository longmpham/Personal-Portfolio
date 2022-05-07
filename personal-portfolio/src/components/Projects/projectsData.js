const projectsData = [
  {
    id: "1",
    title: "Personal Portfolio",
    image: require("../../images/projects/headshot.png"),
    description:
      "Using the ReactJS library to build a frontend single page application that shows my personal achievements, past history, interests, and my resume",
    link: "https://github.com/longmpham/Personal-Portfolio",
  },
  {
    id: "2",
    title: "Todo App",
    image: require("../../images/projects/todo.jpg"),
    description:
      "Created a basic CRUD MERN app for a to-do list. Barebones, first implementation of learning how CRUD works.",
    link: "https://github.com/longmpham/todoapp",
  },
  {
    id: "3",
    title: "Meme Generator",
    image: require("../../images/projects/meme.jpg"),
    description:
      "Using React with hooks, fetch, async/await to grab images from the public API from ImgFlip",
    link: "https://github.com/longmpham/memegenerator",
  },
  {
    id: "4",
    title: "Broken English",
    image: require("../../images/projects/chat.png"),
    description:
      "Using MERN, Socket.IO, Google Translate Public API, this application is a full stack application for peer to peer conversations. The receiver is able to set a tolerance for the words that are translated and read it as broken english",
    link: "https://github.com/longmpham/broken-english",
  },
  {
    id: "5",
    title: "Click The Boxes!",
    image: require("../../images/projects/clickbox.jpg"),
    description:
      "Created a React app to click black boxes to reveal the image behind it. Used React hooks to implement this",
    link: "https://github.com/longmpham/clicktheboxes",
  },
  {
    id: "6",
    title: "Profile Viewer",
    image: require("../../images/projects/profile.png"),
    description:
      "Created a MERN app for basic user authentication using JWT and Bcrypt for password encryption. This app also provides a basic frontend that shows a user login page along with a profile page that shows their stats",
    link: "https://github.com/longmpham/profileviewer",
  },
  {
    id: "7",
    title: "Impatiens Nails",
    image: require("../../images/projects/nails.jpg"),
    description:
      "Building a frontend Nail E-Commerce App from scratch. These nails are custom made and designed by my significant other and we plan to start a business from the ground up selling custom press-on nails",
    link: "https://github.com/longmpham/impatiens",
  },
  {
    id: "8",
    title: "Algorthims and DS Practice",
    image: require("../../images/projects/algods.jpg"),
    description:
      "Just a repo full of practice problems and sample interview questions...",
    link: "https://github.com/longmpham/algorithms_for_practice",
  },
  {
    id: "9",
    title: "Gabor Filter Initialized Convolutional Neural Network Classifier",
    image: "", //require("../../images/projects/algods.jpg"),
    description:
      "Thesis work that focused on the implementation of the Gabor filter used within a 7-layer convolutional neural network to classify 4 datasets consisting of almost 200,000 images in total. This network trained faster than other networks, but resulted in a slightly lower accuracy in comparison to other networks",
    link: "",
  },
];

export default projectsData;
