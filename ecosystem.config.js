module.exports = {
    apps : [{
      name: 'chat',
      script: 'index.js',
      args: 'dev',
      node_args: ['-r', './env/initializeEnvs.js'],
      watch: true
    }]
  };
  