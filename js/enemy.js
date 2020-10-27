let boss;
let minion;

function Enemy (enemyType, fileName, NN, HP, STR, SPD, DESC, MIN) {
    this.enemyType = enemyType;
    this.fileName = fileName;
    this.NN = NN;
    this.HP = HP;
    this.STR = STR;
    this.SPD = SPD;
    this.DESC = DESC;
    this.MIN = MIN;
}

//Boss Section
const bossList = [
    new Enemy("Boss", "cohaagen", "Cohaagen", 12, 6, 10, "A corporate dictator with a nasty temper, Vilos Cohaagen shortens every game by one round.", 6),
    new Enemy("Boss", "bennett", "Bennett", 15, 8, 10, "A psychotic former commando, Bennett’s tactical skill allows his Minions to make an additional save throw if their first one fails.", 7),
    new Enemy("Boss", "predator", "The Predator", 18, 14, 12, "An alien hunter. The ultimate predator. Loves hot weather.", 4),
    new Enemy("Boss", "abu_salim", "Abu Salim Aziz", 18, 14, 12, "Radical Islamist terrorist by day, equestrian by night. Abu Salim Aziz is anything but warm and fuzzy.", 5),
    new Enemy("Boss", "t1000", "T-1000", 25, 17, 15, "CyberDyne Systems Model 1000. A cybernetic organism that can imitate anything it touches. The ultimate mimic. Nigh-unstoppable.", 0),
]


//Minion Section
const minions = [
    new Enemy("Minion", "sully", "Sully", 12, 6, 10, "A funny guy. You should kill him last.", 0), //Sully
    new Enemy("Minion", "richter", "Richter", 15, 5, 9, "Nice guy. Throws great parties. Proud of his hands.", 0), //Richter
    new Enemy("Minion", "hauser", "Hauser", 12, 6, 10, "Martian Intelligence operative. Not a nice person. Plans great parties though.", 0), //Hauser
    new Enemy("Minion", "samir", "Samir", 15, 5, 9, "Talented torturer. Known for making his 'patients' talk… unless they pick the lock first.", 0), //Samir
    new Enemy("Minion", "predator2", "Alien Hunter", 12, 6, 10, "A hunter from another world who seeks the ultimate prey: you.", 0), //Alien Hunter
    new Enemy("Minion", "t101", "T-101", 20, 15, 10, "CyberDyne Systems Model 101. A cybernetic organism. A killing machine.", 0), //T-101
    new Enemy("Minion", "columbians", "Columbian Paramilitary", 13, 5, 9, "Drug runners. Kidnappers. Some might call them 'bad hombres'.", 0), //Columbian Paramilitary
    new Enemy("Minion", "thug", "Corporate Muscle", 14, 8, 8, "Corporate mercenary. Guaranteed to complicate your day.", 0), //Corporate Muscle
    new Enemy("Minion", "jihadist", "Crimson Jihadist", 10, 5, 7, "Tired of all the other “warm and fuzzy” terrorist groups, these extremists formed their own, more extreme group: the Crimson Jihad.", 0), //Crimson Jihadist
]
