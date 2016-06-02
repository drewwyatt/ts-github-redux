import * as React from 'react';
import {Boom} from '../components'

export class PageOne extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<h1>Page One</h1>
				<p>This is page one.</p>
				<p>v the boom component is down there v</p>
				<hr />
				<Boom />
			</fieldset>
		);	
	}
}
