# My Portfolio

Src-branch contains the development files and structure

This project's build used webpack and sass. Postcss was used to auto prefix the css

This project is located [here](https://ellis8555.github.io/CertificatesOnGit/))

---

# images

---

1. If the image category has many images then in that folder either create or add to a .js file that holds all the import and exports for that group of images.
2. './images/hobbies/web-dev/allWebdevImages.js' has example. In that folder an array of image objects was created used for looping through images so they can be injected dynamically
3. If a particular folder has a master .js import/export file export those to the image folder's 'allImages.js' so they can all be imported from a single location

---

# components

---

1. create a .js file named as close as possible to what that component will be displaying
2. import { createRouteContainer } from "/utilities/allUtilities" be sure to get the path correct
3. 'createRouteContainer' creates a div and applies an id. This is the container that will be injected into the #root element
4. in that parent .js file create the shell of the component
5. also create any title as well
6. insert a div with an #id that will contain the content of that component which will be injected as a FRAG (ment)
7. create a variable that is named what the element is and add 'Element' to the end.
8. assign that variable the value of createRouteContainer method
   **example** const aboutMeElement = createRouteContainer(aboutMe, "about-me");
9. export that variable as well
10. import this variable most likely into ./utilities/routes/routeChange.js

\***\*component specific methods\*\***
place any of these methods into a folder that appends '-methods' to that folder's name

---

# navbar

---

to add a link requires two steps

1. add link details in ./src/components/navbar/navbar-list-items.js
2. import the element that's connected to the link and add that element to the switch statement in ./src/utilities/routes/routeChange.js
