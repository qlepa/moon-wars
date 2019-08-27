This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## `npm install` or `yarn install`

Install all dependencies

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Requirements:

# General requirements
- User should at all times know that something is being loaded (e.g. spinner/fake content)
Application should be responsive and work both on desktop and mobile devices
Use this API: https://punkapi.com/documentation/v2

- Your app should look more or less like this: https://drive.google.com/file/d/0B3Gr69JeT5_jbnhoWmZjRF94VzA (bear in mind it’s more like a mockup and should not be treated as a final design)

- We should be able to run your app using only two commands: npm install && npm start
Once you’re ready to show us your work, pack everything to dropbox or drive and send the link over by email (please do not upload your solution to GitHub or any other publicly available platform)

- Listing view
User should see 20 beers on the first page
Each beer on the list should display: name, image, tagline
On bigger devices items should appear in a grid and on smaller resolutions they should wrap in a column

- User should be able to see more beers as she/he scrolls down (infinite scroll)

- If there are no more items to load user should see that’s the end of the list and no more requests should be triggered

# Details view

Details view should be a modal accessible by clicking on any item on the listing view or by manually entering the page using it’s URL address (e.g. /details/:id)
The modal should contain the following informations: name, tagline, description, image, brewer_tips, ibu, abv
Additionally modal should also list up to 3 similar beers (use available API to get beers with similar IBU/ABV/EBC)


