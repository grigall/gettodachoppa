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
// 1 = Skill or Action
// 2 = Not currently used

let noWeapon = new Card (0, 'None', 'Default for no weapon', null, null, null, null, null, null, null, true, null, null, null)

// TODO: Add cards that only affect Bosses

const playerDeck = [
    // Weapons
    new Card(0, 'Badass Bullpup', 'This bad boy spits out 10mm hollowpoints at 4,000 rounds a minute. Enjoy.', 'badass_bullpup', null, null, 4, 1, 10, null, true, false, false, null),
    new Card(0, 'Compound Bow', 'Silent but deadly.', 'compound_bow', null, true, 2, 2, 6, null, true, false, false, null),
    new Card(0, 'B.F.G.', 'How do you spell "dead"? B.F.G.', 'bfg', null, null, null, 3, 10, null, true, false, false, null),
    new Card(0, 'Alien Wrist Blades', 'Razor-sharp blades made from an alien alloy.', 'wrist_blades', null, true, 1, 2, 8, null, true, false, false, null),
    // Cards that only affect the player
    new Card(1, 'First Aid Kit', 'A First Aid kit. Restores some health.', 'first_aid', 3, 0, 0, 0, 0, null, true, false, false, null),
    new Card(1, 'First Aid Kit', 'A First Aid kit. Restores some health.', 'first_aid', 3, 0, 0, 0, 0, null, true, false, false, null),
    new Card(1, 'Super Syrum', 'A genetic cocktail that permanently increases your speed.', 'syrum', 0, 0, 4, 0, 0, null, true, false, false, null),
    new Card(1, 'Yeah, Yeah, Yeah, Good Horse', 'You borrow a horse from a cop. What could go wrong? Play for a boost in SPD.', 'goodhorse', 0, 0, 10, null, null, null, true, false, false, null),
    new Card(1, 'Inconvenient Truth', 'You unwittingly confess that you’ve been hiding a secret identity from your wife for years. You\'d best prepare yourself.', 'inconvenienttruth', 0, -5, -5, null, null, 0, true, false, false, null),
    new Card(1, 'Strength Increase', '+1 STR', 'skl_str', 0, 1, 0, null, null, null, true, false, false, null),
    new Card(1, 'Strength Increase', '+1 STR', 'skl_str', 0, 1, 0, null, null, null, true, false, false, null),
    new Card(1, 'Strength Increase', '+1 STR', 'skl_str', 0, 1, 0, null, null, null, true, false, false, null),
    new Card(1, 'Speed Increase', '+1 SPD', 'skl_spd', 0, 0, 1, null, null, null, true, false, false, null),
    new Card(1, 'Speed Increase', '+1 SPD', 'skl_spd', 0, 0, 1, null, null, null, true, false, false, null),
    new Card(1, 'Health Increase', '+1 HP', 'skl_hp', 1, 0, 0, null, null, null, true, false, false, null),
    new Card(1, 'Exploding Vehicle', 'The vehicle you are driving suddenly erupts in flames. You are very badly burned but still alive… mostly.', 'exploding_vehicle', -10, 0, 0, null, null, 0, true, false, false, null),
    // Cards that affect both Minions and Bosses
    new Card(1, 'Let Off Some Steam', 'What\'s better than boiling hot water? Boiling hot water vapor.', 'letoffsomesteam', -10, null, null, null, null, null, false, true, true, '+5 additional Damage when employed against Bennett or his minions.'),
    // Cards that only affect Minions
    new Card(1, 'Nice Night for a Walk', 'That laundry isn\'t going to do itself. Play this card to take one minion out of play for the remainder of the game.', 'nicenightforawalk', -1000, null, null, null, null, null, false, false, true, null),
    // Cards that affect everyone
    new Card(1, 'Minor Explosion', 'You get caught in a small explosion.', 'minor_explosion', -5, 0, 0, null, null, 0, true, true, true, null),
];
