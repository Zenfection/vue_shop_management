const user = {
    name: 'John',
    age: 30,
};

test('user matches', () => {
    expect(user).toMatchSnapshot();
});