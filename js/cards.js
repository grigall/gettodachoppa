let card;
let card2;

function Card (cardType, cardName, DESC, NN, HP, STR, SPD, die, DMG, playPhase, affectPlayer, affectBoss, affectMinion, bonus) {
    this.cardType = cardType;
    this.cardName = cardName;
    this.DESC = DESC;
    this.NN = NN;
    this.HP = HP;
    this.STR = STR;
    this.SPD = SPD;
    this.die = die;
    this.DMG = DMG;
    this.playPhase = playPhase;
    this.affectPlayer = affectPlayer;
    this.affectBoss = affectBoss;
    this.affectMinion = affectMinion;
    this.bonus = bonus;
}

/* Card Types */
// 0 = Weapon
// 1 = Skill
// 2 = Action

let noWeapon = new Card (0, 'None', 'Default for no weapon', null, null, null, null, null, null, null, 'yes', null, null, null)

let weaponCard01 = new Card (0, 'Badass Bullpup', 'This bad boy spits out 10mm hollowpoints at 4,000 rounds a minute. Enjoy.', 'badass_bullpup', null, null, 4, 1, 10, 'Combat', 'yes', 'yes', 'yes', null);

let weaponCard02 = new Card (0, 'Compound Bow', 'Silent but deadly.', 'compound_bow', null, 'yes', 2, 2, 6, 'Combat', 'yes', 'yes', 'yes', null);

let weaponCard03 = new Card (0, 'B.F.G.', 'How do you spell "dead"? B.F.G.', 'bfg', null, null, null, 3, 10, 'Combat', 'yes', 'yes', 'yes', null);

let weaponCard04 = new Card (0, 'Alien Wrist Blades', 'Razor-sharp blades made from an alien alloy.', 'wrist_blades', null, 'yes', 1, 2, 8, 'Combat', 'yes', 'yes', 'yes', null);

let actionCard01 = new Card (2, 'Let Off Some Steam', 'What\'s better than boiling hot water? Boiling hot water vapor.', 'letoffsomesteam', null, null, null, null, 10, 'Combat', 'no', 'yes', 'yes', '+5 additional Damage when employed against Bennett.');

let skillCard01 = new Card (1, 'First Aid Kit', 'A First Aid kit. Restores some health.', 'first_aid', 3, 0,0,0,0,'any', 'yes', 'no', 'no', 'none');

let skillCard02 = new Card (1, 'Super Syrum', 'A genetic cocktail that permanently increases your speed.', 'syrum', 0, 0,4,0,0,'any', 'yes', 'no', 'no', 'none');