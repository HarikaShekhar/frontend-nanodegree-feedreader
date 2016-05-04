# Project Overview

This is a web-based application that reads RSS feeds. The project is about writing test suites to test the application.

Getting started - How to use the app:
-------------------------------------
1. Check out the repository or download the repository to local machine.
2. Navigate to the project folder and open 'index.html' in your browser.

Application Testing:
--------------------

Test suite : 'RSS Feeds':
-------------------------

	Test: 'are defined':
	--------------------
		a test that allFeeds variable has been defined and that it is not empty.

	Test: 'Each feed has a URL defined and the URL is not empty':
	-------------------------------------------------------------
		a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

	Test: 'Each feed has a name defined and the name is not empty':
	-------------------------------------------------------------
		a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

Test suite : 'The menu':
------------------------

	Test: 'is hidden by default':
	-----------------------------
		a test that ensures the menu element is hidden by default.

	Test: 'changes visibility when clicked':
	----------------------------------------
		a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.

Test suite : 'Initial Entries':
-------------------------------

	Test: 'entries are populated':
	-----------------------------
		a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

Test suite : 'New Feed Selection':
----------------------------------

	Test: 'Selecting a new feed populates new feed content':
	--------------------------------------------------------
		 a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
