import * as React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from '../routes';

export class Root extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<Router history={browserHistory} routes={routes} />
		);
	}
}