const spawnCmd = require('child_process').spawn

function spawn (cmd) {

  spawnCmd(cmd, {stdio: [0, 1, 2]})

}

module.exports = spawn
