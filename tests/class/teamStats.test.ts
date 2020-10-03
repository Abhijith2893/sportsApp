import { TeamStats } from "../../utils/class/teamStats";

describe('Test for the team stats class', () => {
    test('returns valid constructor values', ()=> {
        const name = 'Chelsea';
        const played = '3';
        const win = '1';
        const loss= '1';
        const draw = '1';
        const points = '4';
        const res = new TeamStats(name,played,win,loss,draw,points);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name,played,win,loss,draw,points});
    });

    test('when only name is passed', ()=> {
        const name = 'Chelsea';
        const res = new TeamStats(name,undefined,undefined,undefined,undefined,undefined);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name,played:undefined,win:undefined,loss:undefined,draw:undefined,points:undefined});
    });

    test('when only played is passed', ()=> {
        const played = '3';
        const res = new TeamStats(undefined,played,undefined,undefined,undefined,undefined);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name:undefined,played,win:undefined,loss:undefined,draw:undefined,points:undefined});
    });

    test('when only win is passed', ()=> {
        const win = '3';
        const res = new TeamStats(undefined,undefined,win,undefined,undefined,undefined);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name:undefined,played:undefined,win,loss:undefined,draw:undefined,points:undefined});
    });
    
    test('when only loss is passed', ()=> {
        const loss = '0';
        const res = new TeamStats(undefined,undefined,undefined,loss,undefined,undefined);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name:undefined,played:undefined,win:undefined,loss,draw:undefined,points:undefined});
    });

    test('when only draw is passed', ()=> {
        const draw = '0';
        const res = new TeamStats(undefined,undefined,undefined,undefined,draw,undefined);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name:undefined,played:undefined,win:undefined,loss:undefined,draw,points:undefined});
    });

    test('when only points is passed', ()=> {
        const points = '0';
        const res = new TeamStats(undefined,undefined,undefined,undefined,undefined,points);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name:undefined,played:undefined,win:undefined,loss:undefined,draw:undefined,points});
    });

    test('when no arguments are passed', ()=> {
        const res = new TeamStats(undefined,undefined,undefined,undefined,undefined,undefined);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('played');
        expect(res).toHaveProperty('win');
        expect(res).toHaveProperty('loss');
        expect(res).toHaveProperty('draw');
        expect(res).toHaveProperty('points');
        expect(res).toEqual({name:undefined,played:undefined,win:undefined,loss:undefined,draw:undefined,points:undefined});
    });
})