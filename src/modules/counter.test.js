import reducer, { increment, INCREMENT, INCREMENT_REQUESTED } from './counter.js'

	const incrementRequestedAction = {
		type: INCREMENT_REQUESTED
	}

	
	const incrementAction = {
		type: INCREMENT
	}
	
test('Increment dispatches with INCREMENT_REQUESTED and then INCREMENT', () => {
	const mockDispatch = jest.fn()
	

	

	
	const result = increment()
	
	result(mockDispatch)
	expect(mockDispatch.mock.calls[0]).toEqual([incrementRequestedAction])
	expect(mockDispatch.mock.calls[1]).toEqual([incrementAction])
})

test('Increment_Requested sets isIncrementing to true', () => {
	const initialState = {
	  count: 0,
	  isIncrementing: false,
	  isDecrementing: false
	}
		
	const newState = reducer(initialState, incrementRequestedAction)
	
	expect(newState.isIncrementing).toEqual(true)
})

test('Increment increases counter by one', () => {
	const initialState = {
	  count: 0,
	  isIncrementing: false,
	  isDecrementing: false
	}
		
	const newState = reducer(initialState, incrementAction)
	
	expect(newState.count).toEqual(1)
})

test('Increment sets isIncrementing to false', () => {
	const initialState = {
	  count: 0,
	  isIncrementing: true,
	  isDecrementing: false
	}
		
	const newState = reducer(initialState, incrementAction)
	
	expect(newState.isIncrementing).toEqual(false)
})