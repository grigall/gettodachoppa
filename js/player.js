let player;

function Player (classType, NN, HP, STR, SPD, DESC) {
    this.classType = classType;
    this.NN = NN;
    this.HP = HP;
    this.STR = STR;
    this.SPD = SPD;
    this.DESC = DESC;
}

let hero00  = new Player("Dutch", 'dutch', 19, 13, 10, 'Veteran Special Operator. Expert in jungle warfare. Not afraid of getting muddy.');
let hero01 = new Player("Douglas Quaid", 'quaid', 17, 12, 12, 'Mild-mannered construction worker. Likes demure women. Not a fan of parties.');
let hero02 = new Player("Harry Tasker", 'tasker', 18, 12, 10, 'Veteran Special Agent with an iron-clad secret identity. Sometimes has marital troubles. Not a fan of car salesmen.');
let hero03 = new Player("John Matrix", 'matrix', 20, 15, 10, 'Commando by trade. Lumberjack by necessity. Father of the Year.');
