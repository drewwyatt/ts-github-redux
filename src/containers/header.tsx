import * as React from 'react';
import {Link} from  'react-router';

export class Header extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<Link to='/home'>Home</Link>
				{ ' | ' }
				<Link to='/page-one'>Page One</Link>
			</fieldset>
		);
	}
}