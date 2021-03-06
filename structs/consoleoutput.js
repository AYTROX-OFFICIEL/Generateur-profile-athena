module.exports = {
    log: data => console.log(`[\x1b[31mModule AYTROX\x1b[0m] ${data}\x1b[0m`),
    request: data => console.log(`[\x1b[31mREQUEST\x1b[0m] ${data}\x1b[0m`),
    warn(data, showtype = true) {
        console.warn('[\x1b[33mWARNING\x1b[0m]\x1b[33m', data, '\x1b[0m')
      }
}