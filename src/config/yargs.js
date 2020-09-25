const argv = require('yargs')
.command('search', 'busqueda', {
  city: {
    alias: 'c',
    demand: true,
    desc: 'Indique ciudad a consultar'
  }
})
.help()
.argv;


module.exports = {
  argv
};