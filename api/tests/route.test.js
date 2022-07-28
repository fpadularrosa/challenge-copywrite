const server = require('../src/server');
const session = require('supertest-session');

const agent = session(server);

describe('GET /reverse', () => {
    const obj = { inverted: "otxet", palindrome: false }
    
    test('deberia devolver 200 si recibo un texto', () => 
    agent.get('/reverse?text=holamundo').expect(200));

    test('deberia devolver un objeto si recibo un texto', () => 
    agent.get('/reverse?text=texto').expect(obj))

    test('deberia devolver 400 si recibo un numero', () => 
    agent.get('/reverse?text=145').expect(400));

    test('deberia devolver 400 si recibo un string vacio', () => 
    agent.get('/reverse?text=').expect(400))

    test('deberia devolver 404 si hay un error', () => 
    agent.get('/reversed?text=ñpñ').expect(404));
})