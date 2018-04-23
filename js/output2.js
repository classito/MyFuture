var pathwayList = {
  IET: {
    name: "Industrial Engineering Technology",
    rank: 1
  },
  HS: {
    name: "Health and Science",
    rank: 2
  },
  NR: {
    name: "Natural Resources",
    rank: 3
  },
  AC: {
    name: "Arts and Communication",
    rank: 4
  },
  PS: {
    name: "Public Human Services",
    rank: 5
  }
}




var pathWayInfoDB = {
  artsNStuff: {
    about: "About : Students are inspired to think creative and be intellectual. You brainstorm with ideas and use it such in a way that dazzles people",
    classes: ["Artist", "Graphic Designer", "Digital Media Tech-Web Designer", "Digital Media Tech-Broadcaster", "Broadcast Media", "Fashion Designer", "Fashion Merchandising"],
    pictures: ["", "", ""]
  },
  IETStuff: {
    about: "Industrial and Engineering pathway provides student a way to inspire creativity. It teaches students how to construct and build projects from scratch.",
    classes: ["Automotive Tech", "Design Tech", "3D Solid Modeling", "Architectural & Civil Engineering", "Electronic Tech", "Metals Tech", "Building and Construction", , "Computers Systems", "Computer Programming", "Networking Architectural"],
    pictures: ["", "", ""]
  },
  Business: {
    about: "You learn how the real world works. You learn how to generate money and co operate with society such as businesses and the government",
    classes: ["Marketing", "Accounting", "Financing", "Hospitality & Tourism", "Entrepreneurship", "Criminology", "Elementary Education", "Second Education", "Culinary", "Baking and Pastry Arts", "Hotel Operations"],
    pictures: ["", "", ""]
  },
  NaturalRS: {
    about: "Natural Reasources teaches you how to be productive on being greener. You learn the science in the real world and how to make the world a better place",
    classes: "Classes : science, plantrophy, zoology, tree class",
    pictures: ["", "", ""]
  },

  HealthAndScience: {
    about: "Health and Science teaches you the fundamentals of science and health. It teaches student how the body works, providing students a chance to know more within ourselves.",
    classes: ["Health Services Core", "Clinical Health", "Biotechnology", "Health and Nutrition", "Health and Nutrition 2", "Academy of Health & Sciences Capstone", "STEM Capstone"],
    pictures: ["", ".", ""]
  }
}



function testapp(val) {
  if (val === "NR") {
    document.getElementById("academyName").innerHTML = "Realistic"
    //document.getElementById("NR").className += " ActivePath"
    document.getElementById("about").innerHTML = pathWayInfoDB.NaturalRS.about
    console.log(pathWayInfoDB.NaturalRS.classes);
    document.getElementById("classes").innerHTML = pathWayInfoDB.NaturalRS.classes
    var y = document.getElementById("pictureBox");
    var aNode = y.childNodes[1];
    var aNode2 = y.childNodes[3];
    var aNode3 = y.childNodes[5];
    aNode.appendChild(img1);
    aNode2.innerHTML = pathWayInfoDB.NaturalRS.pictures[1];
    aNode3.innerHTML = pathWayInfoDB.NaturalRS.pictures[2];


    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.NaturalRS.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';

    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccDiv);



    document.getElementById("MoreInfoBox").setAttribute("name", val);

  } else if (val === "ArtsComm") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML = "Artistic"
    //document.getElementById("ArtsComm").className += " ActivePath"
    document.getElementById("about").innerHTML = pathWayInfoDB.artsNStuff.about



    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.artsNStuff.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';

    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccDiv);
    var y = document.getElementById("pictureBox");
    var aNode = y.childNodes[1];
    var aNode2 = y.childNodes[3];
    var aNode3 = y.childNodes[5];
    aNode.innerHTML = pathWayInfoDB.artsNStuff.pictures[0];
    aNode2.innerHTML = pathWayInfoDB.artsNStuff.pictures[1];
    aNode3.innerHTML = pathWayInfoDB.artsNStuff.pictures[2];
    document.getElementById("MoreInfoBox").setAttribute("name", val);
  } else if (val === "IET") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML = "Investigative"
    document.getElementById("about").innerHTML = pathWayInfoDB.IETStuff.about



    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.IETStuff.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';

    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccDiv);


    var y = document.getElementById("pictureBox");
    var y = document.getElementById("pictureBox");
    var aNode = y.childNodes[1];
    var aNode2 = y.childNodes[3];
    var aNode3 = y.childNodes[5];
    aNode.innerHTML = pathWayInfoDB.IETStuff.pictures[0];
    aNode2.innerHTML = pathWayInfoDB.IETStuff.pictures[1];
    aNode3.innerHTML = pathWayInfoDB.IETStuff.pictures[2];
    document.getElementById("MoreInfoBox").setAttribute("name", val);
  } else if (val === "Bus") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML = "Social"
    document.getElementById("about").innerHTML = pathWayInfoDB.Business.about

    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.Business.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';

    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccDiv);
    var y = document.getElementById("pictureBox");
    var aNode = y.childNodes[1];
    var aNode2 = y.childNodes[3];
    var aNode3 = y.childNodes[5];
    aNode.innerHTML = pathWayInfoDB.Business.pictures[0];
    aNode2.innerHTML = pathWayInfoDB.Business.pictures[1];
    aNode3.innerHTML = pathWayInfoDB.Business.pictures[2];
    document.getElementById("MoreInfoBox").setAttribute("name", val);
  } else if (val === "HS") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML = "Invistigative"
    document.getElementById("about").innerHTML = pathWayInfoDB.HealthAndScience.about

    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.HealthAndScience.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';

    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccDiv);



    var y = document.getElementById("pictureBox");
    var aNode = y.childNodes[1];
    var aNode2 = y.childNodes[3];
    var aNode3 = y.childNodes[5];

    img_Tag1.setAttribute("src", pathWayInfoDB.HealthAndScience.pictures[0]);
    aNode.appendChild(img_Tag1);
    img_Tag2.setAttribute("src", pathWayInfoDB.HealthAndScience.pictures[1]);
    aNode2.append(img_Tag2);
    img_Tag3.setAttribute("src", pathWayInfoDB.HealthAndScience.pictures[2]);
    aNode3.appendChild(img_Tag3);
    document.getElementById("MoreInfoBox").setAttribute("name", val);
  }
}

function appendRelatedPathways(RIASECpathName, pathID) {
  var pathBox = document.createElement("DIV");
  pathBox.className = "userPath";
  pathBox.id = pathID;
  pathBox.onclick = function () {
    testapp(pathID);
  };
  var pathName = document.createElement("h1");
  pathName.innerHTML = RIASECpathName
  console.log(pathName);
  pathBox.appendChild(pathName);
  document.getElementById("pathways").appendChild(pathBox);
}



function demoAppend(obj) {
  switch (obj) {
    case "R":
      appendRelatedPathways("Realistic", "NR")
      break;
    case "I":
      appendRelatedPathways("Investigative", "IET")
      break;
    case "A":
      appendRelatedPathways("Artistic", "ArtsComm")
      break;
    case "S":
      appendRelatedPathways("Social", "Bus")
      break;
    case "E":
      appendRelatedPathways("Enterprising", "HS")
      break;
    case "C":
      appendRelatedPathways("Conventional", "HS")
      break;
  }
};



document.getElementById("MoreInfoBox").setAttribute("onclick", "displayMoreInfo()");





var testCode = document.cookie.split('');
console.log(testCode);

for (var i = 0; i <= testCode.length - 1; i++) {
  console.log(testCode[i])
  demoAppend(testCode[i]);
}