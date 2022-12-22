# NFL Stat Tracker Package.

This package can fetch any NFL related statistic.




## Installation

Install nfl-stats with npm

```bash
npm install nfl-stats
```
    
## Usage/Examples


### Get Weekly Games
```javascript
const nfl = require("nfl-stats");

let weeklyGames = await nfl.getWeeklyGames();
```

Output

```javascript
[{
    id: (STRING , game id),
    date: (STRING , game date & time),
    team1: (STRING, team #1 name),
    team2: (STRING, team #2 name),
    
}, 
{etc..}, 
{etc..}]
```


### Get Game Score
```javascript
const nfl = require("nfl-stats");

let score = await nfl.getGameScore(${gameID});
```

Output

```javascript
[{
    team: (STRING , team name),
    date: (STRING , score),
},
{
    team: (STRING , team name),
    date: (STRING , score),
}]
```


### Get Team Logo
```javascript
const nfl = require("nfl-stats");

let logoUrl = await nfl.getTeamLogo(${teamID});
```

Output

```javascript
{
    team: (STRING , team name),
    logo-url: (STRING , URL to team logo),
}
```

### Get Current Week
```javascript
const nfl = require("nfl-stats");

let week = await nfl.getCurrentWeek();
```

Output

```javascript
{
    team: (STRING , week number),
}
```

### Get Player ID From Name
```javascript
const nfl = require("nfl-stats");

 let id = await nfl.getAthleteId("George Kittle");
```

Output

```javascript
{
    id: (STRING , player id),
}
```

### Get Player Photo URL
```javascript
const nfl = require("nfl-stats");
let photoUrl = await nfl.getAthleteHeadshotImage(${PlayerID});
```

Output

```javascript
{
    headshotURL: (STRING , headshot URL),
}
```

## Usuful IDs
<details>
  <summary>Team IDs</summary>
  
| Team Name             	| Team ID 	|
|-----------------------	|---------	|
| Atlanta Falcons       	| 1       	|
| Buffalo Bills         	| 2       	|
| Chicago Bears         	| 3       	|
| Cincinnati Bengals    	| 4       	|
| Cleveland Browns      	| 5       	|
| Dallas Cowboys        	| 6       	|
| Denver Broncos        	| 7       	|
| Detroit Lions         	| 8       	|
| Green Bay Packers     	| 9       	|
| Tennessee Titans      	| 10      	|
| Indianapolis Colts    	| 11      	|
| Kansas City Chiefs    	| 12      	|
| Las Vegas Raiders     	| 13      	|
| Los Angeles Rams      	| 14      	|
| Miami Dolphins        	| 15      	|
| Minnesota Vikings     	| 16      	|
| New England Patriots  	| 17      	|
| New Orleans Saints    	| 18      	|
| New York Giants       	| 19      	|
| New York Jets         	| 20      	|
| Philadelphia Eagles   	| 21      	|
| Arizona Cardinals     	| 22      	|
| Pittsburgh Steelers   	| 23      	|
| Los Angeles Chargers  	| 24      	|
| San Francisco 49ers   	| 25      	|
| Seattle Seahawks      	| 26      	|
| Tampa Bay Buccaneers  	| 27      	|
| Washington Commanders 	| 28      	|
| Carolina Panthers     	| 29      	|
| Jacksonville Jaguars  	| 30      	|
| Baltimore Ravens      	| 33      	|
| Houston Texans        	| 34      	|

 
</details>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Authors

- Andrew Abercrombie [@AndrewAbercrombie](https://www.github.com/AndrewAbercrombie)

