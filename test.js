import test from 'ava';
import lowercaseKeys from '.';

test('main', t => {
	t.true(lowercaseKeys({FOO: true}).foo);
	t.true(lowercaseKeys({FOO: true, bAr: true}).bar);
	t.deepEqual(lowercaseKeys({Profile: {Gender: 'Male', MySkill: [{Name: 'skill-1', Years: 5}, {Name: 'skill-2', Years: 17}]}}).profile,
		{
			gender: 'Male',
			myskill: [
				{
					name: 'skill-1',
					years: 5
				},
				{
					name: 'skill-2',
					years: 17
				}
			]
		});
});
