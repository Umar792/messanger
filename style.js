let sendMessage = () => {
  let mynumber = 4;
  switch (mynumber) {
    case 4:
      let inputvalue = document.getElementById("newinput").value;
      const craetediv = document.createElement("div");
      craetediv.className = "r-r-message";
      const divtext = document.createTextNode(inputvalue);
      craetediv.appendChild(divtext);
      //   let leftmessage = document.getElementById("left-message");
      //   leftmessage.append(craetediv);
      let rightmessage = document.getElementById("right-message");
      rightmessage.append(craetediv);

    case 4:
      {
        let inputvalue = document.getElementById("newinput").value;
        const craetediv = document.createElement("div");
        craetediv.className = "r-message";
        const divtext = document.createTextNode(inputvalue);
        craetediv.appendChild(divtext);
        let leftmessage = document.getElementById("left-message");
        leftmessage.append(craetediv);
      }
      break;
  }
};

// ================================ newinput2

let reciveMessage = () => {
  let mynumber = 4;
  switch (mynumber) {
    case 4: {
      let inputvalue = document.getElementById("newinput2").value;
      const craetediv = document.createElement("div");
      craetediv.className = "l-message";
      const divtext = document.createTextNode(inputvalue);
      craetediv.appendChild(divtext);
      let leftmessage = document.getElementById("left-message");
      leftmessage.append(craetediv);
    }
    case 4:
      {
        let inputvalue = document.getElementById("newinput2").value;
        const craetediv = document.createElement("div");
        craetediv.className = "l-l-message";
        const divtext = document.createTextNode(inputvalue);
        craetediv.appendChild(divtext);

        let rightmessage = document.getElementById("right-message");
        rightmessage.append(craetediv);
      }
      break;
  }
};
