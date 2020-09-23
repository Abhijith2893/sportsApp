import { Card } from "./class";

export const getTeamCard = (data) => {
    let res = [];
    data.teams.forEach(team => {
        let card = new Card(team.strTeam,team.strTeamBadge);
        res.push(card);
    });
    return res;
};