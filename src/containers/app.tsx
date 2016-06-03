import * as React from 'react';
import { Header } from './header';
import { Home } from './home';

export class App extends React.Component<any, void> {
	render(): JSX.Element {
		const { children } = this.props;
		return (
			<div>
				<Header />
				{ children || <Home /> }
			</div>
		);
	}
}