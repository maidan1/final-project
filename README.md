# React Web Application - User Guide

Welcome to our React Web Application! This guide will help you navigate through the various features and functionalities available on our platform.

## This The Admin User

- [email:admin@gmail.com]
- [password:Maidan!123]

## Table of Contents

1. [Getting Started](#getting-started)

   - [Registration](#registration)
   - [Email Verification](#email-verification)
   - [Login](#login)

2. [Shopping](#shopping)

   - [Product Listing](#product-listing)
   - [Favorites and Cart](#favorites-and-cart)
   - [Checkout](#checkout)

3. [User Profile](#edit-profile)

   - [Edit personal details such as name, email, and other relevant information](#edit-profile)
   - [Change Profile Picture](#change-profile-picture)

4. [Search and Navigation](#search-and-navigation)

   - [Product Search](#product-search)
   - [Site Navigation](#site-navigation)

5. [Seller Features](#seller-features)

   - [Become a Seller](#become-a-seller)
   - [Create/Edit/Delete Products](#create-edit-delete-products)

6. [Admin Features](#admin-features)

   - [Admin Privileges](#admin-privileges)
   - [User Management](#user-management)
   - [Sandbox Access](#sandbox-access)

7. [Help and Information](#help-and-information)
   - [FAQs](#faqs)
   - [About Us](#about-us)
   - [Privacy Policy](#privacy-policy)

## Getting Started

### Registration

1. Visit our website and click on the "Register" button.
2. Fill in your details and submit the registration form.
3. Check your email for a verification code.

### Email Verification

1. Enter the verification code received in your email.
2. Congratulations! You are now a registered user.

### Login

1. Log in using your email and password.
2. Gain access to personalized features.

## Shopping

### Product Listing

- Explore our product listings on the homepage.
- Use filters to find specific products.

### Favorites and Cart

- Save your favorite products.
- Add items to your shopping cart.

### Checkout

1. Proceed to checkout and enter delivery details.
2. Provide credit card information.
3. Confirm your order.

### Edit Profile

1. Access your user profile.
2. Edit personal details such as name, email, and other relevant information.
3. Save the changes to update your profile.
4. new profile picture.

## Search and Navigation

### Product Search

- Utilize the search mechanism to find specific products.

### Site Navigation

- Navigate through various pages on the site.

## Seller Features

### Become a Seller

- use the Contact us paeg to express your interest in becoming a seller.
- Upon approval, gain access to seller features.

### Create/Edit/Delete Products

- Create new product listings.
- Edit and manage your product catalog.

## Admin Features

### Admin Privileges

- Admins can perform all functions available to sellers.
- Access additional administrative features.

### User Management

- Admins can edit, delete, or promote users.
- Manage user roles.

### Sandbox Access

- Enter the sandbox environment for testing purposes.

## Help and Information

### FAQs

- Find answers to common questions.

### About Us

- Learn more about our platform and mission.

### Privacy Policy

- Review our privacy policy.

## Additional Components: CardComponent

### Introduction

Our React Web Application offers a versatile CardComponent for displaying product cards. This component not only showcases product details but also allows users to interact with the cards through actions like adding to the cart, liking, and managing favorites.

### Key Features

- **Interactive Design:**

  - Click on the product image or title to view detailed card information.
  - Like a card to express interest or add it to your favorites.
  - Effortlessly add products to your shopping cart.

- **Admin and Business User Actions:**

  - Admin users can delete any card using the delete button.
  - Business users can edit and delete cards on the "My Cards" page.

- **Like Functionality:**

  - Users can like and unlike cards, with the like status persisting across sessions.
  - The like status is stored locally for an uninterrupted experience.

- **Cart Interaction:**

  - Add products to the cart with a single click.
  - Users can increase the quantity of items in the cart.

- **Editing and Deleting:**
  - Admin users can edit and delete any card for comprehensive control.
  - Business users can edit and delete their own cards.

### Usage

The CardComponent can be easily integrated into different parts of the application where product cards need to be displayed. Below is an example of how to use it:

````jsx
import CardComponent from './path/to/CardComponent';

  return (
    <CardComponent
      _id="unique-id"
      title="Product Title"
      brand="Product Brand"
      price="$100.00"
      shipping="Free Shipping"
      imgs={{ url: "image-url.jpg", alt: "Product Image" }}
      like={false}
      cardNumber={12345}
      onDeleteCard={handleDeleteCard}
      onEditCard={handleEditCard}
    />
  );
};

# Additional Components: CardComponent

## PropTypes

The `CardComponent` comes with specific PropTypes to ensure the correct usage of the component. Below is a breakdown of each prop:

- `_id`: (String) Unique identifier for the card.
- `title`: (String) Title of the product.
- `brand`: (String) Brand of the product.
- `price`: (String) Price of the product.
- `shipping`: (String) Shipping information for the product.
- `imgs`: (Object) Object with `url` and `alt` properties for the product image.
  - `url`: (String) URL of the product image.
  - `alt`: (String) Alternative text for the product image.
- `like`: (Boolean) Indicates whether the user has liked the product.
- `cardNumber`: (Number) Numeric identifier for the card.
- `onDeleteCard`: (Function) Callback function triggered on delete action.
- `onEditCard`: (Function) Callback function triggered on edit action.

## Customization

Feel free to customize the `CardComponent` to suit the specific needs and styling of your application.

# React Web Application

## Table of Contents

1. [Introduction](#introduction)
2. [Components](#components)
   - [Guards](#guards)
   - [Hooks](#hooks)
   - [Layout](#layout)
3. [Routes](#routes)
4. [Services](#services)
5. [Redux Slices](#redux-slices)
6. [Validation](#validation)

## Introduction

Welcome to our React Web Application! This comprehensive README provides an overview of the major components and features of our application.

## Components

### Guards

1. **`Guard`**: A generic guard for protecting routes.
2. **`AuthGuard`**: Guard to ensure authentication for routes.
3. **`BizGuard`**: Specialized guard for business-related routes.
4. **`BusinessGuard`**: An extension of the `BizGuard`.

### Hooks

1. **`useAutoLogin`**: A custom hook for automating user login.
2. **`useQueryParams`**: Hook for handling query parameters.

### Layout

1. **Header, Min, Footer**: Components responsible for the layout structure.

## Routes

In our application, the routes are defined in a centralized manner for easy navigation and maintenance. The routing constants are kept in `ROUTES.js`.

```React
const ROUTES = {
   HOME: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  EDITCARD: "/editcard",
  CREATECARD: "/CreateCardPage",
  SANDBOX: "/sandboxPage",
  ABOUT: "/About",
  FAVCARD: "/favoriteCardPage",
  MYCARDS: "/MyCardsPage",
  EDITSTATUS: "/EditStatusPage",
  EDITCARDPAGE: "/EditCardPage",
  EDITPROFILE: "/EditProfile",
  CARDDETAILS: "/CardDetailsPage",
  CARTPAGE: "/CartPage",
  CHECKOUTPAGE: "/Chekcoutpage",
  PRIVACYPOLICY: "/PrivacyPolicy",
  FAQ: "/FAQ",
  CONTACTUS: "/ContactUs",
  THANKYOUPAGE: "/ThankYouPage",
  CARDINFORMATIONPAGE: "/CardInformationPage",
  VERIFICATIONPAGE: "/VerificationPage",
  FORGOTPASSWORD: "ForgotPassword",
  EDITSTATUSPAGE: "/EditStatusPage",
  RESETPASSWORD: "/ResetPassword/:userId/:token",
};
export default ROUTES;
````

## Services

sendOrderConfirmationToServer
A service for sending order confirmations to the server.

## storageService

Service for managing storage-related functionalities.

## Redux Slices

authSlice
Redux slice managing authentication-related state.

## Validation

EmailVerification
Validation utility for email verification.

## loginValidation

Validation rules for the login process.

## registerValidation

Validation rules for user registration.

## validation

Generic validation utilities.

Feel free to explore and use these components, hooks, and services to enhance and customize your React application!

#############################################################

# Node.js Server-Side README

## Overview

This Node.js server-side codebase manages users and cards for an online platform. Users can create accounts, log in, verify their email addresses, request new verification codes, reset passwords, and update their details. Additionally, the server handles card-related functionalities such as creation, retrieval, deletion, and user interactions with cards.

## Table of Contents

### User Routes

- [GET /users](#get-users)
- [POST /users](#post-users)
- [POST /users/request-new-code](#post-usersrequest-new-code)
- [POST /users/verify](#post-usersverify)
- [GET /users/:id](#get-usersid)
- [PATCH /users/:id](#patch-usersid)
- [DELETE /users/:id](#delete-usersid)
- [POST /users/login](#post-userslogin)
- [POST /users/forgot-password](#post-usersforgot-password)
- [POST /users/reset-password/:userId/:token](#post-usersreset-passworduseridtoken)
- [POST /users/contact-us](#post-userscontact-us)

### Card Routes

- [POST /cards](#post-cards)
- [GET /cards](#get-cards)
- [GET /cards/my-cards](#get-cardsmy-cards)
- [GET /cards/:id](#get-cardsid)
- [DELETE /cards/:id](#delete-cardsid)
- [PATCH /cards/:id](#patch-cardsid)
- [POST /cards/:id/add-to-cart](#post-cardsidadd-to-cart)
- [POST /cards/order-confirmation](#post-cardsorder-confirmation)

### Server Configuration

- [Middleware](#middleware)
- [Rate Limiting](#rate-limiting)
- [Running the Server](#running-the-server)

## User Routes

### GET /users

- **Description**: Retrieve all users.
- **Authorization**: Requires admin privileges.
- **Response**: Returns an array of user objects.

### POST /users

- **Description**: Create a new user.
- **Authorization**: Requires admin or user privileges.
- **Response**: Returns the created user with a success message.

### POST /users/request-new-code

- **Description**: Request a new verification code.
- **Authorization**: None required.
- **Response**: Returns a success message with the user ID.

### POST /users/verify

- **Description**: Verify a user's account.
- **Authorization**: None required.
- **Response**: Returns a success message with the user ID.

### GET /users/:id

- **Description**: Retrieve user details by ID.
- **Authorization**: Requires admin or user privileges.
- **Response**: Returns the user object.

### PATCH /users/:id

- **Description**: Update user details.
- **Authorization**: Requires admin privileges.
- **Response**: Returns the updated user.

### DELETE /users/:id

- **Description**: Delete a user.
- **Authorization**: Requires admin privileges.
- **Response**: Returns the deleted user.

### POST /users/login

- **Description**: User login.
- **Authorization**: None required.
- **Response**: Returns a JWT token on successful login.

### POST /users/forgot-password

- **Description**: Request a password reset link.
- **Authorization**: None required.
- **Response**: Returns a success message.

### POST /users/reset-password/:userId/:token

- **Description**: Reset user password.
- **Authorization**: None required.
- **Response**: Returns a success message.

### POST /users/contact-us

- **Description**: Submit a contact form.
- **Authorization**: None required.
- **Response**: Returns a success message.

## Card Routes

### POST /cards

- **Description**: Create a new card.
- **Authorization**: Requires admin or business user privileges.
- **Response**: Returns the created card.

### GET /cards

- **Description**: Retrieve all cards.
- **Authorization**: None required.
- **Response**: Returns an array of card objects.

### GET /cards/my-cards

- **Description**: Retrieve cards created by the authenticated user.
- **Authorization**: Requires admin or business user privileges.
- **Response**: Returns an array of card objects.

### GET /cards/:id

- **Description**: Retrieve card details by ID.
- **Authorization**: None required.
- **Response**: Returns the card object.

### DELETE /cards/:id

- **Description**: Delete a card.
- **Authorization**: Requires admin, business, or card owner privileges.
- **Response**: Returns the deleted card.

### PATCH /cards/:id

- **Description**: Update card details.
- **Authorization**: Requires admin, business, or card owner privileges.
- **Response**: Returns the updated card.

### POST /cards/:id/add-to-cart

- **Description**: Add a card to the user's cart.
- **Authorization**: Requires user privileges.
- **Response**: Returns a success message with the updated card.

### POST /cards/order-confirmation

- **Description**: Send order confirmation email.
- **Authorization**: None required.
- **Response**: Returns a success message.

## Server Configuration

### Middleware

- **Logger**: Utilizes a logging system for tracking server activities.
- **Validation**: Employs Joi for request body validation.
- **Authentication**: Validates user tokens for authorized access.
- **File Upload**: Handles file uploads using Multer.

### Rate Limiting

- **Window**: 24 hours.
- **Max Requests**: 5000.
- **Message**: "Too many requests from this IP, please try again later."

### Running the Server

1. Install dependencies: `npm install`.
2. Set environment variables using a `.env` file.
3. Start the server: `npm start`.
4. Access the server at [http://localhost:8080](http://localhost:8080).

Feel free to explore and contribute to the codebase!
