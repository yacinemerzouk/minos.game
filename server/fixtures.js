firstNames = [
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


lastNamePrefixes = [
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


lastNameSuffixes = [
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

positions = [
    'brute',
    'runner',
    'poacher',
    'climber',
    'thrower',
];
getFirstName = function() {

    const index = Math.floor(Math.random() * firstNames.length);
    return firstNames[index];

};

getLastName = function() {

    const prefixIndex = Math.floor(Math.random() * lastNamePrefixes.length);
    const suffixIndex = Math.floor(Math.random() * lastNameSuffixes.length);
    return `${lastNamePrefixes[prefixIndex]}${lastNameSuffixes[suffixIndex]}`;

};

getPosition = function() {

    const index = Math.floor(Math.random() * positions.length);
    return positions[index];

};

generateStat = function({ min, max }) {

    return Math.floor(min + Math.random() * (max - min));

};

if (Players.find().count() === 0) {

    for (let x = 0; x < 100; x += 1) {

        const player = new Player();
        player.populate({ playerData: Players.random() });
        // console.log(player);
        player.save();

    }

}

if (Managers.find().count() === 0) {

    for (let x = 0; x < 40; x += 1) {

        const manager = new Manager();
        manager.populate({ managerData: Managers.random() });
        manager.save();

    }

}
