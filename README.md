# React Interview

## What is this?
This is an interview exercise that tests React and Redux knowledge.

## What's the goal?
The goal of this exercise is to create a comment box that can display comments and where users can post comments.

See the image here:

![The goal](http://g.recordit.co/47S3WqvA41.gif)

## Where to start
First things first, familiarize yourself with the project structure, maybe look at the npm packages, etc. CommentBox is the main component. Right now it loads comments and passes them to the CommentList component.

1. CommentList needs to show the comments that are already there. Make a Comment component and show it for each comment.
2. We need a way to submit new comments. Create a CommentForm component that will let a user post in new comments. Don't do anything with the data for now.
3. Handle the form data. Using Redux, make the form emit an action with the data, then create a reducer that will add the comment to the list.
