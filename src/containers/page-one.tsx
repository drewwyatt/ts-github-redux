import * as React from 'react';
import {Boom} from '../components'
import {Link} from 'react-router';

export class PageOne extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<h1>Page One</h1>
				<p>Look, I'm changing stuff in this component</p>
				<p>
					<Link to="/page/two">Click here to go to page 2</Link>
				</p>
				<p>v the boom component is down there v</p>
				<hr />
				<Boom />
			</fieldset>
		);	
	}
}
