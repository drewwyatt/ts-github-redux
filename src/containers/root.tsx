import * as React from 'react';
import {Boom, Pow} from '../components'

export function Root(): JSX.Element {
	return (
		<fieldset>
			<h1>Root Component</h1>
			<Boom />
			<Pow />
		</fieldset>
	);
}
