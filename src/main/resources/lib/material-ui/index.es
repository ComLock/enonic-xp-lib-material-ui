import {assetUrl} from '/lib/xp/portal';


function addPort(port) {
	return port ? `:${port}` : '';
}


export function getHeadBegin({
	request = {},
	scheme = request.scheme,
	host = request.host,
	port = request.port
} = {}) {
	const paths = [
		'roboto-fontface/css/roboto/roboto-fontface.css',
		'material-icons-font/material-icons-font.css'
	];
	if (scheme && host) {
		return paths.map(path => `<link rel="stylesheet" href="${scheme}://${host}${addPort(port)}/app/${app.name}/${path}">`);
	}
	return paths.map(path => `<link rel="stylesheet" href="${assetUrl({path})}">`);
}


export function getBodyEnd({
	request = {},
	scheme = request.scheme,
	host = request.host,
	port = request.port
} = {}) {
	const paths = [
		'react/react.production.min.js',
		'react-dom/react-dom.production.min.js',
		'material-ui/material-ui.production.min.js'
	];
	if (scheme && host) {
		return paths.map(path => `<script src="${scheme}://${host}${addPort(port)}/app/${app.name}/${path}"></script>`);
	}
	return paths.map(path => `<script src="${assetUrl({path})}"></script>`);
}
