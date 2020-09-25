import { Card } from "../../utils/class/card";

describe('Test for the card class', () => {
    test('returns valid constructor values', ()=> {
        const name = 'Chelsea';
        const logo = 'https://logo.png';
        const res = new Card(name,logo);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('logo');
        expect(res).toEqual({name,logo});
    });

    test('when only name is passed', ()=> {
        const name = 'Chelsea';
        const res = new Card(name);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('logo');
        expect(res).toEqual({name,logo:undefined});
    });

    test('when only logo is passed', ()=> {
        const logo = 'https://logo.png';
        const res = new Card(undefined,logo);
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('logo');
        expect(res).toEqual({name:undefined,logo});
    });

    test('when no argument is passed', ()=> {
        const res = new Card();
        expect(res).toHaveProperty('name');
        expect(res).toHaveProperty('logo');
        expect(res).toEqual({name:undefined,logo:undefined});
    });
})