export class ScheduleCard {
    constructor(event,league,dateTime){
        this.event = event;
        this.league = this.getLeagueLogo(league);
        this.dateTime = dateTime;
    }

    getLeagueLogo(league){
        let leagueLogoUrl;
        switch(league){
            case('English Premier League'):
                leagueLogoUrl = 'https://www.thesportsdb.com/images/media/league/badge/i6o0kh1549879062.png';
                break;
            case('UEFA Champions League'):
                leagueLogoUrl = 'https://www.thesportsdb.com/images/media/league/badge/dtp1dl1534767233.png';
                break;
            case('UEF Europa League'):
                leagueLogoUrl = 'https://www.thesportsdb.com/images/media/league/badge/yymdqh1597494330.png';
                break;
        };
        return leagueLogoUrl;
    }
}