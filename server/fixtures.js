if (Players.find().count() === 0) {

    for (let x = 0; x < 100; x += 1) {

        const player = new Player();
        player.populate({ playerData: Players.random() });
        // console.log(player);
        player.save();

    }

}
