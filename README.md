![](https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png)

## To start this app

To start this app, you will need to run 2 separate commands.

### `npm run db`

This will start the database so your app actually has movies to query.<br>
The database runs on port 3001 just in case you need that info.

### `npm run start`

This starts up the actual app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Requirements

The app is provided to you in a static state, but it needs to be changed to a fully dynamic React app. It has variety of functionality. You can see all the functionality displayed at this sample version of the app hosted here: [https://mittflix.firebaseapp.com/](https://mittflix.firebaseapp.com/);

## Main Page

Located at `/`, this page has the following functionality:

- movies are grouped by genre.
- a maximum of 5 movies are shown below each genre heading.
- genre headings only show up if there are movies that belong to that genre.
- movies can belong to 1 or more genres and show up multiple times on the page.
- genres are displayed in alphabetical order.
- all the genres, with movies are displayed.

## Search

Located on all pages, search has the following functionality:

- The search will apply to any of the pages the user is currenty visiting.
- search filters the results down based on the input provided
- the results are filtered based on the finding matching text either within the `title` or the `overview`
- the amount of results found are displayed below the search field
- the search query used are displayed below the search field
- don't worry about the filter *NOT* working on backspace

## Browse

Located at `/browse`, this page has the following functionality:

- Users can see all 100 movies
- Movies are not sorted by genres

## My List

Located at `/my-list`, this page has the following functionality:

- Users can see all the movies that have been added to their list
- Movies are not sorted by genres

## Adding to My List

Located on all pages, adding to my list has the following functionality:

- Users can hover over a movie and see a `+` sign. Clicking on this button will add a movie to their list.
- Once a movie is added to the users list, it will show up under the `my-list` section
- This update must be made in a way so that the information persists even if the browser is reloaded.
- If a movie is added to the users list, it must include a red checkmark.
- Clicking on a movies checkmark that is already on their list will remove it.