require('./setup');
test('GET /clients doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/clients');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('PATCH /clients/:id doit retourner un client modifié', async () => {
    // Arrange
    const statutAttendu = 200;
    const token = await getToken();
    const clientModifer = {
        phone: "0600000000"

    };

    // Act
    const response = await supertest(app)
        .patch('/clients/1')
        .set('authorization', token)
        .send(clientModifer)


    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body[0].phone).toBe(clientModifer.phone);
});

// test('POST /clients doit ajouter un client', async () => {
//     // Arrange
//     const statutAttendu = 201;
//     const newClient = {
//         first_name: "string",
//         last_name: "string",
//         email: "string",
//         phone: "string",
//         password: "string"
//     };

//     // Act
//     const response = await supertest(app)
//         .post('/clients')
//         .send(newClient);

//     // Assert
//     expect(response.status).toBe(statutAttendu);
//     expect(response.body).toEqual(expect.any(Object));
// });



test('GET /me doit retourner les informations de lutilisateur connecté', async () => {
    // Arrange
    const statutAttendu = 200;
    const token = await getToken();
    const client = {
        id_client: 1,
    };

    // Act
    const response = await supertest(app)
        .get('/clients/me')
        .set('authorization', token);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Object));
});



test('GET /clients/year/:year doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;
    const year = 2021;

    // Act
    const response = await supertest(app).get(`/clients/year/${year}`);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /clients/totalCostAbove/:price doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;
    const price = 1000;

    // Act
    const response = await supertest(app).get(`/clients/totalCostAbove/${price}`);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /clients/registrationDate/:month/:year doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;
    const month = 1;
    const year = 2021;

    // Act
    const response = await supertest(app).get(`/clients/registrationDate/${month}/${year}`);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /clients/checkInDate/:month/:year doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;
    const month = 1;
    const year = 2021;

    // Act
    const response = await supertest(app).get(`/clients/checkInDate/${month}/${year}`);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /clients/roomType/:roomType doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;
    const roomType = "single";

    // Act
    const response = await supertest(app).get(`/clients/roomType/${roomType}`);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /clients/maxAmountSpent doit retourner un tableau de clients', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/clients/maxAmountSpent');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /clients/:id doit retourner un client', async () => {
    // Arrange
    const statutAttendu = 200;
    const id = 1;

    // Act
    const response = await supertest(app).get(`/clients/${id}`);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('DELETE /clients/:id doit supprimer un client', async () => {
    // Arrange
    const statutAttendu = 204;
    const token = await getToken();
    const id = 18;

    // Act
    const response = await supertest(app)
        .delete(`/clients/${id}`)
        .set('authorization', token);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Object));
});
