import * as React from 'react';
import {Link} from  'react-router';

export class Header extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>			
				<Link to='/'>Home</Link>
				{ ' | ' }
				<Link to='/page-one'>Page One</Link>
				{ ' | ' }
				<input type='text' placeholder='I am not being reloaded' />
			</fieldset>
		);
	}
}