# Helping Hand
[HelpingHand](https://helpinghand-app.herokuapp.com) Live Demo - Coming Soon!

HelpingHand is full-stacked web application for bringing volunteers and philanthropists together to support their communities with their resources. It allows users to plan events to solve problems they see in their community (e.g. the Boardwalk at Coney Island could use some help cleaning up prior to the beach opening). It allows sponsors to fund these events to entice individuals to come volunteer and also ensures that the event is successful. The volunteers do not earn the money for themselves, but they are able earn a credit to donate to a cause of their choice. For both volunteer and sponsor, a single action, whether it is volunteering or sponsoring, will leads to multiple benefits. A volunteer can help their community and donate to a charity that may only accept monetary aid. A Sponsor can ensures that the community event that need human resources can be successful as well as see all of the charities where their contributions ultimately end up. The app it built on the React.JS library with React Router, Leaflet, Redux architectural framework and styled with React Bootstrap.


## Contents

- [Getting Started](#getting-started)
- [Structure](#structure)
- [Containers and Components](#containers-and-components)
  - [Homepage](#homepage)
  - [Users](#user)
  - [Volunteer's Events](#volunteers-events)
  - [Sponsor's Donations](#sponsors-donations)
  - [Signup & Login](#signup&login)
- [Future Development](#future-development)

## Getting Started
To install all of the apps dependencies, use: `npm install`. The API github repo can be found at https://github.com/Tonyjlum/mod5api. The default API link is to a live database on Heroku, but can be changed in ENDPOINT variable in src/const.js .

In the project directory, you can run: `npm start`.
Open [http://${window.location.hostname}:3000](http://${window.location.hostname}:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

## Structure
The top-level folder includes the public folder, which contains the index.html wher ethe app is officially rendered by React, an src folder which holds the most of the react components, App.js, const.js, index.js and a few other files.
- app.js handles the routes and which component will render at those routes.
- const.js handles the constant variables that are reused throughout the app.
- index.js contains the Redux reducers and

## Containers and Components
The app has a few major sections (primary components and containers are listed):
#### Homepage
The **homepage** details the purpose of the app as well as allow visitors to login with a guest account for both volunteer and sponsor.
- homepage.js and homepagebottom.js

![homepageimg](./assets/images/homepageimg.png)

#### User
The **user** page is the primary interaction that volunteers and sponsors will be using. It contains the the leaflet map, creating a new event, sponsoring events, and view all upcoming events. This container will function dynamically based on which type of account is signed in.
- donationmodal.js, event.js, map.js, newevent.js, event_container.js, and user_container.js

![homepageimg](./assets/images/userimg.png)

![homepageimg](./assets/images/sponsorimg.png)

#### Volunteer's Events
The **events** page for volunteers show all of their events as well as handle the confirmations of their past events where they were the coordinator.
  - confirmvolunteers.js and  myeventcontainer.js

![homepageimg](./assets/images/events.png)

![homepageimg](./assets/images/confirmvolunteer02.png)

#### Sponsor's Donations
The **donations** page for sponsors show all of their contributions to the events they are supporting.
  - donationscontainer.js

![homepageimg](./assets/images/contributions.png)

#### Signup & Login
The **login** and **new account** pages allows users to login to their account or create a new account. The login page has a account type selector through radio buttons.
 - loginform.js and newaccountform.js

![homepageimg](./assets/images/loginimg.png)

![homepageimg](./assets/images/newaccountimg.png)


## Future Development
