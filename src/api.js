export async function getPlayers() {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/`
    );
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}

export async function getPlayer(playerId) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${playerId}`
    );
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer(player) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      }
    );
    const result = await response.json();
    console.log(result);
    return result.data.newPlayer;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${playerId}`,

      {
        method: "DELETE",
      }
    );
    await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getTeams() {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/teams`
    );
    const result = await response.json();
    return result.data.teams;
  } catch (error) {
    console.error(error);
  }
}
