$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         /* Each feed has a URL defined and is not empty. */
         it('Each feed has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         /* Each feed has a name defined and is not empty. */
         it('Each feed has a name defined and the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* new test suite named "The menu" */
    describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default.
         * The menu is hidden by default by adding the class
         * "menu-hidden" to the "body" element.
         */
         it('is hidden by default', function() {
            var body = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('changes visibility when clicked', function() {
            var menu = $('.menu-icon-link'),
                body = $('body');

            menu.click(); //first click - menu shows
            expect(body.hasClass('menu-hidden')).toBe(false);

            menu.click(); //Second click - menu hidden
            expect(body.hasClass('menu-hidden')).toBe(true);
          });
    });

    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function(done) {
            var container = $('.feed');

            container.empty();      // Empty out all previous entries
            loadFeed(0, done);
        });

        it('entries are populated', function() {
            var entries = $('.entry');

            expect(entries.length).toBeGreaterThan(0);
        });
    });

    /* a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         var oldFeed, newFeed;
         beforeEach(function(done) {
            var container = $('.feed');

            container.empty();      //Empty out all previous entries
            loadFeed(1, function() {
                oldFeed = container.html();     //Get the Feed content for first feed

                loadFeed(2, function() {        //Call loadFeed again for second feed in callback
                    newFeed = container.html();     //Get the feed content for second feed
                    done();
                });
            });
         });

         it('Selecting a new feed populates new feed content', function() {
            expect(oldFeed).not.toEqual(newFeed);
         });
    });
}());
