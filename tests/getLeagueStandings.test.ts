import { TeamStats } from "../utils/class/teamStats";
import { getLeagueStandings } from "../utils/helper";

test("get league standings - success", () => {
	const name = "Chelsea";
    const played = "3";
    const win = "3";
    const loss = "0";
    const draw = "1";
    const total = "10";
	const data = {table:[{name,played,win,loss,draw,total}]};
	const res = getLeagueStandings(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(TeamStats);
	expect(res[0]).toHaveProperty('name');
    expect(res[0]).toHaveProperty('played');
    expect(res[0]).toHaveProperty('win');
    expect(res[0]).toHaveProperty('loss');
    expect(res[0]).toHaveProperty('draw');
    expect(res[0]).toHaveProperty('points');
	expect(res).toEqual([{name,played,win,loss,draw,points:total}]);
});

test("get league standings - multiple teams", () => {
	const name = "Chelsea";
    const played = "3";
    const win = "3";
    const loss = "0";
    const draw = "1";
    const total = "10";
	const table = new Array(20).fill(20).map(val => ({name,played,win,loss,draw,total}));
	const data = {table};
	const res = getLeagueStandings(data);
	expect(res).toBeInstanceOf(Array);
	expect(res).toHaveLength(20);
	res.forEach((val,i) => {
		expect(res[i]).toBeInstanceOf(TeamStats);
		expect(res[i]).toHaveProperty('name');
        expect(res[0]).toHaveProperty('played');
        expect(res[0]).toHaveProperty('win');
        expect(res[0]).toHaveProperty('loss');
        expect(res[0]).toHaveProperty('draw');
        expect(res[0]).toHaveProperty('points');
		expect(res[i]).toEqual({name,played,win,loss,draw,points:total});
	});
});

test("get league standings - additional keys", () => {
	const name = "Chelsea";
    const played = "3";
    const win = "3";
    const loss = "0";
    const draw = "1";
    const total = "10";
    const teamid = "123445";
	const data = {table:[{name,played,win,loss,draw,total,teamid}]};
	const res = getLeagueStandings(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(TeamStats);
	expect(res[0]).toHaveProperty('name');
    expect(res[0]).toHaveProperty('played');
    expect(res[0]).toHaveProperty('win');
    expect(res[0]).toHaveProperty('loss');
    expect(res[0]).toHaveProperty('draw');
    expect(res[0]).toHaveProperty('points');
	expect(res).toEqual([{name,played,win,loss,draw,points:total}]);
});

test("get league standings - no name", () => {
    const played = "3";
    const win = "3";
    const loss = "0";
    const draw = "1";
    const total = "10";
    const teamid = "123445";
	const data = {table:[{played,win,loss,draw,total,teamid}]};
	const res = getLeagueStandings(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(TeamStats);
	expect(res[0]).toHaveProperty('name');
    expect(res[0]).toHaveProperty('played');
    expect(res[0]).toHaveProperty('win');
    expect(res[0]).toHaveProperty('loss');
    expect(res[0]).toHaveProperty('draw');
    expect(res[0]).toHaveProperty('points');
	expect(res).toEqual([{name:undefined,played,win,loss,draw,points:total}]);
});

test("get league standings - no table data", () => {
	const data = {table:[{}]};
	const res = getLeagueStandings(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(TeamStats);
	expect(res[0]).toHaveProperty('name');
    expect(res[0]).toHaveProperty('played');
    expect(res[0]).toHaveProperty('win');
    expect(res[0]).toHaveProperty('loss');
    expect(res[0]).toHaveProperty('draw');
    expect(res[0]).toHaveProperty('points');
	expect(res).toEqual([{name:undefined,played:undefined,win:undefined,loss:undefined,draw:undefined,points:undefined}]);
});

test("get league standings - empty table", () => {
	const data = {table:[]};
	const res = getLeagueStandings(data);
	expect(res).toEqual([]);
});

test("get league standings - invalid body", () => {
	const data = {team:[]};
	expect(() => {
		getLeagueStandings(data)
	}).toThrow();
});