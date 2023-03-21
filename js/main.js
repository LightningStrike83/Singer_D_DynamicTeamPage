console.log('Doki Doki!');

let lightningInfo = document.querySelectorAll("#lightning div img");
let monikaInfo = document.querySelectorAll("#monika div img");

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

lightningInfo.forEach(image => image.addEventListener('click', getTeamData));
monikaInfo.forEach(image => image.addEventListener('click', getTeamData));