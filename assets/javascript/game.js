var characters = {
    char1: {
        name: "char1",
        hp: 110,
        attack: 7,
        counter: 16,
        photo: "<img src='assets/images/fey-headshot.jpg' alt='character 1 placeholder' style='object-fit:cover;width:100%;' />",
    },
    char2: {
        name: "char2",
        hp: 90,
        attack: 13,
        counter: 25,
        photo: "<img src='assets/images/rudolph-headshot.jpg' alt='character 2 placeholder' style='object-fit:cover;width:100%;' />",
    },
    char3: {
        name: "char3",
        hp: 120,
        attack: 6,
        counter: 11,
        photo: "<img src='assets/images/wiig-headshot.jpg' alt='character 3 placeholder' style='object-fit:cover;width:100%;' />",
    },
    char4: {
        name: "char4",
        hp: 100,
        attack: 8,
        counter: 18,
        photo: "<img src='assets/images/mckinnon-headshot.jpg' alt='character 4 placeholder' style='object-fit:cover;width:100%;' />",
    }
}

var myCharacter = {
    name: "",
    hp: "",
    attack: "",
    counter: "",
    photo: ""
};

var characterDisplay = function(){
    for (key in characters){
        if (myCharacter.name === "") {
            var newDiv = $("<div>");
            newDiv.addClass("col-md-3 character-photo");
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#characters").append(newDiv);
        }
        else if (myCharacter.name === characters[key].name) {
            var newDiv = $("<div>");
            newDiv.addClass("col-md-3 character-photo");
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#characters").append(newDiv);
        }
    }
}

characterDisplay();

var enemyDisplay = function(){
    for (key in characters){
        if (myCharacter.name !== characters[key].name){
            var newDiv = $("<div>");
            newDiv.addClass("col-md-3 character-photo");
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#enemies").append(newDiv);
        }
    }
}

var chooseCharacter = function() {
    myCharacter = {
        name: $(this).attr("data-name"),
        hp: $(this).attr("data-hp"),
        attack: $(this).attr("data-attack"),
        counter: $(this).attr("data-counter"),
        photo: $(this).attr("data-photo")
    };

    console.log("char", myCharacter)

    $("#characters").empty();
    enemyDisplay();
    characterDisplay();

    // switch(myCharacter.name) {
    //     case "char1":
    //         $("#characters").empty();
    //         enemyDisplay();
    //     case "char2":
    //         $("#characters").empty();
    //         enemyDisplay();
    //     case "char3":
    //         $("#characters").empty();
    //         enemyDisplay();
    //     case "char4":
    //         $("#characters").empty();
    //         enemyDisplay();
    
};



characterDisplay();

$(".character-photo").on("click",chooseCharacter);