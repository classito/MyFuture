function rank_Distrubition(rankList) {
  var tempList = [ ];
  var list = [ ];

  var pathwayList = {
    IET: {
      name: "Industrial Engineering Technology",
      rank:1
    },
    HS:{
      name: "Health and Science",
      rank:2
    },
    NR:{
      name: "Natural Resources",
      rank:3
    },
    AC:{
      name: "Arts and Communication",
      rank:4
    },
    PS:{
      name: "Public Human Services",
      rank:5
    }
  }

  for (var i=0; i<=rankList.length-1; i++) {

    tempList.push(rankList[i])
  }

  console.log(tempList);
  for (var k=0; k<= tempList.length-1; k++) {
    if (tempList[k] === pathwayList.IET.rank) {
      list.push(pathwayList.IET.name);
    } else if(tempList[k] === pathwayList.HS.rank) {
      list.push(pathwayList.HS.name);
    } else if (tempList[k] === pathwayList.NR.rank) {
      list.push(pathwayList.NR.name);
    } else if (tempList[k] === pathwayList.AC.rank) {
      list.push(pathwayList.AC.name);
    } else if (tempList[k] === pathwayList.PS.rank) {
      list.push(pathwayList.PS.name);
    }
  }
  return list;
}

console.log(rank_Distrubition([5,4,3,2,1]));

var pathwayBank = {
  //1...5 (greatest -> least)
  Realistic: {
    rank: rank_Distrubition([3,1,2,4,5])
  },
  Investigative: {
    rank: rank_Distrubition([1,2,5,3,4])
  },
  Artistic: {
    rank: rank_Distrubition([4,5,3,1,2])
  },
  Social: {
    rank: rank_Distrubition([2,5,1,4,3])
  },
  Enterprising: {
    rank: rank_Distrubition([5,4,2,3,1])
  },
  Conventional: {
    rank: rank_Distrubition([5,1,2,4,3])
  }
}


function scoreMe(value, score) {
  if (obj[test][value]=== "Natural Resources") {
    user_SCORE.NR+=score
  } else if (obj[test][value] === "Industrial Engineering Technology") {
    user_SCORE.IET+=score
  } else if (obj[test][value] === "Health and Science") {
    user_SCORE.HS+=score
  } else if (obj[test][value] === "Arts and Communication")  {
    user_SCORE.AC+=score
  } else if (obj[test][value] === "Public Human Services") {
    user_SCORE.PS+=score
  }
}


var user_SCORE = {
  IET:0,
  HS:0,
  PS:0,
  NR: 0,
  AC:0
}

testValue = document.cookie.split("");

function parseCookie() {

}
console.log(document.cookie);


for (var k=0; k<= testValue.length-1; k++) {
  console.log(testValue[k]);

  if (testValue[k] === "A") {
    testValue[k] = "Artistic";
    continue;
  } else if (testValue[k] === "R") {
    testValue[k] = "Realistic"
    continue;
  } else if (testValue[k] === "I") {
    testValue[k] = "Investigative"
    continue
  } else if (testValue[k] === "S") {
    testValue[k] = "Social"
    continue
  } else if (testValue[k] === "E") {
    testValue[k] = "Enterprising"
    continue
  } else if (testValue[k] === "C") {
    testValue[k] = "Conventional"
    continue
  }
}

console.log(testValue);

for (var key in pathwayBank) {
  var obj = pathwayBank[key];
  console.log(key)

  if (key ===testValue[0]) {
    for (var test in obj) {
      scoreMe(0, 5)
      scoreMe(1, 4)
      scoreMe(2, 3)
      scoreMe(3, 2)
      scoreMe(4, 1)
    }
  } else if (key ===testValue[1]) {
    for (var test in obj) {
      scoreMe(0, 5)
      scoreMe(1, 4)
      scoreMe(2, 3)
      scoreMe(3, 2)
      scoreMe(4, 1)
    }
  } else if (key ===testValue[2]) {
    scoreMe(0, 5)
    scoreMe(1, 4)
    scoreMe(2, 3)
    scoreMe(3, 2)
    scoreMe(4, 1)
  }

  }


  var keyValues = []

for (var key in user_SCORE) {
  keyValues.push([ key, user_SCORE[key] ])
}


keyValues.sort(function compare(kv1, kv2) {
  return kv2[1] - kv1[1]
  })




var pathWayInfoDB = {
  artsNStuff: {
    about: "About : Students are inspired to think creative and be intellectual. You brainstorm with ideas and use it such in a way that dazzles people",
    classes: ["Artist - Hawaii Community College", "Graphic Designer - Honolulu Community College", "Digital Media Tech-Web Designer - Hawaii Community College", "Digital Media Tech-Broadcaster - Hawaii Community College", "Broadcast Media - Hawaii Community College", "Fashion Designer - Hawaii Community College", "Fashion Merchandising - Hawaii Community College"],
    pictures : ["", "", ""]
  },
  IETStuff: {
    about: "Industrial and Engineering pathway provides student a way to inspire creativity. It teaches students how to construct and build projects from scratch.",
    classes: ["Automotive Tech - Kauai Community College", "Design Tech - UH","3D Solid Modeling - UH", "Architectural & Civil Engineering - University of Hawaii West Ohau", "Electronic Tech - BYUH", "Metals Tech - HCC", "Building and Construction - HPA",
    , "Computers Systems", "Computer Programming", "Networking Architectural"],
    pictures : ["", "", ""]
  }, 
  Business: {
    about: "You learn how the real world works. You learn how to generate money and co operate with society such as businesses and the government",
    classes: ["Marketing - HPA", "Accounting - HPA", "Financing - HCC", "Hospitality & Tourism - Leeward Communtiy College", "Entrepreneurship - Kauai Community College", "Criminology - University of Hawaii", "Elementary Education - Chaminade University", "Second Education - LCC", "Culinary - UH","Baking and Pastry Arts - HCC", "Hotel Operations - HU"],
    pictures : ["", "", ""]
  }, 
  NaturalRS: {
    about: "Natural Reasources teaches you how to be productive on being greener. You learn the science in the real world and how to make the world a better place",
    classes: "Classes : science, plantrophy, zoology, tree class",
    pictures : ["", "", ""]
  },

  HealthAndScience: {
    about: "Health and Science teaches you the fundamentals of science and health. It teaches student how the body works, providing students a chance to know more within ourselves.",
    classes:["Health Services Core - University of Hawaii", "Clinical Health - Leeward Communtiy College", "Biotechnology - Windward Community College", "Health and Nutrition - Kauai Community College", "Health and Nutrition 2 - Leeward Community College", "Academy of Health & Sciences Capstone - University Of Hawaii"],
    pictures : ["../imgs/Health_Science.jpg", "../imgs/Nurse.jpg", "../imgs/scientist.jpg"]
  }
}


