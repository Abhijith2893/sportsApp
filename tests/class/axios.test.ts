import { AxiosCall } from "../../utils/class/axios";

describe('Test for axios call class', () => {
    it('returns getAllSoccerTeams method', () => {
        const res = new AxiosCall();
        expect(res).toHaveProperty('getAllSoccerTeams');
    });
})