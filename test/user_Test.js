const mocha = require('mocha');
const assert = require('assert');
const User = require('../js/models/user');

describe('Saving records', () => {
	it('Saves a record to the database', () => {
		var testUser = new User({
			id: 0,
			username: "root",
			password: "kaas"
		});

		testUser.save().then(() => {
			assert(testUser.isNew === false);
			done();
		});
	})
});