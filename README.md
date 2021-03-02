# Hot Sauce List App

Live Demo: https://jomandaman.github.io/hot-sauces

This is a lightweight app to view and learn about a small assortment of some of the best-rated hot sauces. 
A grid shows eight sauces, with title and a small description. If desired to remove any, simply click 
delete on the sauce's card. If a delete was made by mistake, you will see a dialog box 
allowing you to undo the most recent deletion. 

Upon clicking on a card (or on "learn more"), you will be directed to the hot sauce's detail page, 
a zoomed-in version of the photo, and an extra description paragraph. A button at the top can take you 
back to the main list page. The app is set up with React Router to allow URL references to 
each individual hot sauce, where the /hot-sauces URL changes to /more-info?id=n, where n is the id
of the hot sauce as given in the hotsauces.ts file. For example Sriracha, with an id of 5, would
have the URL {domain}/more-info?id=5.

## Design Choices
Material UI was chosen as the design framework, incorporating Google fonts for customization. 

The images were updated with updated versions of the Hot Sauces, as several were missing or oudated.
Also the images in the original hotsauces.json were of varying aspect ratios and sizing, leading to 
issues sizing within the card. I made these consistent, at a square aspect ratio of 800x800 pixels.
This would be a similar expectation to clients (or internal designers) to provide images of consistent
aspect ratios so as not to break the layout.

Overall if more time was given, my intention is to have a larger image as the background with a single 
row of sliding cards, with [this inspiration](https://dribbble.com/shots/14441287--Exploration-Food-Website)

## Limitations and Improvements
The "undo" function was an important UX decision based upon the simple fact that people easily make mistakes.
And including a delete button with no way to undo is asking for trouble. However in this case, the delete
button works by adding the deleted Cards to a deleted array Then the undo button will pop off the most 
recent one and disappears, which may not be ideal if there are several cards the user would want to bring
back, or perhaps peruse deleted cards and choose. This function could be extended for a better experience.

While the app loads quickly in its current state, future extensions would likely allow more hot sauces to be 
added (perhaps via modal, sidebar, etc). This experience would be improved if there was filtering, search,
or some easier way to categorize and move through a larger collection of hot sauces. If it got large enough,
the page may not load as quickly, so incorporating Redux would be helpful so the data doesn't have to be
re-fetched every load.

Thanks for checking it out!
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
In your terminal, create a new folder to store the project, navigate inside and enter the following:
```
git clone https://github.com/jomandaman/hot-sauces
npm install
npm start 
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
