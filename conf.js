exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    getPageTimeout: 120000,
    framework: 'jasmine',
    specs: ['spec.js']
  };