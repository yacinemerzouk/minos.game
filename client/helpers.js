import { Template } from "meteor/templating";


// ===================================================
// HELPER: eq
// Checks for equality between 2 provided variables
// @arg Mixed: value1
// @arg Mixed: value2
// @return Boolean: whether the 2 values are equal or not
// ===================================================
UI.registerHelper('eq', function(value1, value2) {

    // Do it
    return value1 === value2;

});

// ===================================================
// HELPER: playerRating
// ===================================================
Template.registerHelper('playerRating', function(data) {

    const player = new Player();
    player.populate({ playerData: data.hash.player });
    return player.rating();

});

// ===================================================
// HELPER: truncate
// Truncate a string
// @arg Object: { string, maxLength }
// @return String: The truncated string
// ===================================================
UI.registerHelper('truncate', function(data) {

    // The string to truncate
    const text = data.hash.string;

    // Maximum number of characters to extract
    const maxLength = data.hash.maxLength || 70;

    // Prep var for truncated string
    let trimmedString = '';

    // If string to truncate is provided
    if (text && text !== '') {

        // Trim the string to the maximum length
        trimmedString = text.substr(0, maxLength);

        // If trimming actually happened, we may have truncated the string in the middle of a word
        // We don't want that because it looks stupid
        if (trimmedString.length < text.length) {

            // Re-trim if we are in the middle of a word
            trimmedString = text.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));

            // And add an ellipsis (or whatever 3 dots is called -- why don't we just call it 3-dots?)
            trimmedString += ' ...';

        }

    }

    return trimmedString;

});