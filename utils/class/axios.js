const axios = require('axios');

export class AxiosCall {
    get getAllSoccerTeams(){
        return axios.get(`${process.env.baseUrl}/search_all_teams.php`,{params:{l:'english_premier_league'}});
    }
}
