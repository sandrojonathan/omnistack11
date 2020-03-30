const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

/* rolback para não popular o bacno com muita coisa */
async function initializeCityDatabase(){
    await connection.migrate.rollback();
    await connection.migrate.latest();
}

async function clearCityDatabase(){
    await connection.destroy();
}

describe('ONG', () => {

    beforeEach(() => {
        try {
            return initializeCityDatabase();
        } catch (error) {
            done(error);   
        }
    });

    afterAll(() => {
        try {
            return clearCityDatabase();
        } catch (error) {
            done(error);   
        }
    });

    it('should be able to create a new ONG', async () => {
    
        const response = await request(app).post('/ongs')
            .send({
                name: "ONG DA ARABIA",
                email: "xesperito@xespirando.com.br",
                whatsapp: "31994930827",
                city: "bh",
                uf: "mg"
            });

            expect(response.body).toHaveProperty('id');

    });

})