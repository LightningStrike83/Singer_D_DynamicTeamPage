console.log('Doki Doki!');

let teamInfo = document.querySelectorAll("section div img");

let team = [
    {
        name : 'Lightning',
        nicknames : 'Nicknames: Zoxhi, D, L, Jean-Claude von Matterhorn',
        height : 'Height: 6 ft  2 inches',
        age : 'Age: 27',
        birthday : 'Birthday: October 17th',
        sexuality : 'Sexuality: Asexual',
        fav_colour : 'Favourite Colour: Orange',
    },
]

function getTeamData() {
    let teamMember = this.dataset.member
    console.log(team[teamMember]);

    document.querySelector('.nickname_info').textContent = team [teamMember].nicknames;
    document.querySelector('.height_info').textContent = team [teamMember].height;
    document.querySelector('.age_info').textContent = team [teamMember].age;
    document.querySelector('.birthday_info').textContent = team [teamMember].birthday;
    document.querySelector('.sexuality_info').textContent = team [teamMember].sexuality;
    document.querySelector('.fav_colour_info').textContent = team [teamMember].fav_colour;
}

teamInfo.forEach(image => image.addEventListener('click', getTeamData));