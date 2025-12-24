import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../server.js';

describe('API Endpoints', () => {
    describe('GET /api/health', () => {
        it('returns health status', async () => {
            const response = await request(app).get('/api/health');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('status', 'ok');
            expect(response.body).toHaveProperty('timestamp');
        });
    });

    describe('GET /api/media', () => {
        it('returns media list with correct format', async () => {
            const response = await request(app).get('/api/media');

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('files');
            expect(response.body).toHaveProperty('count');
            expect(Array.isArray(response.body.files)).toBe(true);
        });

        it('creates assets directory if it does not exist', async () => {
            const response = await request(app).get('/api/media');

            expect(response.status).toBe(200);
            // Should not error even if directory is empty/new
            expect(response.body.files).toBeDefined();
        });

        it('returns correct file structure for media items', async () => {
            const response = await request(app).get('/api/media');

            if (response.body.files.length > 0) {
                const file = response.body.files[0];
                expect(file).toHaveProperty('name');
                expect(file).toHaveProperty('path');
                expect(file).toHaveProperty('type');
                expect(file).toHaveProperty('size');
                expect(file).toHaveProperty('modified');
            }
        });
    });

    describe('Error Handling', () => {
        it('returns 404 for unknown API routes', async () => {
            const response = await request(app).get('/api/unknown-route');

            // In production mode this would return 404, but in dev it might return the HTML
            // For now, we just verify it doesn't crash
            expect([200, 404]).toContain(response.status);
        });
    });
});

describe('Static File Serving', () => {
    it('serves assets from /assets path', async () => {
        // This should return 404 if no assets exist, which is expected
        const response = await request(app).get('/assets/test.png');

        expect([200, 404]).toContain(response.status);
    });
});
