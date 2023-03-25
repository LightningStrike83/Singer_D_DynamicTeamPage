console.log('Doki Doki!');

let lightningInfo = document.querySelectorAll("#lightning div img");
let monikaInfo = document.querySelectorAll("#monika div img");
let sliderButton = document.querySelector ("#slider");

let team = [
    {
        name : 'Lightning',
        nicknames : 'Nicknames: Zoxhi, D, L, Jean-Claude von Matterhorn',
        height : 'Height: 6 ft  2 inches',
        age : 'Age: 27',
        birthday : 'Birthday: October 17th',
        sexuality : 'Sexuality: Asexual',
        fav_colour : 'Favourite Colour: Orange',
        fav_game : 'Favourite Game: Pokemon Lets Go Eevee',
        avatar : 'lightning_neutral.jpg'
    },

    {
        name : 'Monika',
        nicknames : 'Nicknames: lilmonix3, Moni-bear',
        height : 'Height: 5 ft  3 inches',
        age : 'Age: 22',
        birthday : 'Birthday: September 22nd',
        sexuality : 'Sexuality: Pansexual',
        fav_colour : 'Favourite Colour: Emerald Green',
        fav_game : 'Favourite Game: Doki Doki Literature Club',
    },
]

function getTeamData() {
    let teamMember = this.dataset.member
    console.log(team[teamMember]);

    document.querySelector('.name_info').textContent = team [teamMember].name;
    document.querySelector('.nickname_info').textContent = team [teamMember].nicknames;
    document.querySelector('.height_info').textContent = team [teamMember].height;
    document.querySelector('.age_info').textContent = team [teamMember].age;
    document.querySelector('.birthday_info').textContent = team [teamMember].birthday;
    document.querySelector('.sexuality_info').textContent = team [teamMember].sexuality;
    document.querySelector('.fav_colour_info').textContent = team [teamMember].fav_colour;
    document.querySelector('.fav_colour_info').textContent = team [teamMember].fav_game;
}

function changeTheme() {
    var lightningImg = document.getElementById("lightning_pic");
    lightningImg.src="images/just_lightning.jpg";

    var monikaImg = document.getElementById("monika_pic");
    monikaImg.src="images/just_monika.jpg";

    var headings = document.querySelectorAll('h2, h3');
    headings.forEach(function(heading) {
        heading.style.fontFamily = 'Rubik Glitch';
    });

    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function(paragraph) {
        paragraph.style.fontFamily = 'Rubik Glitch';
    });

    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
    link.style.fontFamily = 'Rubik Glitch';
    link.textContent = 'Just Monika';
    link.style.fontSize = '12px'
    });

    var sliderImg = document.getElementById("slider");
    sliderImg.src="images/Slider_Dark.svg";
}


lightningInfo.forEach(image => image.addEventListener('click', getTeamData));
monikaInfo.forEach(image => image.addEventListener('click', getTeamData));
sliderButton.addEventListener('click', changeTheme);