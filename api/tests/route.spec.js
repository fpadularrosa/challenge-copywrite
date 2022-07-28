const session = require('supertest-session');
const server = require('../src/server');

const agent = session(server);

describe('GET /reverse', () => {
    const obj = { inverted: "otxet", palindrome: false }
    
    it('deberia devolver 200 si recibo un texto', () => 
    agent.get('/reverse?text=holamundo').expect(200));

    it('deberia devolver un objeto si recibo un texto', () => 
    agent.get('/reverse?text=texto').expect(obj))

    it('deberia devolver 400 si recibo un numero', () => 
    agent.get('/reverse?text=145').expect(400));

    it('deberia devolver 400 si recibo un string vacio', () => 
    agent.get('/reverse?text=').expect(400))

    it('deberia devolver 404 si hay un error', () => 
    agent.get('/reversed?text=ñpñ').expect(404));
})