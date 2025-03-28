require('./setup');

test('GET /reservations/ doit retourner un tableau de reservations', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/reservations');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /reservations/status/:reservation_status doit retourner un tableau de reservations', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/reservations/status/confirmed');

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body).toEqual(expect.any(Array));
});

test('GET /reservations/averageTotalCost doit retourner un nombre', async () => {
    // Arrange
    const statutAttendu = 200;

    // Act
    const response = await supertest(app).get('/reservations/averageTotalCost');
    console.log(response.body);

    // Assert
    expect(response.status).toBe(statutAttendu);
    expect(response.body.average).toEqual(expect.any(String));
});