
# NFL Stat Tracker Package.

This package can fetch any NFL related statistic.




## Installation

Install nfl-stats with npm

```bash
  npm install nfl-stats
```
    
## Usage/Examples


## Get Weekly Games
```javascript
const nfl = require("nfl-stats");

async function main() {
  let weeklyGames = await nfl.getWeeklyGames();
  console.log(weeklyGames);
}


main()

```

Output

```javascript
[{
    id: (STRING , game id),
    text: (STRING , game date & time),
    team1: (STRING, team #1 name),
    team2: (STRING, team #2 name),
    
}, 
{etc..}, 
{etc..}]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Authors

- Andrew Abercrombie [@AndrewAbercrombie](https://www.github.com/AndrewAbercrombie)

