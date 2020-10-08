import dynamoDb from "../../libs/dynamodb-lib";
import { AxiosCall } from "../../utils/class/axios";

export class TeamSchedule {
    async getTeamID(name){
        const sport = 'soccer';
        const params = {
            TableName: process.env.teamIDTableName,
            Key: {
                sport,
                name
            }
        };
        const result = await dynamoDb.get(params);
        if(!result.Item){
            throw new Error("Item not found");
        }
        return result.Item.teamId;
    };

    async getTeamSchedule(teamID){
        try{
            const axios = new AxiosCall;
            const res = await axios.getTeamSchedule(teamID);
            return res.data;
        }catch(err){
            throw err;
        }
    };
}