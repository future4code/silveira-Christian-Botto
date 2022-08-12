<h1 align="center">
     Food Delivery Site (mobile only)
</h1>

Food Delivery Site (mobile only). Please, try it on your phone or using developer mode - mobile.


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

This project is an elaborate Food Delivery site (mobile only). It has many real-life functionalities, like signup/login, authentication and authorization, filters, and search, etc. It uses an educational [**API**](https://documenter.getpostman.com/view/7549981/SWTEdGtT) (in portuguese). 

---

##  👨Made by

-  [**Christian Penna Botto**](https://github.com/chriss3008) 

---
## 🔗Link for the deployed website

- **Surge:** [Food Delivery - This is a mobile only project](https://food-delivery-christian-penna-botto.surge.sh/) 

---

## 🔭Technologies 

<!--ts-->
   * Made using React
   * Pages using Router
   * Requests using Axios
   * Styling using Material and Styled-Components
   * Hooks and Custom Hooks
   * Global State using Redux
<!--te-->


---
##  🧭Status 

 - ⌛ Done
 
---

##  🎯Objetive

This is a mobile-only Front-end project using an educational API to create a Food Delivery site using the technologies described in [Technologies](#Technologies).

---

##  🔨Functionalities

#Navigation
   * You can navigate using the footer menu. The icon glows red depending on which page you are;
   * YThere is also a header that lets you go back to the previous page in some of the pages.

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
   * When you place an order (more on that later), and active pop up will be shown on the homepage saying the restaurant name, the total and delivery time. This pop up will disappear once the delivery time has passed by in real time (i.e. if when placing an order you were told it'd take 40min, the pop up will last for 40min after the order is placed).

 #Restaurant Details Page
   * A list of all of the products avaoilable at that restaurant will be rendered, sorted by type of food (Pizza, Appetizer, Beverage, etc - names in Portuguese). ;
   * Each product card has some info about it, including its price and how long it'll tae to get it to you (those are fixed values). There is also a button to add it to the cart;
   * Clicking on the "add to cart button", a modal shows up and it lets you choose how many of that item you want to add to the cart button; The modal closes automatically after you choose a quantity and press "add to cart". 
   * After adding a product to cart, the "add to cart" button changes to "remove" and changes the card to show the quantity chosen at the top right.  
   * You can only order from one restaurant at a time (more on that later). So you can ad how many products of the same restaurant as you want, but if you go to another restaurant page and add a product from that new restaurant, your cart (saved in a Redux Global State) will be reset and that new item will be added. In other words, your cart can have as many products as you want, but all must have the same restaurant ID.

   #Cart Page
   * The cart page changes dynamically as you fill your cart. It shows the restaurant name, address and delivery time to your home (this info is fixed for every restaurant). It also renders a list of each product with its quantity, ans also calculates the total, including the delivery fee. It also shows your address (this info is always present).
   * You can remove products from the cart;
   * You can select one of two payment methods (cash or credit card). If you don't, you'll get an error message;
   * The API calculates the shipping time in real time. That means that once you have placed an order, you can't place another one until the shipping time has passaed (For example: If you placed an order in a restaurant with a 30 min shipping time, you have to wait 30 minutes after you place an order to place another one).;

 #Log in Page
   * You can go to the Sign up Page from here if you are not registered yet;
   * A custom hook form is used here;
   * You can hide and unhide the password clicking on the "eye button";
   * Using Material's built-in regex, passwords are tested to be at least 6 characters long;
   * After a successfull login, you are redirected to the Homepage.

 #Profile Page
   * You can see and edit your personal info and your address info;
   * You can also see the history of past orders, including any ongoing one. The date format is 'DD/MM/YYYY';
   * Finally, you can log out from your account here. You'll be redirected to the Log in Page.

 #Edit Profile Page
   * The current info you have saved is displayed as placeholders;
   * You can freely edit your personal info here;

 #Edit Address Page
   * The current info you have saved is displayed as placeholders;
   * You can freely edit your address info here;



---

## 💡Project Wireframe/Fluxogram

This is a pretty big project, so I decided not to publish any pictures, otherwise it would pollute this ReadMe.

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
