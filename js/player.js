let player;

function Player (classType, NN, HP, STR, SPD, DESC) {
    this.classType = classType;
    this.NN = NN;
    this.HP = HP;
    this.STR = STR;
    this.SPD = SPD;
    this.DESC = DESC;
}

const heroes = [
    new Player("Dutch", 'dutch', 19, 13, 9, 'Veteran Special Operator. Expert in jungle warfare. Not afraid of getting muddy.'),
    new Player("Douglas Quaid", 'quaid', 15, 12, 12, 'Mild-mannered construction worker. Likes demure women. Not a fan of parties.'),
    new Player("Harry Tasker", 'tasker', 18, 12, 10, 'Veteran Special Agent with an iron-clad secret identity. Sometimes has marital troubles. Not a fan of car salesmen.'),
    new Player("John Matrix", 'matrix', 20, 15, 8, 'Commando by trade. Lumberjack by necessity. Father of the Year.'),
];

function setHeroes(wrapper) {
    let hero
    for (hero of heroes) {
        const heroCard = document.createElement('div')
        heroCard.classList.add('heroWrapper')
        heroCard.innerHTML = `
            <a href="#" onclick="Main.startSettings('${hero.classType}')">
                <div class="hero">
                    <h3>${hero.classType}</h3>
                    <img src="./img/${hero.NN}.png" alt="${hero.classType}">
                    <p>${hero.DESC}</p>
                </div>
            </a>
        `
        wrapper.appendChild(heroCard)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('cardWrapper')
    setHeroes(wrapper)
})
