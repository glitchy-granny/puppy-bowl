const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players";

export async function getPlayers() {
  try {
    const response = await fetch("${API_URL}/players");
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}
