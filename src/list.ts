import handler from "../libs/handler-lib";
import { getTeamCard } from "../utils/helper";

const axios = require('axios');

export const main = handler(async(event, context) => {
  const data = JSON.parse(event.body);
  try{
    const res = await axios.get(`${process.env.baseUrl}/search_all_teams.php`,{params:{l:'english_premier_league'}});
    return getTeamCard(res.data);
  }catch(err){
    throw err;
  }
});