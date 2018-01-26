var characters = {
    char1: {
        name: "char1",
        hp: 110,
        attack: 7,
        counter: 16,
        photo: "<img src='assets/images/fey-headshot.jpg' alt='character 1 placeholder' style='object-fit:cover;width:100%;' />",
        dead: false,
    },
    char2: {
        name: "char2",
        hp: 90,
        attack: 13,
        counter: 25,
        photo: "<img src='assets/images/rudolph-headshot.jpg' alt='character 2 placeholder' style='object-fit:cover;width:100%;' />",
        dead: false,
    },
    char3: {
        name: "char3",
        hp: 120,
        attack: 6,
        counter: 11,
        photo: "<img src='assets/images/wiig-headshot.jpg' alt='character 3 placeholder' style='object-fit:cover;width:100%;' />",
        dead: false,
    },
    char4: {
        name: "char4",
        hp: 100,
        attack: 8,
        counter: 18,
        photo: "<img src='assets/images/mckinnon-headshot.jpg' alt='character 4 placeholder' style='object-fit:cover;width:100%;' />",
        dead: false,
    }
}

var hero = {
    name: "",
    hp: "",
    attack: "",
    counter: "",
    photo: ""
};

var characterDisplay = function(){
    for (key in characters){
        if (hero.name === "") {
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
        else if (hero.name === characters[key].name) {
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

var defender = {
    name: "",
    hp: "",
    attack: "",
    counter: "",
    photo: ""
};

var chooseDefender = function(){
    $("#defender").empty();
    defender = {
        name: $(this).attr("data-name"),
        hp: $(this).attr("data-hp"),
        attack: $(this).attr("data-attack"),
        counter: $(this).attr("data-counter"),
        photo: $(this).attr("data-photo")
    }

    console.log("defender",defender);

    var addDefender = function(){
        var newDiv = $("<div>");
        newDiv.addClass("col-md-3 character-photo");
        newDiv.attr("data-name", defender.name);
        newDiv.attr("data-hp", defender.hp);
        newDiv.attr("data-attack", defender.attack);
        newDiv.attr("data-counter", defender.counter);
        newDiv.attr("data-photo", defender.photo);
        newDiv.html(defender.photo);
        $(".enemy-row").addClass("hidden");
        $("#fight-button").removeClass("hidden");
        $(".defender-row").removeClass("hidden");
        $("#defender").append(newDiv);
    }

    addDefender();
    enemyDisplay();
}

var enemyDisplay = function(){
    $("#enemies").empty();
    for (key in characters){
        if (hero.name !== characters[key].name && defender.name !== characters[key].name && characters[key].dead === false){
            var newDiv = $("<div>");
            newDiv.addClass("col-md-3 character-photo");
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#enemies").append(newDiv);
            $(".character-photo").on("click",chooseDefender);
        }
    }
}

var chooseCharacter = function() {
    hero = {
        name: $(this).attr("data-name"),
        hp: $(this).attr("data-hp"),
        attack: $(this).attr("data-attack"),
        counter: $(this).attr("data-counter"),
        photo: $(this).attr("data-photo")
    };

    console.log("char", hero)

    $("#characters").empty();
    $(".enemy-row").removeClass("hidden");
    enemyDisplay();
    characterDisplay();
    $("#player-row").text("Your Hero");
};

roundNumber = 1;
kills = 0;

var fightRound = function() {
    console.log("my hp",hero.hp);
    console.log("defender hp",defender.hp);
    defender.hp = defender.hp - hero.attack;
    roundNumber++;
    hero.attack = hero.attack * roundNumber;
    hero.hp = hero.hp - defender.counter;
    if (defender.hp < 0){
        characters[defender.name].dead = true;
        kills++;
        $("#defender").empty();
        $(".defender-row").addClass("hidden");
        $("#fight-button").addClass("hidden");
        $(".enemy-row").removeClass("hidden");
        if (kills === 3){
            console.log("you win");
            $(".enemy-row").addClass("hidden");
            $("#player-row").text("You Win!!!!");
        }
    }
    else if (hero.hp < 0){
        characters[hero.name].dead = true;
    }
    console.log("my hp",hero.hp);
    console.log("defender hp",defender.hp);
}

$(".character-photo").on("click",chooseCharacter);
$("#fight-button").on("click",fightRound);