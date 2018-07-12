//Variables 
//array of portfolio items 
let portfolioItem = [];

//Create an object for a portfolio item 

//Function to initalize all the portfolio objects and add them to an array 
function addPortfolioItem(name, ghCode, ghProject){
    console.log("here");

    let item = {
        Name: name,
        GitHubCode: ghCode,
        GitHubProject: ghProject
    }

    portfolioItem.push(item);
}

//Function to display the portfolio items 
function displayPortfolio(){

    portfolioItem.forEach(function(item){

        let portfolioDiv = 
        `<div class="portfolio-item">
            <div class="info-wrapper">
                <div class="project-name">${item.Name}</div>
                <div class="code-link">${item.GitHubCode}</div>
                <div class="project-link">${item.GitHubLink}</div>
            </div>
        </div>
        `

        $('#portfolio').append(portfolioDiv);
    });
}



addPortfolioItem("Project 1", "link", "link");
addPortfolioItem("Project 2", "link", "link");
addPortfolioItem("Project 3", "link", "link");
addPortfolioItem("Project 4", "link", "link");
addPortfolioItem("Project 5", "link", "link");
displayPortfolio();