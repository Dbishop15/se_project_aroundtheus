# Project 3: Around The U.S.

## Overview

- Intro
- Figma
- Images
- Fonts
- Javascript and array
- Modal Box
- The DOM
- Rendering cards
- Form for adding a card
- Adding a card
- The "Like" button
- Deleting a card
- Opening the picture modal
- Smooth modal opening and closing
- Form Validation
- Closing the Popup by Clicking on the Overlay and Pressing Esc
- Updating the project’s file structure
- Creating the Card and FormValidator classes
- Creating the Section, Popup, PopupWithImage, PopupWithForm and UserInfo classes
- Updating the .gitignore file
- Setting up Webpack bundling and building
- Api and connecting website to the server.

**Intro**

This project called "Around The U.S.". A gallery of various landmarks throughout the United States. The project is made so all the elements are displayed correctly on popular screen sizes. Also creating page design of adding and removing photos button, and like photos of other users.

Working with designs in a graphics editor called Figma. Most of the images we need can be exported directly from Figma. Working with a Figma design that provides layouts for mobile (320px) and desktop (1280px).

Create responsive websites using Grid Layout

Use media queries to set parameters for different screen sizes. The webpage will be responsive, i.e., the width of the content area will change depending on the width of the browser window, and there won’t be any horizontal scrolling.

**Figma**

You’ll be working with a Figma design that provides layouts for mobile (320px) and desktop (1280px).

- [Link to the project on Figma](https://www.figma.com/file/ii4xxsJ0ghevUOcssTlHZv/Sprint-3%3A-Around-the-US?node-id=0%3A1)

**Images**

The way the project works is by exporting images directly from Figma and optimizing them [here](https://tinypng.com/), so the project loads faster.

**Font**

All fonts used in this project are from the Inter family, which you can download from their website, https://rsms.me/inter/.

**Images here is an example of finished webpage on dektop and mobile**

<img
  src="/images/screen320px.png"
  alt="finshed webpage on desktop and mobile.png"
  style="display: inline-block; margin: 0 auto; max-width: 150px">
<img
  src="/images/finshed webpage on desktop and mobile.png"
  alt="finshed webpage on desktop and mobile.png"
  style="display: inline-block; margin: 0 auto; max-width: 150px">

**Javascript and array**

Creating a .js file for index.html page. Cretat an array and store it in the variable. Inserting data into HTML using JavaScript. Adding a script file to project and cretating an array with the card data.

**Modal Box**

Creating a modal box with HTML and CSS. Write the markup and styles for the "Edit profile" modal box for both desktop and mobile. It has two fields, titled "Name" and "About me", and buttons to submit and close the form.

**The DOM**

Once the form has been opened, the "Name" and "About me" fields be filled in with the values. Once the user enters new information and clicks on the "Save" button, the page has to update to reflect the changes made, with the modal closing simultaneously. Also making the cards render from the array.

Implementing the opening and closing of the modal box by adding addEventListener() functions to the project.
Adding the line with (evt.preventDefault()) in the submission handler tp prevent the default browser behavior.
Rendering <template> elements with JavaScript.
Adding Elements to the DOM.

**Rendering cards**

Rewriting the logic to iterate through the array of cards using a for loop by using the appropriate array method like forEach.

**Form for adding a card**

Adding a form for adding a new card to the project that can be opened once the user clicks on the "+" button, and be closed when the user clicks on the "Close" button.

**Adding a card**

The user can write a custom name for the card and add a link to a picture. Once the user clicks on the "Save" button, the new card must appear at the card container's beginning, with the form modal closing simultaneously. Connect the handler to the form to watch the submit event.

**The "Like" button**

If the user clicks on the "Like" button, the heart changes its color.

**Deleting a card**

Adding a delete icon to the cards. Then, the buttons work by writing the needed code.

**Opening the picture modal**

Once a user clicks on a picture, the modal box with that picture opens. When they click "Close," it closes.

**Smooth modal opening and closing**

Making the modal box look smooth when opening and closing. When being opened, all the modal boxes smoothly appear out from transparency, and when being closed, they smoothly become completely transparent again.

**Form Validation**

Validating the "Edit Profile" Form and the "New Place" Form

If a field of the "Edit profile" form doesn't pass the validation, a red error message should be displayed underneath it.

If any field doesn't pass validation, the "Save" button should be inactive. If both fields pass validation, then they should be active. Use the colors from the design for the inactive buttons.

**Closing the Popup by Clicking on the Overlay and Pressing Esc**

Code a feature that allows the users to close the popup by clicking on the overlay, i.e. anywhere outside the popup's borders. And all so closing the popup by Pressing on Esc.

**Updating the project’s file structure**

se_project_aroundtheus/
components/
Card.js
FormValidator.js
pages/
index.js
index.css
utils/
utils.js
...everything else

**Creating the Card and FormValidator classes**

Create the Card class, which creates a card with text and an image link, as per the requirements
Create the FormValidator class, which sets settings for validating form fields according to the requirements.

**Creating the Section, Popup, PopupWithImage, PopupWithForm and UserInfo classes**

Add the Section, Popup, PopupWithForm, PopupWithImages, and UserInfo classes to your project. Each class should perform one specific task. All logic related to a specific task must be encapsulated in its respective class.

**Updating the .gitignore file**

we don't want Git to track some files after initialiing NPM and setting up Webpack, so we update .gitignore file to contain the following contents:
.DS_Store
node_modules/
dist/

**Setting up Webpack bundling and building**

Installing packages with npm install and making sure to install the specific versions indicated in the project by use the dependencies listed in the package.json file that provided.

**Api and connecting website to the server**
Connecting "Around the U.S." website project to the server.

### GitHub Pages link

[Link to Live Website] https://dbishop15.github.io/se_project_aroundtheus/
