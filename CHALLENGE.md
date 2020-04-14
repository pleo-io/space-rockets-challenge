# The Pleo Frontend Challenge

Here at Pleo we love space. For example, we name all our microservices after moons of the solar system. But before you get to the moons, you have to go through rockets. Welcome to our frontend challenge!

We've built a simple web app that displays information about rocket launches from the unofficial SpaceX API V3 at [spacexdata.com](https://docs.spacexdata.com/?version=latest). We want you to make a few changes to the app.

## 1. Fix a bug

Currently, the launch datetime on the launch details page (e.g. `/launches/92`) is displayed in the timezone of the app's user. W would like the displayed time to be in the local timezone of the launch site at the time of the launch.

## 2. Build a feature

We would like you to add a "favorites" feature to the app. The requirements are:

- user can mark - "star" - launches or launch pads as favorites - both from the list and details page for all items
- a list of favorites is available as [a slide-in drawer](https://chakra-ui.com/drawer)
- from the list, the user can navigate to the favorite items
- the user is able to remove items from the list (from within the list and on the details page of an item that is currently in the list)
- the list is persisted after the app is closed (but everything is stored locally)

Here is a quick draft of the feature:
![](feature.png)

Guidelines for this task are:

- treat this as if you implemented a new feature in an app in production
- this app is not finished, there will be more pages added in the future - consider that when building your solution
- most components should be available in Chakra UI; when in doubt about the design, make a decision yourself

## 3. Impress us

This last task is a chance for you to impress us. What you do is really up to you - show us your best skills, be creative and try not to spend more than a few hours.
You can add a new feature (e.g. filtering of lists), or a whole new section to the app (explore the API, there is a ton we haven't used yet), improve the tooling or app's architecture, add beautiful animations etc.
Treat this one as a little hackathon - no need for tests and covering all edge cases - but the code quality still matters.
