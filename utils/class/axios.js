const axios = require('axios');

export class AxiosCall {
    get getAllSoccerTeams(){
        return axios.get(`${process.env.baseUrl}/search_all_teams.php`,{params:{l:'english_premier_league'}});
    }

    get getSoccerStandings(){
        return axios.get(`${process.env.baseUrl}/lookuptable.php`,{params:{l:'4328',s:'2020-2021'}});
    }
}
