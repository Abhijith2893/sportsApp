import { Card } from "../utils/class";
import { getTeamCard } from "../utils/helper";

test("get team card - success", () => {
	const strTeam = "Chelsea";
	const strTeamBadge = "https://image.com";
	const data = {teams:[{strTeam,strTeamBadge}]};
	const res = getTeamCard(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(Card);
	expect(res[0]).toHaveProperty('name');
	expect(res[0]).toHaveProperty('logo');
	expect(res).toEqual([{name:strTeam,logo:strTeamBadge}]);
});

test("get team card - multiple teams", () => {
	const strTeam = "Chelsea";
	const strTeamBadge = "https://image.com";
	const teams = new Array(100).fill(100).map(val => ({strTeam,strTeamBadge}))
	const data = {teams};
	const res = getTeamCard(data);
	expect(res).toBeInstanceOf(Array);
	expect(res).toHaveLength(100);
	res.forEach((val,i) => {
		expect(res[i]).toBeInstanceOf(Card);
		expect(res[i]).toHaveProperty('name');
		expect(res[i]).toHaveProperty('logo');
		expect(res[i]).toEqual({name:strTeam,logo:strTeamBadge});
	});
});

test("get team card - no name", () => {
	const strTeamBadge = "https://image.com";
	const data = {teams:[{strTeamBadge}]};
	const res = getTeamCard(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(Card);
	expect(res[0]).toHaveProperty('name');
	expect(res[0]).toHaveProperty('logo');
	expect(res).toEqual([{name:undefined,logo:strTeamBadge}]);
});

test("get team card - no logo", () => {
	const strTeam = "Chelsea";
	const data = {teams:[{strTeam}]};
	const res = getTeamCard(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(Card);
	expect(res[0]).toHaveProperty('name');
	expect(res[0]).toHaveProperty('logo');
	expect(res).toEqual([{name:strTeam,logo:undefined}]);
});

test("get team card - no teams", () => {
	const data = {teams:[{}]};
	const res = getTeamCard(data);
	expect(res).toBeInstanceOf(Array);
	expect(res[0]).toBeInstanceOf(Card);
	expect(res[0]).toHaveProperty('name');
	expect(res[0]).toHaveProperty('logo');
	expect(res).toEqual([{name:undefined,logo:undefined}]);
});

test("get team card - empty teams", () => {
	const data = {teams:[]};
	const res = getTeamCard(data);
	expect(res).toEqual([]);
});

test("get team card - invalid body", () => {
	const data = {team:[]};
	expect(() => {
		getTeamCard(data)
	}).toThrow();
});