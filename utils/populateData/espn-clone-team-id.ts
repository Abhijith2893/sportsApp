import AWS from 'aws-sdk';
import handler from "../../libs/handler-lib";
import { AxiosCall } from "../../utils/class/axios";

export const main = handler(async(event, context) => {
	const getTeamDetails = async() => {
		const result = [];
		try{
			const axios = new AxiosCall;
			const res = await axios.getAllSoccerTeams;
			res.data.teams.forEach(team => {
				let teamDetails = {
					sport: "soccer",
					name: team.strTeam,
					teamId: team.idTeam
				}
				result.push(teamDetails);
			})
			return result;
		}catch(err){
			throw err;
		}
	};

	const dynamoDb = new AWS.DynamoDB.DocumentClient();
	const result = await getTeamDetails();
	result.forEach(team => {
		const params = {
			TableName: process.env.teamIDTableName,
			Item: team
		};
		dynamoDb.put(params,(err,data)=> {
			console.log(data)
		});
	})

});