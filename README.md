
# Black Ignite Speaker Sign-up
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.



## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `Black_Ignite` and insert the code from the `database.sql` table.





## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

## Sign Up Form View
![Screenshot](public/userPage.png)
![Screenshot](public/signupForm.png)

    After either clicking the + arrow, or alternatively clicking a talk on the 
    main page and selecting "Sign up to speak" it will bring you to the Sign Up Form, 
    here you can enter in your information, and upload your video to the Amazon S3 server. 
    Upon clicking the submit button, that data will be posted to the database, and 
    viewed from the Juror page.

## Juror Page
![Screenshot](public/submissions.png)

     On this page, a Juror account created by the Manage Juror page, can view the submitted 
     applications, watch the supplied video, and vote on submissions they like, using 
     the number of votes given to them at the creation of the account. They can see 
     all information supplied by the user, and how many votes the submission has 
     received by all the Jurors. Admins can also see a "Submitted Form" button, which 
     will help with record keeping if an admin has reached out to a applicant yet.
     
## Ranking Page
![Screenshot](public/ranking.png)

     On the Ranking page, an Admin can see all submissions ordered by descending number 
     of votes, or all submissions of a specific topic ordered by descending votes. It also 
     shows all information the applicant submitted, and a link to download 
     the video hosted on Amazon S3 servers.

## Edit Talks
![Screenshot](public/createNewCategory.png)


     Here an Admin can edit all submitted talks, by replacing the Title,
     Front image, description image, or description text.
     The Admin can also delete an existing talk, or add a new one. These 
     deleted talks are "Soft deleted" meaning they 
     can be retrieved by accessing the database if it was done in error.
     
## Manage Juror
![Screenshot](public/manageJuror.png)

     On this page, the Admin can create new Juror accounts, delete
     existing Juror accounts, and view the number of remaining votes 
     each existing Juror has.

## Creating a .env file
![Screenshot](public/env.png)

should include all of the pertinent data from your AWS bucket
     
## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy
8. Heroku config for your AWS Bucket via the Heroku cli 

## Custom domain name setup
I recommend using this walk through if you want to point it at a specific domain. 
https://devcenter.heroku.com/articles/custom-domains
