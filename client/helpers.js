import { Template } from "meteor/templating";

Template.registerHelper('playerRating', function(data) {

    const player = new Player();
    player.populate({ playerData: data.hash.player });
    return player.rating();

});