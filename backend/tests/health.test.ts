import request from 'supertest';
import app from '../src/app.ts';

describe('GET /health', () => {
  it('should return the API health status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
