const server_IP = 'http://172.20.10.2:9200/'
const header = {
    header: { 'content-type': 'application/json' }
}

function _get(url) {
    return fetch(server_IP + url).then(res => res.json())
}
function _post(url, param) {
    return fetch(server_IP + url, {
        headers: header,
        method: 'POST',
        body: JSON.stringify(param)
    }).then(res => res.json())
}

const apiFunction = {
    getZones: function() {
        let url = 'home/getClass'
        return _get(url)
    },

    getNintendoGames: function() {
        let url = 'home/getNintendoGame'
        return _get(url)
    },

    getPS4Games: function() {
        let url = 'home/getPs4Game'
        return _get(url)
    },

    userSign: function(data) {
        let url = 'user/sign'
        return _post(url, data)
    },

    userLogin: function(data) {
        let url = 'user/login'
        return _post(url, data)
    },

    saveRead: function(data) {
        let url = 'bbs/saveBBS'
        return _post(url, data)
    },

    saveFloor: function(data) {
        let url = 'bbs/saveFloor'
        return _post(url, data)
    },

    saveReply: function(data) {
        let url = 'bbs/saveAnswer'
        return _post(url, data)
    },

    showRead: function(data) {
        let url = 'bbs/showBBS'
        return _post(url, data)
    },

    setNews: function(data) {
        let url = 'home/setNews'
        return _post(url, data)
    },

    getNews: function(data) {
        let url = 'home/getNews'
        return _post(url, data)
    }
}

export default apiFunction
