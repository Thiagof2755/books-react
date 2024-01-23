const request = require('supertest');
const app = require('./app');

describe('Testes do aplicativo', () => {
  it('Deve retornar uma mensagem de sucesso ao acessar a rota /livros', async () => {
    const response = await request(app).get('/livros');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Rota /livros acessada com sucesso');
  });

  it('Deve retornar uma mensagem de erro ao acessar uma rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Rota não encontrada');
  });
});