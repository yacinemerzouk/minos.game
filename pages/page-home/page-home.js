// HOLY SHIT! YOU'RE ACTUALLY GOING TO READ MY CODE!
// Ok, let me gather my thoughts here...
// Uh, ok, here goes nothing...
// ---
// Before we start...
// You may be playing this game as an app on your phone
// or on the web in your browser, but it's all the same
// source code.
// ---
// Now, let's see... What is going on here?
// This specific app is coded with the Meteor framework
// and I use a package called Iron Router to manage
// "pages" - each page on my website/app is created
// by the router. So, whenever you see the code:
// Router.route(...
// Think "That's the code that determines which
// URL renders which content.
// This is not universal or best practice, it's
// just how I built this site, but hopefully, that makes sense.
// If not, keep reading and it will make more sense as I
// comment line by line.

// This where the homepage code starts
Router.route(

	// 1st PARAMETER: "/"
	// This route is triggered whenever the "/" page
	// is visited -- "/" is standard for the root or base
	// of a folder structure. It's a fancy way to say that
	// someone who goes to the homepage of https://minos.game
	// will see this.
    '/',

	// 2nd PARAMETER: an object with information about the route
	// You can look up objects in detail later. For now, just
	// know that the object contains a list of named values that
	// we can pull up later if needed.
    {

        // ROUTE NAME
		// That's the most important part of the route
		// It tells us which HTML template the route
		// will load. The "pageHome" template is conveniently
		// located in the same folder as the route.
		// Check out /pages/page-home/client/page-home.html
		// in this case.
        name: 'pageHome',
		
		// PAGE DATA
		// Each page will display different information
		// and some of that information will be pulled
		// up set here
		// Quick note on page data: I like my pages to
		// be pretty dumb. What I mean is that the page
		// itself will not do a lot of thinking, or
		// interacting with the user, or talking to the
		// database. We'll use compoonents for that.
		// More on components at:
		// /pages/page-home/client/page-home.html
		data() {

        	// The page data is an object
			// with a few values
        	return {

        		// The page title
				// This is displayed in the top navbar
				title: 'My Teams',

				// Actions are the buttons
				// displayed on either side of the title
				// in the top navbar
				actions: {

					// On the homepage, the only button we have
					// is the "New Team" button.
					next: {
						text: 'New Team',
						link: Router.path('pageTeamNew')
					}

				}

			}

		}

    },

);

// PS: If you're new to coding, you may have noticed
// the indentations in my code. They are meant to
// make the code easier to read and debug.
// I use a tab for each indentation. Some people use
// spaces, but those people are wrong. You should
// use tabs.











































































// https://egg1.minos.game