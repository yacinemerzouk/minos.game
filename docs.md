Guideline :: Pages Are Dumb And Boring
===========================

Pages should be as dumb as possible. Ideally,
grabbing the params from the URL and the data
available on every single page of the game, 
like team info. Everything else should be
handled by components.

Pages should not handle and interactive element
of the UI. Components will do that.

Guideline :: Components Are Smart, But Have No Clue Where They Are
==================================================================

Component should handle their own method calls and pub/sub. 
They should also be responsible for all interactivity
between the user and the UI.

However, components should not be away of their context.
They should have no clue what pa   ge they're on - the page
(or a parent component) will provide arguments needed by
the component.

Page Data :: Properties
=======================
|Key                    |Type       |Optional   |Description|
|---                    |---        |---        |---|
|title                  |String     |No         |Text to display in the top navbar|
|params                 |Object     |Yes        |URL parameters|
|actions                |Object     |Yes        |Info to display buttons in top navbar|
|actions.next           |Object     |Yes        |Info to display the right button in the top navbar|
|actions.next.link      |String     |Yes        |URL the top navbar's right button - a "next" button, if you will - should link to|
|actions.next.text      |String     |Yes        |Text to display on the top navbar's right button|
|actions.previous       |Object     |Yes        |Info to display the right button in the top navbar|
|actions.previous.link  |String     |Yes        |URL the "back" button should link to|
|team                   |Team       |Yes        |The team the logged-in user is currently playing