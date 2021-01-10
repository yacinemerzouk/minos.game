import SimpleSchema from 'simpl-schema';

class PlayersCollection extends Mongo.Collection {

    insert(player, callback) {

        return super.insert(player, callback);

    }

    update(selector, player, callback) {

        return super.update(selector, player, callback);

    }

    remove(selector, callback) {

        return super.remove(selector, callback);

    }

}

Players = new PlayersCollection('minos_players');

Players.allow({

    insert() {

        return true;

    },
    update() {

        return true

    },
    remove() {

        return true;

    },

});

const playersSchema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id },
    teamId: { type: String, regEx: SimpleSchema.RegEx.Id },
    firstName: { type: String, optional: false },
    lastName: { type: String, optional: false },
    position: { type: String, optional: false },
    strength: { type: Number, optional: false },
    dexterity: { type: Number, optional: false },
    fortitude: { type: Number, optional: false },
    anticipation: { type: Number, optional: false },
    quickness: { type: Number, optional: false },
    throwing: { type: Number, optional: false },
    catching: { type: Number, optional: false },
    evade: { type: Number, optional: false },
    gore: { type: Number, optional: false },
    maze: { type: Number, optional: false },
});

Players.attachSchema(playersSchema);

Players.random = function() {

    const player = {};
    player.firstName = getFirstName();
    player.lastName = getLastName();
    player.position = getPosition();

    // Primary = Strength @ 20 / 50-100
    // Secondary = Fortitude, Gore @ 5 / 30-100
    // Others @ 1 / 1-100
    if (player.position === 'brute') {

        player.strength = generateStat({ min: 50, max: 100 }); // 60 - 100
        player.dexterity = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.fortitude = generateStat({ min: 30, max: 100 }); // 40 - 100
        player.anticipation = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.quickness = generateStat({ min: 1, max: 100 }); // 1 - 80
        player.throwing = generateStat({ min: 1, max: 100 }); // 1 - 60
        player.catching = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.evade = generateStat({ min: 1, max: 100 }); // 1 - 60
        player.gore = generateStat({ min: 30, max: 100 }); // 60 - 100
        player.maze = generateStat({ min: 1, max: 100 }); // 1 - 100

    }

    // Primary = Quickness @ 20 / 50-100
    // Secondary = Evade, Maze @ 5 / 30-100
    // Others @ 1 / 1-100
    if (player.position === 'runner') {

        player.strength = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.dexterity = generateStat({ min: 1, max: 100 }); // 40 - 100
        player.fortitude = generateStat({ min: 1, max: 100 }); // 20 - 100
        player.anticipation = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.quickness = generateStat({ min: 50, max: 100 }); // 40 - 100
        player.throw = generateStat({ min: 1, max: 60 }); // 1 - 60
        player.catch = generateStat({ min: 1, max: 100 }); // 20 - 100
        player.evade = generateStat({ min: 30, max: 100 }); // 20 - 100
        player.gore = generateStat({ min: 1, max: 100 }); // 1 - 80
        player.maze = generateStat({ min: 30, max: 100 }); // 1 - 100

    }

    // Primary = Anticipation @ 20 / 50-100
    // Secondary = Evade, Gore @ 5 / 30-100
    // Others @ 1 / 1-100
    if (player.position === 'poacher') {

        player.strength = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.dexterity = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.fortitude = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.anticipation = generateStat({ min: 50, max: 100 }); // 60 - 100
        player.quickness = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.throwing = generateStat({ min: 1, max: 100 }); // 1 - 60
        player.catching = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.evade = generateStat({ min: 30, max: 100 }); // 1 - 100
        player.gore = generateStat({ min: 30, max: 100 }); // 1 - 100
        player.maze = generateStat({ min: 1, max: 100 }); // 1 - 100

    }

    // Primary = Catch @ 20 / 50-100
    // Secondary = Dexterity, Anticipation @ 5 / 30-100
    // Others @ 1 / 1-100
    if (player.position === 'climber') {

        player.strength = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.dexterity = generateStat({ min: 30, max: 100 }); // 40 - 100
        player.fortitude = generateStat({ min: 1, max: 100 }); // 20 - 100
        player.anticipation = generateStat({ min: 30, max: 100 }); // 1 - 100
        player.quickness = generateStat({ min: 1, max: 100 }); // 40 - 100
        player.throwing = generateStat({ min: 1, max: 100 }); // 1 - 60
        player.catching = generateStat({ min: 50, max: 100 }); // 1 - 100
        player.evade = generateStat({ min: 1, max: 100 }); // 40 - 100
        player.gore = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.maze = generateStat({ min: 1, max: 100 }); // 40 - 100

    }

    // Primary = Throw @ 20 / 50-100
    // Secondary = Maze, Anticipation @ 5 / 30-100
    // Others @ 1 / 1-100
    if (player.position === 'thrower') {

        player.strength = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.dexterity = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.fortitude = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.anticipation = generateStat({ min: 30, max: 100 }); // 1 - 100
        player.quickness = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.throwing = generateStat({ min: 50, max: 100 }); // 50 - 100
        player.catching = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.evade = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.gore = generateStat({ min: 1, max: 100 }); // 1 - 100
        player.maze = generateStat({ min: 30, max: 100 }); // 20 - 100

    }

    return player;

};

