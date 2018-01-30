var characters = {
    char1: {
        index: "char1",
        name: "The Wonders",
        hp: 110,
        attack: 7,
        counter: 16,
        photo: "<img src='assets/images/thewonders.png' alt='The Wonders, from the film That Thing You Do!' />",
        dead: false,
    },
    char2: {
        index: "char2",
        name: "Sex Bob-omb",
        hp: 90,
        attack: 13,
        counter: 25,
        photo: "<img src='assets/images/sexbobomb.png' alt='Sex Bob-omb, from the film Scott Pilgrim vs the World' />",
        dead: false,
    },
    char3: {
        index: "char3",
        name: "The Blues Brothers",
        hp: 120,
        attack: 6,
        counter: 11,
        photo: "<img src='assets/images/bluesbrothers.jpg' alt='The Blues Brothers, from the film of the same name' />",
        dead: false,
    },
    char4: {
        index: "char4",
        name: "Otis Day & The Knights",
        hp: 100,
        attack: 8,
        counter: 18,
        photo: "<img src='assets/images/otisdayandtheknights.jpg' alt='Otis Day & The Knights, from the film Animal House' />",
        dead: false,
    }
}

var hero = {
    index: "",
    name: "",
    hp: "",
    attack: "",
    counter: "",
    photo: ""
};

var defender = {
    index: "",
    name: "",
    hp: "",
    attack: "",
    counter: "",
    photo: ""
};

var fightText = function(){
    var fightWords = ["rock", "rock n rolllll", "rage", "thrash", "trill", "shred", "melt faces", "pump up the jam", "bump it", "take the express train to Shredtown", "bring down the house", "turn it up to 11", "boogie"]
    var rockWord = fightWords[Math.floor(13 * Math.random())];
    return rockWord;
}

var statsDisplay = function() {
    var statsDiv = $("<h3>");
    statsDiv.html(characters[key].name + "<br />" + "HP: " + characters[key].hp);
    $(".stats-needed").append(statsDiv);
    statsDiv.addClass("character-stats");
    if (characters[key].name === hero.name){
        statsDiv.addClass("hero-stats");
    }
    else if (characters[key].name === defender.name){
        statsDiv.addClass("defender-stats");
    }
    $(".character-photo").removeClass("stats-needed");
}

var deadDisplay = function() {
    var deadDiv = $("<h3>");
    deadDiv.html("X");
    deadDiv.addClass("dead");
    $(".x-needed").append(deadDiv);
    $(".character-photo").removeClass("x-needed");
}
            

var characterDisplay = function(){
    for (key in characters){
        if (hero.name === "") {
            var newDiv = $("<div>");
            newDiv.addClass("col-md-2 character-photo stats-needed");
            newDiv.attr("data-index", characters[key].index);
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#characters").append(newDiv);
            statsDisplay();
        }
        else if (hero.name === characters[key].name && characters[hero.index].dead === false) {
            var newDiv = $("<div>");
            newDiv.addClass("col-md-2 character-photo stats-needed");
            newDiv.attr("data-index", characters[key].index);
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#characters").append(newDiv);
            statsDisplay();
        }
        else if (hero.name === characters[key].name && characters[hero.index].dead === true) {
            $("#characters").empty();
            var newDiv = $("<div>");
            newDiv.addClass("col-md-2 character-photo x-needed stats-needed");
            newDiv.attr("data-index", characters[key].index);
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#characters").append(newDiv);
            deadDisplay();
            statsDisplay();
        }
    }
}

characterDisplay();

