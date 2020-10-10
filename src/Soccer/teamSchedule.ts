import handler from "../../libs/handler-lib";
import { TeamSchedule } from "../../utils/class/teamSchedule";
import { getTeamScheduleCard } from "../../utils/helper";

export const main = handler(async(event, context) => {
    const teamName = decodeURIComponent(event.pathParameters.teamName);
    const teamSchedule = new TeamSchedule;
    const teamID = await teamSchedule.getTeamID(teamName);
    const response = await teamSchedule.getTeamSchedule(teamID);
    return getTeamScheduleCard(response.events);
});