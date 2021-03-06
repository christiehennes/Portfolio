//Variables 
//array of portfolio items 
let portfolioItem = [];

//Create an object for a portfolio item 

//Function to initalize all the portfolio objects and add them to an array 
function addPortfolioItem(name, type, ghCode, ghProject){
    console.log("here");

    let item = {
        Name: name,
        Type: type,
        GitHubProject: ghProject,
        GitHubCode: ghCode
    }

    portfolioItem.push(item);
}

//Function to display the portfolio items 
function displayPortfolio(){

    portfolioItem.forEach(function(item){

        // <img class="portfolio-item-image" src="./images/crystalcollector.png">

        console.log("Project: " + item.GitHubProject);

        let portfolioDiv = 
        `<div class="portfolio-item">
            
            <div class="info-wrapper">
                
                    <div class="project-name markazi-font"><h4>${item.Name}</h4></div>
                    <div class="project-type cabin-font"><h6>${item.Type}</h6></div><br>
                    <div class="code-link">
                        <a href = ${item.GitHubCode} class="icon"><i class="fas fa-code"></i></a>
                        <a href = ${item.GitHubProject} class="icon"><i class="fas fa-desktop"></i></a>
                    </div>
            
            </div>
        </div>
        `



        $('#portfolio').append(portfolioDiv);
    });
}


// <div class="icon"><a href =${item.GitHubProject}> <i class="fas fa-desktop"> </i></a></div>

$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


addPortfolioItem("TicketSauce", "Director of Product Development","https://ticketsauce.com/",'https://ticketsauce.com/');
addPortfolioItem("Clicky Game", "react", "https://github.com/christiehennes/Clicky-Game-React", "https://christiehennes.github.io/Clicky-Game-React/");
addPortfolioItem("Rentee", "node.js, express, sequelize", "https://github.com/christiehennes/Project2", "https://github.com/christiehennes/Project2");
addPortfolioItem("Eat Da Burger", "node.js, express, handlebars, mysql", "https://github.com/christiehennes/Eat-Da-Burger", "https://whispering-forest-52131.herokuapp.com/");
addPortfolioItem("Friend Finder", "node.js + Express", "https://github.com/christiehennes/Friend-Finder", "https://friend-finder-ch.herokuapp.com/")
addPortfolioItem("Command Line: Bamazon", "MySQL + node.js","https://github.com/christiehennes/Bamazon",'https://github.com/christiehennes/Bamazon');
addPortfolioItem("Command Line: Spotify+Twitter+ OMDB", "node.js","https://github.com/christiehennes/liri-node-app",'https://github.com/christiehennes/liri-node-app');
addPortfolioItem("Music Venue Search", "Multiple APIs + js", "https://github.com/christiehennes/Project1", 'https://christiehennes.github.io/Project1/');
addPortfolioItem("Command Line Word Guess", "node.js","https://github.com/christiehennes/Constructor-Word-Guess",'https://github.com/christiehennes/Constructor-Word-Guess');
addPortfolioItem("Giphy", "API + js", "https://github.com/christiehennes/GIPHY-Project", 'https://christiehennes.github.io/GIPHY-Project/');
addPortfolioItem("Train Scheduler", "js + firebase", "https://github.com/christiehennes/Train-Scheduler", 'https://christiehennes.github.io/Train-Scheduler/');
addPortfolioItem("Word Guess", "js", "https://github.com/christiehennes/Word-Guess-Game", 'https://christiehennes.github.io/Word-Guess-Game/');
addPortfolioItem("Crystal Collector", "js", "https://github.com/christiehennes/unit-4-game", 'https://christiehennes.github.io/unit-4-game/');
addPortfolioItem("NYC Trivia", "js", "https://github.com/christiehennes/TriviaGame", 'https://christiehennes.github.io/TriviaGame/');
displayPortfolio();