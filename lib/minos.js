Minos = {};

Minos.currentSeason = 'season1';

Minos.range = function({ min, max }) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}