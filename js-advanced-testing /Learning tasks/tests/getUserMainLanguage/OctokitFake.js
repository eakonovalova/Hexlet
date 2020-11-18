// @ts-check

// BEGIN (write your solution here)
export default class OctokitFake {
    constructor(data) {
        this.data = data;
    }

    repos = {
        listForUser: () => Promise.resolve({ data: this.data }),
    }
}
// END
