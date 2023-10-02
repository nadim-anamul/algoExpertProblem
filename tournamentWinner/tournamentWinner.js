function tournamentWinner(competitions, results) {
  // Write your code here.
  let leaderBoard = {};
  let topPointGater = { score: 0, name: '' };
  for (let i = 0; i < results.length; i++) {
    let winner = '';
    if (results[i] === 1) {
      winner = competitions[i][0];
    } else {
      winner = competitions[i][1];
    }
    if (winner in leaderBoard) {
      leaderBoard[winner] += 3;
    } else {
      leaderBoard[winner] = 3;
    }
    if (topPointGater.score < leaderBoard[winner]) {
      topPointGater.score = leaderBoard[winner];
      topPointGater.name = winner;
    }
  }
  return topPointGater.name;
}