var unorderedList = document.createElement("ul");
var list = document.createElement("li");
list.innerHTML = "list test";
unorderedList.appendChild(list);

var img_Tag1 = document.createElement("img");
var img_Tag2 = document.createElement("img");
var img_Tag3 = document.createElement("img");

function testapp(val) {
  if (val==="NR"){
    document.getElementById("academyName").innerHTML = "Natural Resources"
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
    pathWayInfoDB.NaturalRS.classes.forEach(function(occ) {
  str += '<li>'+ occ + '</li>';
  }); 

  str += '</ul>';

  OccDiv.innerHTML = str;
  document.getElementById("classes").appendChild(OccDiv);



    document.getElementById("MoreInfoBox").setAttribute("name", val);

  } else if (val==="ArtsComm") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML= "Arts and Communication"
    //document.getElementById("ArtsComm").className += " ActivePath"
    document.getElementById("about").innerHTML = pathWayInfoDB.artsNStuff.about
    


    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.artsNStuff.classes.forEach(function(occ) {
  str += '<li>'+ occ + '</li>';
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
  } else if (val ==="IET") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML="Industrial and Engineering Technology"
    document.getElementById("about").innerHTML = pathWayInfoDB.IETStuff.about



    var OccDiv = document.createElement("DIV");
    var str = '<ul>'
    pathWayInfoDB.IETStuff.classes.forEach(function(occ) {
  str += '<li>'+ occ + '</li>';
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
    document.getElementById("MoreInfoBox").setAttribute("name", val)
    ;
  } else if (val ==="Bus") {
    document.getElementById("classes").innerHTML = "";
    document.getElementById("academyName").innerHTML =  "Public and Professional Services"
    document.getElementById("about").innerHTML = pathWayInfoDB.Business.about

    var OccDiv = document.createElement("DIV");
      var str = '<ul>'
      pathWayInfoDB.Business.classes.forEach(function(occ) {
    str += '<li>'+ occ + '</li>';
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
  }
    else if (val ==="HS"){
      document.getElementById("classes").innerHTML = "";
      document.getElementById("academyName").innerHTML =  "Academy of Health and Science"
      document.getElementById("about").innerHTML = pathWayInfoDB.HealthAndScience.about
      
      var OccDiv = document.createElement("DIV");
      var str = '<ul>'
      pathWayInfoDB.HealthAndScience.classes.forEach(function(occ) {
    str += '<li>'+ occ + '</li>';
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
      case "NR":
        appendRelatedPathways("Natural and Resources", "NR")
        break;
      case "IET":
        appendRelatedPathways("IET", "IET")
        break;
      case "AC":
        appendRelatedPathways("Arts and Communication", "ArtsComm")
        break;
      case "PS":
        appendRelatedPathways("Public Human Services", "Bus")
        break;
      case "HS":
        appendRelatedPathways("Health and Science", "HS")
        break;
    }
};



document.getElementById("MoreInfoBox").setAttribute("onclick", "displayMoreInfo()");


function displayMoreInfo() {

  val = document.getElementById("MoreInfoBox").getAttribute("name");
  if (val==="NR"){
      document.getElementById("PathwayInfo").innerHTML = " "
      var infoBoxART = document.createElement("h1");
      infoBoxART.innerHTML = "FLOWERS!"
      document.getElementById("PathwayInfo").appendChild(infoBoxART);
    } else if (val==="ArtsComm") {
      document.getElementById("PathwayInfo").innerHTML = " "
      var infoBoxART = document.createElement("h1");
      infoBoxART.innerHTML = "ART!"
      document.getElementById("PathwayInfo").appendChild(infoBoxART);

    } else if (val ==="IET") {
      document.getElementById("PathwayInfo").innerHTML = " "
      var infoBoxART = document.createElement("h1");
      infoBoxART.innerHTML = "ENGINEERING!!"
      document.getElementById("PathwayInfo").appendChild(infoBoxART);

    } else if (val ==="Bus") {
      document.getElementById("PathwayInfo").innerHTML = " "
      var infoBoxART = document.createElement("h1");
      infoBoxART.innerHTML = "MONEY!"
      document.getElementById("PathwayInfo").appendChild(infoBoxART);

    }
      else {
        alert("HSS")
      }



}


console.log(keyValues); 

function sortCode() {
  var Top3= [ ];
  for (var o=0; o<=2; o++) {
    Top3.push((keyValues[o][0]))
  }
  return Top3;
}

var testCode = sortCode();


for (var i=0; i<=testCode.length-1; i++) {
  console.log(testCode[i])  
  demoAppend(testCode[i]);
}