const firstNames = [
    'Griff',
    'Bovi',
    'Axel',
    'Cowen',
    'Dart',
    'Elum',
    'Frack',
    'Goff',
    'Hulk',
    'Ike',
    'Achillios',
    'Adonis',
    'Alekos',
    'Altair',
    'Apolo',
    'Arete',
    'Aristotle',
    'Baruch',
    'Chloris',
    'Cletus',
    'Cloris',
    'Costa',
    'Damianos',
    'Denys',
    'Dino',
    'Dion',
    'Dionysios',
    'Elias',
    'Erasmus',
    'Eugen',
    'Felix',
    'Flavian',
    'Aranare',
    'Arudara',
    'Asijaka',
    'Bansabira',
    'Didikase',
    'Duripi',
    'Itaja',
    'Jadikira',
    'Ja-Pa-Qa',
    'Kikeru',
    'Kitanetos',
    'Kubaba',
    'Mijararos',
    'Nashuja',
    'Pamesijos',
    'Pijaseme',
    'Pijasiros',
    'Pinaruti',
    'Pitaja',
    'Pura',
    'Rusa',
    'Sima',
    'Sama',
    'Sijapuros',
    'Tarina',
    'Titiku',
    'Widina',
    'Yidini',
    'Gregor',
    'Hali',
    'Herakles',
    'Hesper',
    'Isidore',
    'Kali',
    'Kaly',
    'Kyros',
    'Leandros',
    'Leontios',
    'Lukas',
    'Makarios',
    'Maximos',
    'Milos',
    'Moris',
    'Nik',
    'Orion',
    'Paulos',
    'Petros',
    'Seraphim',
    'Socrates',
    'Thanos',
    'Thetis',
    'Titos',
    'Zenon',
    'Zeno',
    'Zak',
    'Zacheus',
    'Jak',
    'Kilmus',
    'Bronk',
    'Gronk',
    'Dronk',
    'Gorman',
    'Gark',
    'Gurk',
    'Mork',
    'Nano',
    'Baldy',
    'Papi',
];


const lastNamePrefixes = [
    'Strong',
    'Strong',
    'Strong',
    'Strong',
    'Strong',
    'Proud',
    'Proud',
    'Proud',
    'Proud',
    'Proud',
    'Burl',
    'Tough',
    'Ox',
    'Thunder',
    'Rumble',
    'Puff',
    'High',
    'High',
    'High',
    'High',
    'Long',
    'Gruff',
    'Vile',
    'Low',
    'Gore',
    'Gore',
];


const lastNameSuffixes = [
    'hoof',
    'snout',
    'horn',
    'withers',
    'muzzle',
    'cannon',
    'hock',
    'ax',
    'bone',
    'foot',
    'udder',
    'buck',
    'husk',
];

const positions = [
    'brute',
    'runner',
    'poacher',
    'climber',
    'thrower',
];
const getFirstName = function() {

    const index = Math.floor(Math.random() * firstNames.length);
    return firstNames[index];

};

const getLastName = function() {

    const prefixIndex = Math.floor(Math.random() * lastNamePrefixes.length);
    const suffixIndex = Math.floor(Math.random() * lastNameSuffixes.length);
    return `${lastNamePrefixes[prefixIndex]}${lastNameSuffixes[suffixIndex]}`;

};

const getPosition = function() {

    const index = Math.floor(Math.random() * positions.length);
    return positions[index];

};

const generateStat = function({ min, max }) {

    return Math.floor(min + Math.random() * (max - min));

};