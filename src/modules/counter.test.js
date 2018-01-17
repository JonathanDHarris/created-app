import { increment, INCREMENT, INCREMENT_REQUESTED } from './counter.js'

test('Increment increases counter by one', () => {
	const mockDispatch = jest.fn()
	
	const expected1 = {
		type: INCREMENT_REQUESTED
	}
	
	const expected2 = {
		type: INCREMENT
	}
	
	const result = increment()
	
	result(mockDispatch)
	expect(mockDispatch.mock.calls[0]).toEqual([expected1])
	expect(mockDispatch.mock.calls[1]).toEqual([expected2])
})