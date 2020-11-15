import faker from 'faker';

const getDefaultData = () => ({
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
});

const buildUser = (data) => {
    const defaultData = getDefaultData();
    return { ...defaultData, ...data };
};

const buildUser2 = () => getDefaultData();

const buildUser3 = (data) => {
    faker.seed(1);
    const defaultData = getDefaultData();
    return { ...defaultData, ...data };
};

const functions = {
    right1: buildUser,
    wrong1: buildUser2,
    wrong2: buildUser3,
};

export default () => {
    const name = process.env.FUNCTION_VERSION || 'right1';
    return functions[name];
};

const buildUser1 = getFunction();

// BEGIN (write your solution here)

test('no params', () => {
    expect(buildUser1()).not.toEqual(buildUser1());
});

test('Check name', () => {
    const user = buildUser1({ firstName: 'Mari' });
    expect(user.firstName).toBe('Mari');
});
// END