var chooseDefender = function(){
    $("#defender").empty();
    defender = {
        index: $(this).attr("data-index"),
        name: $(this).attr("data-name"),
        hp: $(this).attr("data-hp"),
        attack: $(this).attr("data-attack"),
        counter: $(this).attr("data-counter"),
        photo: $(this).attr("data-photo")
    }


    var addDefender = function(){
        for (key in characters){
            if (defender.name === characters[key].name){
                var newDiv = $("<div>");
                newDiv.addClass("col-md-2 character-photo stats-needed");
                newDiv.attr("data-index", characters[key].index);
                newDiv.attr("data-name", defender.name);
                newDiv.attr("data-hp", defender.hp);
                newDiv.attr("data-attack", defender.attack);
                newDiv.attr("data-counter", defender.counter);
                newDiv.attr("data-photo", defender.photo);
                newDiv.html(defender.photo);
                $(".enemy-row").addClass("hidden");
                $("#fight-button").text(fightText);
                $(".damage").empty();
                $("#fight-button").removeClass("hidden");
                $(".defender-row").removeClass("hidden");
                $("#defender").append(newDiv);
                statsDisplay();
            }
        }
    }

    addDefender();
    enemyDisplay();
}

var enemyDisplay = function(){
    $("#enemies").empty();
    for (key in characters){
        if (hero.name !== characters[key].name && characters[key].dead === false){
            var newDiv = $("<div>");
            newDiv.addClass("col-md-2 character-photo stats-needed");
            newDiv.attr("data-index", characters[key].index);
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#enemies").append(newDiv);
            $(".character-photo").on("click",chooseDefender);
            statsDisplay();
        }
        else if (characters[key].dead === true){
            var newDiv = $("<div>");
            newDiv.addClass("col-md-2 character-photo x-needed stats-needed");
            newDiv.attr("data-index", characters[key].index);
            newDiv.attr("data-name", characters[key].name);
            newDiv.attr("data-hp", characters[key].hp);
            newDiv.attr("data-attack", characters[key].attack);
            newDiv.attr("data-counter", characters[key].counter);
            newDiv.attr("data-photo", characters[key].photo);
            newDiv.html(characters[key].photo);
            $("#enemies").append(newDiv);
            deadDisplay();
            statsDisplay();
        }
    }
}

var chooseCharacter = function() {
    hero = {
        index: $(this).attr("data-index"),
        name: $(this).attr("data-name"),
        hp: $(this).attr("data-hp"),
        attack: $(this).attr("data-attack"),
        counter: $(this).attr("data-counter"),
        photo: $(this).attr("data-photo")
    };

    $("#characters").empty();
    $(".enemy-row").removeClass("hidden");
    enemyDisplay();
    characterDisplay();
    $("#hero-row-text").text("Your Hero");
};

roundNumber = 1;
kills = 0;

var fightRound = function() {
    defender.hp = defender.hp - hero.attack;
    $(".damage").removeClass("hidden");
    $("h2 .hero-damage").html("You " + fightText() + " for " + hero.attack + " damage!");
    roundNumber++;
    hero.attack = hero.attack * roundNumber;
    hero.hp = hero.hp - defender.counter;
    $("h2 .defender-damage").html(defender.name + " " + fightText() + " for " + defender.counter + " damage!");
    $(".hero-stats").html(hero.name + "<br />" + "HP: " + hero.hp);
    $(".defender-stats").html(defender.name + "<br />" + "HP: " + defender.hp);
    if (defender.hp < 0){
        $("h2 > #defender-damage").html(defender.name + " " + fightText() + " for " + defender.counter + " damage, but it's too late! They're all rocked out.");
        characters[defender.index].dead = true;
        kills++;
        $("#defender").empty();
        $(".defender-row").addClass("hidden");
        $("#fight-button").addClass("hidden");
        enemyDisplay();
        $(".enemy-row").removeClass("hidden");
        if (kills === 3){
            $(".enemy-row").addClass("hidden");
            $("h2 > #defender-damage").html("The writing was on the wall. " + defender.name + " " + fightText() + " for " + defender.counter + " damage, but it's all over. You're the champ!");
        }
    }
    if (hero.hp < 0){
        characters[hero.index].dead = true;
        $(".enemy-row").addClass("hidden");
        characterDisplay();
        $("h2 > #hero-damage").html("Bad news, bud. You " + fightText() + " for " + hero.attack + " damage, but...");
        $("h2 > #defender-damage").html(defender.name + " " + fightText() + " for " + defender.counter + " damage. You're soaked, pal. Brutal.");
    }
    $("#fight-button").text(fightText);
}

$(".character-photo").on("click",chooseCharacter);
$("#fight-button").on("click",fightRound);