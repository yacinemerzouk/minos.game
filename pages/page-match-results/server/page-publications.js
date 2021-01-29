Meteor.publish('pageMatchResults', function({ matchId }) {

    const matchesCursor = MinosMatches.find({ _id: matchId });
    const match = MinosMatches.findOne({ _id: matchId });
    const teamsCursor = Teams.find({ _id: { $in: [match.whiteTeamId, match.blackTeamId] } });

    return [teamsCursor, matchesCursor];

});
