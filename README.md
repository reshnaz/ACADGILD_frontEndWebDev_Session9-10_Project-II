# Project-I: IMDB App/Movie App

Note: All output related files are under "src/app" folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Problem Statement
What needs to be implemented?

Movie Service
Create a service which will display and add the movie list. The service should return and accept the
following properties:
a. Images URL
b. Name
c. Description
d. Rating
e. Release date

Movies List
a. Consume the service and display all the movie lists using structural directives
b. If there is no movie description or other fields available, it should display “N/A”
c. Show movie list table only if the array length is > 0

Add Movie
a. Consume the service for adding the movie from the input fields
Name, Rating, and Release dates are mandatory fields.
b. Show proper error message and a CSS style for the required fields
c. The submit button should be disabled until and unless all the validation is proper

Custom Directive
a. Create a custom directive for mouse over.
b. OnMouseOver, the background for each of the movies listed on the list should change depending on
their ratings.
c. Ratings from 1 – 2, 3 – 4, and 5 should show different background colors.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
