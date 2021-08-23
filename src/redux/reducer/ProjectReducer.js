const initialState = {
  projects: [
    {
      image: "./images/movieStar.png",
      name: "Movie Star",
      tagName: ["HTML", "CSS", "JS"],
      linkDemo: "https://sasuke0508.github.io/",
      linkSource: "https://github.com/Sasuke0508/Sasuke0508.github.io",
    },
    {
      image: "./images/managerUser.png",
      name: "Manager User",
      tagName: ["ReactJs", "JS"],
      linkDemo: "https://sasuke0508.github.io/Project_StyledComponentsAndLifeCycle/",
      linkSource: "https://github.com/Sasuke0508/Project_StyledComponentsAndLifeCycle",
    },
    {
      image: "./images/caculator.png",
      name: "Calculator",
      tagName: ["JS", "ReactJs"],
      linkDemo: "https://sasuke0508.github.io/Calculator/",
      linkSource: "https://github.com/Sasuke0508/Calculator",
    },
    {
      image: "./images/natours.png",
      name: "Natours",
      tagName: ["HTML", "CSS"],
      linkDemo: "https://klevermedia.co.uk/html_templates/craft_beer_nation_html/",
      linkSource: "https://github.com/Sasuke0508/Natours",
    },
    {
      image: "./images/craftBeer.png",
      name: "Craft Beer Nation",
      tagName: ["HTML", "CSS", "JS"],
      linkDemo: "https://klevermedia.co.uk/html_templates/craft_beer_nation_html/",
      linkSource: "https://github.com/Sasuke0508/Calculator",
    },
    {
      image: "./images/gameOnline.png",
      name: "Game Online",
      tagName: ["HTML", "CSS", 'NodeJs', "SocketIO"],
      linkDemo: "https://gamesocketsasuke.herokuapp.com/",
      linkSource: "https://github.com/Sasuke0508/GameOnline",
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return { ...state };

    default:
      return state;
  }
};
