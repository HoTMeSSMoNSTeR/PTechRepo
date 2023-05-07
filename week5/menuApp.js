
const movieList = []
// I started by initializing the array that I wanted to use throughout the menu options so it would be accessible from anywhere



// next I created the first class, Movie, which will be used as a blueprint to make objects containing the title of a movie, the genre, 
// and the year that it came out, and then return a string stating these facts about each object that is created using the code. This 
// particular class constructor takes in the arguments of the title, genre and year of release, which are gathered in one of the menu options. 
class Movie {
    constructor(title, genre, year) {
        this.title = title;
        this.genre = genre;
        this.year = year;
    }
    description() {
        return (`${this.title} - ${this.genre} movie released in ${this.year}`);
    }
}



// I next built a class to hold the menu and all of the methods related to the menu. It doesn't take in any arguments. 
//  the show menu selection method shows (on the menu) what options we have and the number we enter to choose them.
// I built a switch statement to loop throug, or switch between the different options being offered in the menu. Each of these options
// calls one of the methods below to tell my application to do whatever it is that method is written to do.
class Menu {
    constructor() {
    }

    start() {
        let selection = this.showMenuSelection()
        // this is going to take whatever number opton is picked in the showMenuOption() method and make it equal to the selection variable,
        // this is the number that will be run through the switch statement to determine where the menu app goes next, whether we create a new
        // list item, view the list that we have or delete one of the items on our list.  
        while (selection !== 0) {
            switch (selection) {
                case '1':
                    this.createListItem();
                    break;
                case '2':
                    this.viewList();
                    break;
                case '3':
                    this.deleteListItem();
                    break;
                default:
                    alert('the cake is a LIE!')
            }
            selection = this.showMenuSelection()
        }
    }


    //  the showMenuSelection does just that, it shows the options that one has to choose from, it takes whatever it written into the prompt
    // and passes it to the switch statement above. 
    showMenuSelection() {
        return prompt(`
            0) exit application
            1) create list item
            2) view my list
            3) delete list item 
        `);
    }


    // the createListMethod, starts out initializing the variable that will be used to store the data that this method takes in
    //  using prompts, takes in the data for the object that is being created, or the movie that goes on the list. 
    // it then is stored in the newListItem as a new instance of Movie, with the data being passed into the class and returned 
    // as the descrition set to return in the Movie class.
    createListItem() {
        let newListItem = ''
        let title = prompt('Tell me the title of the movie you want to add!');
        let genre = prompt('Tell me the genre of the movie you are adding...');
        let year = prompt('Lastly, tell me the year this movie came out...');
        newListItem = new Movie(title, genre, year).description();
        movieList.push(newListItem);
    }
    // viewLies uses a for loop to iterate and print each of the items "on the list" or in the arry that was initialized at the very beginning 
    // of the code. It them uses an alert window to show the whole list, and give each list item a number in case it needs to be used
    // to delete any items off the list using the next method. 
    viewList() {
        let viewMovieList = '';
        for (let i = 0; i < movieList.length; i++) {
            viewMovieList += i + ') ' + movieList[i] + '\n';
        }
        alert(viewMovieList);
    }


    //  the deleteListItem takes the index number of the item on the list that we are trying to delete. Which you can find by
    // viewing the list. Then store that data in the index variable, and as long as it fits within the restrictions set, then we 
    //  simply use the .splice() method on out array and pass in whatever index was chosen, and that one element should be removed at that index.
    deleteListItem() {
        let index = prompt('What is the index number of the movie that you want to remove from your list?...');
        if (index > -1 && index < movieList.length) {
            movieList.splice(index, 1)
        }
    }
}



// these two lines are what start the code running. By initiating a new isntance of Menu and then calling the start() method, it 
// starts/calls the whole thing to start working 
let menu = new Menu();
menu.start()

