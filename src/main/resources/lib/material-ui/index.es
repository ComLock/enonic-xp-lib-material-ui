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
	const path = 'roboto-fontface/css/roboto/roboto-fontface.css';
	let href;
	if (scheme && host) {
		href = `${scheme}://${host}${addPort(port)}/app/${app.name}/${path}`;
	} else {
		href = assetUrl({path});
	}
	return [
		`<link rel="stylesheet" href="${href}">`
	];
}


export function getBodyEnd({
	request,
	scheme = request.scheme,
	host = request.host,
	port = request.port
} = {}) {
	const path = 'material-ui/material-ui.production.min.js';
	let src;
	if (scheme && host) {
		src = `${scheme}://${host}${addPort(port)}/app/${app.name}/${path}`;
	} else {
		src = assetUrl({path});
	}
	return [
		`<script src="${src}"></script>`
	];
}
