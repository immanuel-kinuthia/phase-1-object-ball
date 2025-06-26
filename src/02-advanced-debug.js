console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()

function numPointsScored(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
  return null;
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}

function teamColors(teamName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === teamName) {
      return teamObj.colors;
    }
  }
  return null;
}

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    if (teamObj.teamName === teamName) {
      return Object.values(teamObj.players).map(player => player.number);
    }
  }
  return [];
}

function playerStats(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null;
}

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;

    for (let playerName in players) {
      let player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = player;
      }
    }
  }

  return playerWithLargestShoe ? playerWithLargestShoe.rebounds : null;
}

function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topScorer = null;

  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;

    for (let playerName in players) {
      let player = players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topScorer = playerName;
      }
    }
  }

  return topScorer;
}

console.log('Most points scored by:', mostPointsScored());

function winningTeam() {
  let game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;

    for (let playerName in players) {
      homePoints += players[playerName].points;
    }
  }

  for (let playerName in game.away.players) {
    awayPoints += game.away.players[playerName].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

console.log('Winning team:', winningTeam());

function playerwithLongestName() {
  let game = gameObject();
  let longestName = '';
  let longestPlayer = null;

  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let players = teamObj.players;

    for (let playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        longestPlayer = players[playerName];
      }
    }
  }

  return longestPlayer;
}

console.log('Player with longest name:', playerwithLongestName());

function doesLongNameStealATon() {
  let player = playerwithLongestName();
  return player.steals > 5;
}

console.log('Does the player with the longest name steal a ton?', doesLongNameStealATon());