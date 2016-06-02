import * as React from 'react';
import { Pow } from '../components'
import { Router, Link, hashHistory } from 'react-router';
import routes from '../routes';

export function Root(): JSX.Element {
	return (
		<fieldset>
			<h1>Root Component</h1>
			<Pow />
			<hr />
			<a href="/">Page One</a>
			<a href="/boom">Page Two</a>
			<hr />
			<Router history={hashHistory} routes={routes} />
		</fieldset>
	);
}
