import { Card } from './class/card';
import { ScheduleCard } from './class/scheduleCard';
import { TeamStats } from './class/teamStats';

export const getTeamCard = (data) => {
    let res = [];
    try{
        data.teams.forEach(team => {
            let card = new Card(team.strTeam,team.strTeamBadge);
            res.push(card);
        });
        return res;
    }catch(err){
        throw(err);
    }
};

export const getLeagueStandings = (data) => {
    let res = [];
    try{
        data.table.forEach(team => {
            let teamStats = new TeamStats(team.name,team.played,team.win,team.loss,team.draw,team.total);
            res.push(teamStats);
        });
        return res;
    }catch(err){
        throw(err);
    }
};

export const getTeamSchedule = (data) => {
    let res = [];
    try{
        data.forEach(schedule => {
            let scheduleCard = new ScheduleCard(schedule.strEvent,schedule.strLeague,schedule.strTimestamp);
            res.push(scheduleCard.getLocalSchedule(scheduleCard));
        });
        return res;
    }catch(err){
        throw err;
    }
};