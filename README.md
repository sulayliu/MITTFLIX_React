![](https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png)

## To start this app

To start this app, you will need to run 2 separate commands.

### `npm db`

This will start the database so your app actually has movies to query.<br>
The database runs on port `3001` just in case you need that info.

### `npm start`

This starts up the actual app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Requirements

The app is provided to you in a static state, but it needs to be changed to a fully dynamic React app. It has variety of functionality. You can check out a fully functional app at [here](https://mittflix.web.app/)

## Main Page

Located at `/`, this page has the following functionality:

- movies are grouped by genre.
- genre headings only show up if there are movies that belong to that genre.
- movies can belong to 1 or more genres and show up multiple times on the page.
- genres are displayed in alphabetical order.
- all the genres that have movies are displayed.

## Search (Filter)

Located on all pages, search has the following functionality:

- The search will apply to the list of movies display on any of the pages the user is currenty visiting.
- The search filters the results down based on the input provided
- The results are filtered based on the finding matching text either within the `title` or the `overview`
- The amount of results found are displayed below the search field.
- The search query used are displayed below the search field.
- Don't worry about the filter *NOT* working on backspace.

## My List

Located at `/my-list`, this page has the following functionality:

- Users can see all the movies that have been added to their list
- Movies are not sorted by genres

## Adding to My List

Located on all pages, adding to my list has the following functionality:

- Users can hover over a movie and see a `+` sign. Clicking on this button will add a movie to their list.
- Once a movie is added to the users list, it will show up under the `My List` section
- This update must be made in a way so that the information persists even if the browser is reloaded. This means, you'll have to update the API
- If a movie is added to the users list, it must include a red checkmark.
- Clicking on a movies checkmark that is already on their list will remove it.

## MovieAPI

Provided to you, there is a `MovieAPI`, in a `MovieAPI.js` file, which is already imported for you by default in `App.js`.

The MovieAPI has the following methods available:

- `MovieAPI.getAll()`: This will return to you all the `movies` in the database.
- `MovieAPI.genre()`: This will return to you all the `genres` in the database.
- `MovieAPI.addToList(movie)`: Accepts 1 parameter, a `movie` object. It will update a movies `my_list` attribute to `true` and save it to the database for you.
- `MovieAPI.removeFromList(movie)`: Accepts 1 parameter, a `movie` object. It will update a movies `my_list` attribute to `false` and save it to the database for you.

All API endpoints return promises, so you can freely chain a `.then()` on to them. They already provide you the results in a JSON format, so you'll simply have to accept a parameter into your `then()`.

## TIPS:

- This is cumulative project of everything we've done thus far in the last 5 months together. It is composed of many small problems, and while it can seem overwhelming, remember to divide and conquer. Break down the problem into small piecies and focus on those. Here is an example of some of the smaller problems that you could look at solving, in an order that I think makes a lot of sense:
  - Retrieving Movies from the API and placing them into state
  - Displaying Movies from state
  - Adding movies to `My List` and saving them back to the API
  - Adding React Router to Display `My List` seperately
  - Filter Movies
  - Add special info to `filter` based on the results
  - Breaking down the list of movies into Genres and displaying them accordingly

- We've actually done ALL of this before, so none of this is actually new. But it's a matter of making a small changes to your previous solutions and applying it in a new scenario. This is a very important skill to have as a developer.

- Ask questions if you are unclear. I'll do my best to help remove road blocks without giving up too much of the solution.

- Start early, take breaks, celebrate small wins.

- GL HF!
