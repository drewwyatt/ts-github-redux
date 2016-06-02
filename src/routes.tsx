import * as React from 'react'
import { Route } from 'react-router'
import { PageOne, PageTwo } from './containers'

export default (
	<Route path="/" component={PageOne}>
		<Route path="/:foo" component={PageTwo} />
	</Route>
)

