require('./setup');

test('GET /rooms/ doit retourner un tableau de rooms', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /rooms/available doit retourner un tableau de rooms', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms/available');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /rooms/average_capacity doit retourner un nombre', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms/average_capacity');
    console.log(response.body);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body.capacity_avg).toEqual(expect.any(String));
});


test('GET /rooms/pricesAbove/:price doit retourner un tableau de rooms', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms/pricesAbove/100');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /rooms/type/:type doit retourner un tableau de rooms', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms/type/single');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /pricesBelow/:price doit retourner un tableau de rooms', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms/pricesBelow/100');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /rooms/prices/:min/:max doit retourner un tableau de rooms', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/rooms/prices/100/200');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /rooms/:id doit retourner une room', async () => {
    // Arrange
    const statutAttendu = 200;
    const token = await getToken();

    // Act
    const response = await supertest(app).get('/rooms/1').set('authorization', token);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Object));
});



test('POST /rooms/ doit ajouter une room', async () => {
    // Arrange
    const statutAttendu = 201;
    const token = await getToken();
    const room = {
        "room_number": 1,
        "room_type": "single",
        "price_per_night": 100,
        "capacity": 1,
        "status": 0
    };

    // Act
    const response = await supertest(app).post('/rooms').set('authorization', token).send(room);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Object));
});



test ('PATCH /rooms/:id doit modifier une room', async () => {
    // Arrange
    const statutAttendu = 201;
    const token = await getToken();
    const room = {
        room_number: 1,
        capacity: 1,
        price_per_night: 100,
        status: 0,
        room_type: "single"
    };

    // Act
    const response = await supertest(app).patch('/rooms/1').set('authorization', token).send(room);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Object));
});


