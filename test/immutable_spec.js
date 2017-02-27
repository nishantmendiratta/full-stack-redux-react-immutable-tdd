import {expect} from 'chai';

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
});
