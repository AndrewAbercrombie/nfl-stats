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

    return scores;
  }
}


exports.getTeamLogo = async function(teamID) {
  let response = await axios.get(`http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/teams/${teamID}?lang=en&region=us`);
  let logo = response.data.logos[0].href;
  return {'team': response.data.displayName, 'logo-url': logo}
}


exports.getAthleteId = async function(name) {
  const response = await axios.get('https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?limit=18000');

  let retVal = {}

  for (i = 0; i < response.data.items.length ; i++) {
    if (response.data.items[i].displayName == name) {
      retVal = {"id":  response.data.items[i].id};
      break;
    }
  }

  if (retVal != {}) {
    return retVal
  } else return {'error': "Player not found"};
}


exports.getAthleteHeadshotImage = async function(athleteID) {
  let response = await axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${athleteID}`)
  return {"headshotURL": response.data.athlete.headshot.href};
}

exports.getCurrentWeek = async function() {
  let response =  await axios.get(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`);
  return ({'week': response.data.week.number});
}