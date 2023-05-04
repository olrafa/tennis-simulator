import createMatch from "./game/createMatch";
import playMatch from "./game/playMatch";
import { getRandomPlayers } from "./game/util";
import { logMatchWon, logPlayers } from "./scoreboard/logs";

// Entry point of the app. Pick two random players, create a match and play.
const playRandomMatch = () => {
  const [firstPlayer, secondPlayer] = getRandomPlayers();

  const match = createMatch(firstPlayer, secondPlayer);
  setTimeout(() => logPlayers(match), 1500);
  setTimeout(() => {
    playMatch(match).then((winner) => logMatchWon(winner));
  }, 3000);
};

playRandomMatch();
