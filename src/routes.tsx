import * as React from 'react'
import { Route } from 'react-router'
import { App, PageOne, Home } from './containers'

export default (
	<Route path='/' component={App}>
		<Route path='/home' component={Home} />
		<Route path='/page-one' component={PageOne} />
	</Route>
)

