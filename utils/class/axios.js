const axios = require('axios');

export class AxiosCall {
    getAllSoccerTeams(){
        return axios.get(`${process.env.baseUrl}/search_all_teams.php`,{params:{l:'english_premier_league'}});
    }

    getSoccerStandings(){
        return axios.get(`${process.env.baseUrl}/lookuptable.php`,{params:{l:'4328',s:'2020-2021'}});
    }

    getTeamSchedule(id){
        return axios.get(`${process.env.baseUrl}/eventsnext.php`,{params:{id}});
    }
}
