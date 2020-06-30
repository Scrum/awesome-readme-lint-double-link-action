require('dotenv').config();
const { Toolkit } = require('actions-toolkit');
const awesomeReadmeLintDoubleLink = require('awesome-readme-lint-double-link');


Toolkit.run(async tools => {
  const readmeFileName = tools.inputs.entry;
  const contents = tools.getFile(readmeFileName);
  
  await awesomeReadmeLintDoubleLink(contents);
}, {
  event: [
    'pull_request.opened',
    'pull_request.synchronize'
  ],
  secrets: [
    'GITHUB_TOKEN'
  ]
})