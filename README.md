# Platformer

## An intro to video game programming featuring Halle in a configurable platformer

### Setup

1. Fork this repository on GitHub by clicking the **Fork** button at the top right of this repository webpage.
2. Clone the project into a Cloud9 workspace.
3. From the `bash` terminal in the console view, cut and paste the following command:
    
        git remote add upstream git@github.com:OperationSpark/platformer.git
    
    This will allow you to pull changes added to the origin / master - the original Operation Spark Platformer repository.
4. Open the `index.html` file and press the green **Run** button at the top of your Cloud9 workspace. This will start a web server hosting your game, and a new pane will open up on the console view at the bottom of your Cloud9 workspace. Click on the link that appears in the console view, then select open. This will open a new brower tab running your game.

### Objective

The idear is to design one level of a platformer game. You will create the platforms, add cannons, and collectables that Halle must collect.

It's up to you to design a level that is challenging but doable. Consider <a href="http://phaser.io/examples/v2/category/tweens" target="_blank">tweening</a> platforms, cannons, and collectables.

### Where to Code?

Open up 3 files:

1. `js/init/platform.js`: Follow the instructions in outlined in the file to design all required platforms for the game level.
2. `js/init/cannon.js`: Follow the instructions in outlined in the file to design all required cannons for the game level.
3. `js/init/collectable.js`: Follow the instructions in outlined in the file to design all required collectables for the game level.

You see instructions on **where to write your code** - keep your code in between the areas **ALL YOUR CODE GOES BELOW HERE** and **ALL YOUR CODE GOES ABOVE HERE**. This will help you make less errors. For example:

```
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        collectable.create(type.steve, 200, 170, 6, 0.7);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
```

Code a little, **save your work** (Command / Ctrl + s), switch back to the tab running your game and **refresh the page** (Command / Ctrl + r) to see your work!

Have fun!

###

Pushing your work back to GitHub

After you've designed your level, run (cut and paste) the three following commands:

1. Add all your changes to a changeset:
    
        git add -A
    
2. Commit your changeset:
    
        git commit -m"create awesome platformer game"
    
3. Push your changeset to your GitHub forked repository:
    
        git push
    

Great work! Pat yourselve on the back and show off your game!

Remember that when you comeback to Cloud9, the webserver might have stopped, so to restart it, you must open the `index.html` file and press the green **Run** button. (See step 4 in the Setup section, above).