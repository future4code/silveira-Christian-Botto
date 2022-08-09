<h1 align="center">
     Food Delivery Site
</h1>

Food Delivery Site (mobile first).


---

##  🔠Contents

<!--ts-->
   * [About](#about)
   * [Made By](#made-by)
   * [Link for the deployed website](#link-for-the-deployed-website)
   * [Status](#status)
   * [Technologies](#Technologies)
   * [Objetive](#objetive)
   * [Functionalities](#functionalities)
   * [Project Wireframe](#project-wireframe)
   * [Run this project](#run-this-project)
   * [License](#license)
<!--te-->


---

##  🕵About

This project is an elaborate Food Delivery site (mobile first). It has many real-life functionalities, like signup/login, authentication and authorization, filters, and search, etc. It uses an educational [**API**](https://documenter.getpostman.com/view/7549981/SWTEdGtT) (in portuguese). 

---

##  👨Made by

-  [**Christian Penna Botto**](https://github.com/chriss3008) 

---
## 🔗Link for the deployed website

- **Surge:** [Food Delivery - This is a mobile first project](https://tmdb-project-christian-penna-botto.surge.sh/) 

---

## 🔭Technologies 

<!--ts-->
   * Made using React
   * Pages using Router
   * Requests using Axios
   * Styling using Material and Styled-Components
   * Hooks and Custom Hooks
<!--te-->


---
##  🧭Status 

 - ⌛ Under Construction
 
---

##  🎯Objetive

This is a mobile-first Front-end project using an educational API to create a Food Delivery site using the technologies described in [Technologies](#Technologies).

---

##  🔨Functionalities

#Sign up Page
   * You can go to the Log in Page from here if you are already registered;
   * A custom hook form is used here;
   * You can hide and unhide the password clicking on the "eye button";
   * Using Material's built-in regex, passwords are tested to be at least 6 characters long;
   * "'CPF" is an 11 number Brazilian ID. You can register using any random 11 numbers, it doesn't check to see if this ID truly exists.
   * After a successful sign up, you are redirected to the Edit ADdress Page;

#Edit Address Page
   * A custom hook form is used here;
   * This page uses a "put" request. It means that it can be used to edit the info after the first time they were registered;
   * After succsessfully editing your info, you are redirected to the Home Page;

#Home Page
   * With the use of a custom hook called useProtectedPage, the user is redirected to the Login Page if the authorizantion token is not found in the local storage;
   * At first, all restaurants are rendered in the page;
   * You can use the input box to search for a restaurant by name and the list of restaurants displayed will be updating live as you type down;
   * Below the input box, there is scrollable cuisine box, where you can search restaurants by their respective cuisine (they are in portuguese). The selected cuisine will change its color to red;
   * Both filters work together, so you can search restaurants by cuisine and also by name;
   * When you click on a restaurant card, you'll be taken to the Restaurant Details Card;

 #Restaurant Details Page
   * A list of all of the products avaoilable at that restaurant will be rendered, sorted by type of food (Pizza, Appetizer, Beverage, etc - names in Portuguese).  
   * Each product card has some info about it, including its price and how long it'll tae to get it to you (those are fixed values). There is also a button to add it to the cart. 

 #Log in Page
   * You can go to the Sign up Page from here if you are not registered yet;
   * A custom hook form is used here;
   * You can hide and unhide the password clicking on the "eye button";
   * Using Material's built-in regex, passwords are tested to be at least 6 characters long;
   * After a successfull login, you are redirected to the Homepage;




---

## 💡Project Wireframe/Fluxogram

![Fluxogram](/)

---


## 🛰Run this project



To run this project, you should:

- Clone this repo;
- Run npm i;
- Run npm start;
- You will need to to create an account on the Signup Page (or simply use test@test.com pw: 123456);
- You'll also need to register your address info after the signup. You can skip that part if you use the test account provided above.
- That's it :)


---

## 📝License

This project is under the [MIT](./LICENSE) license.
