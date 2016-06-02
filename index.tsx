/// <reference path="./typings/index.d.ts" />

import * as React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

function MyBasicComponent(): JSX.Element {
	return(
		<div>
			<h1>Boom</h1>
			<p>pow</p>
		</div>
	);
}

render(
	<MyBasicComponent />,
	document.getElementById('root')
);
