// Returns a promise that resolves after 3 seconds.
// To simulate waiting on an API call.
export default {
	promiseOnTimer: () => {
	   return new Promise((resolve) => { 
		   setTimeout(resolve, 3000)
	   })
	}
}

