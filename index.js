const axios = require("axios");

exports.getWeeklyGames = async function() {
  let response = await axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard');
  let games = response.data.events;

  let retVal = []

  for (i = 0; i < games.length; i++) {
    retVal.push({
      'id': games[i].id,
      'date': games[i].date,
      'team1': games[i].competitions[0].competitors[0].team.displayName,
      'team2': games[i].competitions[0].competitors[1].team.displayName
    });
  }
  return retVal
}



exports.getGameScore = async function(gameId) {
  let response = await axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard');
  let games = response.data.events;

  let gameObj;
  let scores = [];

  for (i = 0; i < games.length; i++) {
    if (games[i].id == gameId) {
      gameObj = games[i];
    } 
  }

  if (gameObj) {
    console.log('sdf');
    scores.push({
      'team': gameObj.competitions[0].competitors[0].team.displayName,
      'score': gameObj.competitions[0].competitors[0].score,
    })

    scores.push({
      'team': gameObj.competitions[0].competitors[1].team.displayName,
      'score': gameObj.competitions[0].competitors[1].score,
    })

    return scores;

  } else {
    
    scores.push({
      'error': "Invalid Game ID",
    })

    return scores
  }
}