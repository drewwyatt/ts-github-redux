import * as React from 'react';
import {Link} from 'react-router';

export class PageTwo extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<h1>Page Two</h1>
				<p>This is page two.</p>
				<p>
					<Link to="/page/one">Click here to go to page 1</Link>
				</p>
				<p>There are no nested components on this page</p>
			</fieldset>
		);
	}
}
