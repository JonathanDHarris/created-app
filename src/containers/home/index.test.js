import React from 'react'
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import Wrapper from './test-wrapper'
import { Home } from './'

test('increment button is disabled when isIncrementing', ()=> {
	const initialProps = {
	  count: 5,
	  isIncrementing: true,
	  isDecrementing: false
	}

	const component = TestUtils.renderIntoDocument(<Wrapper><Home {...initialProps}/></Wrapper>)

	// Note that scryRenderedDOMComponentsWithTag is like findRenderedDOMComponentWithTag() but allows for
	// More than one element to be found
	const renderedDOM = () => TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')
	expect(renderedDOM()[0].disabled).toEqual(true)
})

test('decrement button is not disabled by isIncrementing', ()=> {
	const initialProps = {
	  count: 5,
	  isIncrementing: true,
	  isDecrementing: false
	}

	const component = TestUtils.renderIntoDocument(<Wrapper><Home {...initialProps}/></Wrapper>)

	const renderedDOM = () => TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')
	expect(renderedDOM()[2].disabled).toEqual(false)
})