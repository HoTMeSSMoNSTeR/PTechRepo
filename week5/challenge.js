class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    describe() {
        return `${this.name} plays ${this.position}`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }


    addPlayer(player) {
        if (player instanceof Player) {
            this.player.push(players)
        } else {
            throw new Error(`You can only add an instance of a player. Argument is not a player: ${player}`);
        }
    }


    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }



    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create team
        2) view team
        3) delete team
        4) display all teams
`);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            ---------------------------------
            ${teamInfo}
        `);
    }


    displayTeams() {
        letTeamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].names + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter name for new team: ');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team that you wish to view');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team name: ' + this.selectedTeam.name + '\n'

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name + ' - '
                    + this.selectedTeam.players[i].position + '\n'
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt('Enter the index of the team that you want to delete: ');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1)
        }
    }

    createPlayer() {
        let name = prompt('Enter the name for the new player: ');
        let position = prompt('Enter the position for new player: ');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the indeex of the player that you wan to delete: ')
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.length.splice(index, 1);
        }
    }
}





let menu = new Menu();
menu.start();