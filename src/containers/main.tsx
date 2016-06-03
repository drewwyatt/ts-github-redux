import * as React from 'react';
import {Link} from  'react-router';

export class Header extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<Link to='/page/one'>Page One</Link>
				{ ' | ' }
				<Link to='/page/two'>Page Two</Link>
			</fieldset>
		);
	}
}