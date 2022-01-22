export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "298c55aa8bbb4cb0815d123fbc0935bc";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1) //skipping over hash
        .split("&") //returns array of strings around the & character //["token_type=Bearer", "expires_in=3600"]
        .reduce((initital, item) => { 
            //split element again -> ["token_type" ,"Bearer"]
            let parts = item.split('=');
            //
            initital[parts[0]] = decodeURIComponent(parts[1]);
            console.log(initital)
            return initital;
        }, {}); 
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
