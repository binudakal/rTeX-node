const fetch = require('node-fetch');

function renderLatex(config) {

    const host = 'https://rtex.probablyaweb.site';

    //#region configure body
    var bodyJSON = {
        code: config.code,
        format: config.format || 'png',
        quality: config.quality || 85,
        density: config.density || 200,
    }
    //#endregion

    //#region configure request
	let request = {
		method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(bodyJSON),
	}
    //#endregion

    return new Promise((resolve, reject)=> { 
        fetch(host + '/api/v2', request)
        .then((response) => {
            return response.json();
        }).then((json) => {
            if (json['status'] == 'success') {
                resolve(host + '/api/v2/' + json['filename']);
            } else {
               reject('Error while rendering LaTeX: ' + json['log'])
            }
        })
    });
}

module.exports = renderLatex