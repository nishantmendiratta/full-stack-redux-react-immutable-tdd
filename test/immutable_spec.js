import {expect} from 'chai';
import {List} from 'immutable';

describe('immutablity', () => {
	
	describe('a number', () => {
		function increment(currentState) {
			return currentState+1;
		}

		it('is immutable', () => {
			//test implementation
			let state = 42;
			let nextState = increment(state);

			expect(nextState).to.equal(43);
			expect(state).to.equal(42);
		});

		//more its can go here 
	});

	describe('A List', () => {
		function addMovie(currentState, movie) {
			return currentState.push(movie);
		}

		it('is immutable', () => {
			let state = List.of('Trainspotting', '28 Days Later');
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(List.of(
				'Trainspotting',
				'28 Days Later',
				'Sunshine'
			));

			expect(state).to.equal(List.of(
				'Trainspotting',
				'28 Days Later'
			));
		});
	});
});
