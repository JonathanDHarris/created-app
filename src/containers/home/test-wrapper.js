import React from 'react'

// Need a wrapper for stateless component to be rendered
// Also this wrapper must be a React component not simply a <div>
// See vjsinsky's answer here
// https://github.com/facebook/react/issues/4692
export default class TestWrapper extends React.Component {
	render(){
	   return(
			<div>{this.props.children}</div>
		)
	 }
}