# Project-II: Task Listing Calendar/Task App

Note: All output related files are under "src/app" folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Problem Statement
What needs to be implemented?

Task Service
a. Create a service which will display and add the task list.
b. The service should return and accept the following properties:
Title
Description
Completion Date

Task List
a. Consume the service and display all the task lists using structural directives
b. If there is no description field available, it should display “N/A”
c. Show task list table only if the array length is > 0 or else show “Hurray! No
task Available”

Add Task
a. Consume the service for adding the task from the input fields
b. Title and Completion date are mandatory fields
c. Show proper error messages and CSS styles for the required fields
d. The date should show the current date if not selected in the date
input field
e. The submit button should be disabled until and unless all the
validation is proper

Custom Directive
a. Create a custom directive for mouse over.
b. OnMouseOver the list of movies it should change the background
depending on the date of the task.
c. If the date is current date then show the background color as green, if
the date is not current date or previous date should show different
background red color and if the date is greater than the current date
it should show yellow color.

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
