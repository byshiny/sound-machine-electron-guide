'use strict';

var nconf = require('nconf').file({file: getUserHome() + '/sound-machine-config.json'});

<<<<<<< HEAD

=======
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01
function saveSettings(settingKey, settingValue) {
    nconf.set(settingKey, settingValue);
    nconf.save();
}

function readSettings(settingKey) {
    nconf.load();
    return nconf.get(settingKey);
}

function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

module.exports = {
    saveSettings: saveSettings,
    readSettings: readSettings
<<<<<<< HEAD
};
=======
};
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01
