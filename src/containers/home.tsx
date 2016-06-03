import * as React from 'react';
import {Link} from 'react-router';
import {Boom, Pow} from '../components';

export class Home extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<h1>Home</h1>
				<p>This is the home page</p>
				<hr />
				<Boom />
				<hr />
				<Pow />
			</fieldset>
		);
	}
}
