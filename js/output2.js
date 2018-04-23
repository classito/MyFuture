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
    about: 'People who like to work with "ideas and things." They tend to be "creative, open, inventive, original, perceptive, sensitive, independent and emotional." They rebel against "structure and rules" and dislike "tasks involving people or physical skills."',
    classes: ["Artist", "Graphic Designer", "Digital Media Tech-Web Designer", "Digital Media Tech-Broadcaster", "Broadcast Media", "Fashion Designer", "Fashion Merchandising"],
    pictures: ["", "", ""]
  },
  IETStuff: {
    about: 'People who prefer "to think and observe rather than act," and "to organize and understand information rather than to persuade." They are also drawn to working with "data" over working with "people."',
    classes: ["Automotive Tech", "Design Tech", "3D Solid Modeling", "Architectural & Civil Engineering", "Electronic Tech", "Metals Tech", "Building and Construction", , "Computers Systems", "Computer Programming", "Networking Architectural"],
    pictures: ["", "", ""]
  },
  Business: {
    about: 'People who like to work with "people" and who "seem to satisfy their needs in teaching or helping situations." They tend to be "drawn more to seek close relationships with other people and are less apt to want to be really intellectual or physical."',
    classes: ["Marketing", "Accounting", "Financing", "Hospitality & Tourism", "Entrepreneurship", "Criminology", "Elementary Education", "Second Education", "Culinary", "Baking and Pastry Arts", "Hotel Operations"],
    pictures: ["", "", ""]
  },
  NaturalRS: {
    about: 'People who like to work with "things" and are "assertive and competitive." They tend to focus on "activities requiring motor coordination, skill and strength" and "prefer to work a problem through by doing something, rather than talking about it, or sitting and thinking about it."',
    classes: "Classes : science, plantrophy, zoology, tree class",
    pictures: ["", "", ""]
  },

  HealthAndScience: {
    about: 'People who like to work with "people and data." They tend to be "good talkers, and use this skill to lead or persuade others." They are also drawn to high power situations, valuing "power, money and status."',
    classes: ["Health Services Core", "Clinical Health", "Biotechnology", "Health and Nutrition", "Health and Nutrition 2", "Academy of Health & Sciences Capstone", "STEM Capstone"],
    pictures: ["", "", ""]
  },
  PS: {
    about: 'People who prefer to work with "data" and who "like rules and regulations and emphasize self-control...they like structure and order, and dislike unstructured or unclear work and interpersonal situations." They also value "power" and "status."',
    classes: ["Health Services Core", "Clinical Health", "Biotechnology", "Health and Nutrition", "Health and Nutrition 2", "Academy of Health & Sciences Capstone", "STEM Capstone"],
    pictures: ["", "", ""]
  }
}



function testapp(val) {
  if (val === "NR") {
    document.getElementById("academyName").innerHTML = "Realistic"
    //document.getElementById("NR").className += " ActivePath"
    document.getElementById("about").innerHTML = pathWayInfoDB.NaturalRS.about
    console.log(pathWayInfoDB.NaturalRS.classes);
    document.getElementById("classes").innerHTML = pathWayInfoDB.NaturalRS.classes
    var OccDiv = document.createElement("DIV");
    var str = '<ul>';
    pathWayInfoDB.NaturalRS.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';

    OccDiv.innerHTML = str;
    var OccTitle = document.createElement('h3')
    OccTitle.innerHTML = "Related Occupations";
    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccTitle);
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
    var OccTitle = document.createElement('h3')
    OccTitle.innerHTML = "Related Occupations";
    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccTitle);
    document.getElementById("classes").appendChild(OccDiv);
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

    var OccTitle = document.createElement('h3')
    OccTitle.innerHTML = "Related Occupations";
    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccTitle);
    document.getElementById("classes").appendChild(OccDiv);
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
    var OccTitle = document.createElement('h3')
    OccTitle.innerHTML = "Related Occupations";
    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccTitle);
    document.getElementById("classes").appendChild(OccDiv);
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

    var OccTitle = document.createElement('h3')
    OccTitle.innerHTML = "Related Occupations";
    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccTitle);
    document.getElementById("classes").appendChild(OccDiv);
    console.log(OccDiv);
    document.getElementById("MoreInfoBox").setAttribute("name", val);
  } else if (val === "PS") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML = "Conventional"
    document.getElementById("about").innerHTML = pathWayInfoDB.HealthAndScience.about

    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.HealthAndScience.classes.forEach(function (occ) {
      str += '<li>' + occ + '</li>';
    });

    str += '</ul>';
    var OccTitle = document.createElement('h3')
    OccTitle.innerHTML = "Related Occupations";
    OccDiv.innerHTML = str;
    document.getElementById("classes").appendChild(OccTitle);
    document.getElementById("classes").appendChild(OccDiv);
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
      appendRelatedPathways("Conventional", "PS")
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