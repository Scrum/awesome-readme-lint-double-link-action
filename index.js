require('dotenv').config();
const { Toolkit } = require('actions-toolkit');
const awesomeReadmeLintDoubleLink = require('awesome-readme-lint-double-link');


Toolkit.run(tools => {
  const readmeFileName = tools.inputs.entry;
  const contents = tools.getFile(readmeFileName);
  
  awesomeReadmeLintDoubleLink(contents)
    .then(() => {
      tools.exit.success('Things are good')
    })
    .catch(error => {
      tools.exit.failure(error.message)
    });
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})