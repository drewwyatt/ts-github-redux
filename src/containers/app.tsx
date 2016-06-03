import * as React from 'react';

export class App extends React.Component<any, void> {
	render(): JSX.Element {
		const { children } = this.props;
		return (
			<fieldset>
				<h2>This is the app component</h2>
				<input type="text" placeholer="enter stuff here" />
				<hr />
				{children}
			</fieldset>
		);
	}
}