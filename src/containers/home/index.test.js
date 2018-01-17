import React from 'react'
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'
import { Home } from './'

test('increment button is disabled when isIncrementing', ()=> {
	// Need a wrapper for stateless component to be rendered
	// Also this wrapper must be a React component not simply a <div>
	// See vjsinsky's answer here
	// https://github.com/facebook/react/issues/4692
	class Wrapper extends React.Component {
		render(){
		   return(
			   <Home {...initialProps}/>
			)
		 }
	}
	
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