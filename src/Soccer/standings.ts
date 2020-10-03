import handler from "../../libs/handler-lib";
import { AxiosCall } from "../../utils/class/axios";
import { getLeagueStandings } from "../../utils/helper";

export const main = handler(async(event, context) => {
  try{
    const axios = new AxiosCall;
    const res = await axios.getSoccerStandings;
    return getLeagueStandings(res.data);
  }catch(err){
    throw err;
  }
});