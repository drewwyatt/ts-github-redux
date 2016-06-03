import * as React from 'react';
import {Router, hashHistory} from 'react-router';
import routes from '../routes';

export class Root extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<Router history={hashHistory} routes={routes} />
		);
	}
}