import * as React from 'react';

export class PageTwo extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<fieldset>
				<h1>Page Two</h1>
				<p>This is page two.</p>
				<p>There are no nested components on this page</p>
			</fieldset>
		);
	}
}
