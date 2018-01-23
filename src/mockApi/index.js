// A mock version for the API.
// This mock is injected by jest by setting moduleNameMapper in package.json
export default {
	promiseOnTimer: () => {
	   return new Promise((resolve) => { 
		   setTimeout(resolve, 1)
	   })
	}
}

