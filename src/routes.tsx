import * as React from 'react'
import { Route } from 'react-router'
import { App, PageOne, PageTwo } from './containers'

export default (
	<Route path="/" component={App}>
		<Route path="/page/one" component={PageOne} />
		<Route path="/page/two" component={PageTwo} />
	</Route>
)

