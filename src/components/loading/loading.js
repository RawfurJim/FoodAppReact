import React from 'react'

import './loading.css'

function Loading({ text }) {
	return (
		<div className='loading'>
			<h1>Loading {text ? text : ''}...</h1>
		</div>
	)
}

export default Loading
