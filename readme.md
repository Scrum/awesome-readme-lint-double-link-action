# <img valign="text-bottom" height="49" src="https://raw.githubusercontent.com/sdras/awesome-actions/master/awesome-actions.png" align="right"> Awesome readme lint double link
> A GitHub Action that lint double link in awesome readme in PR 


## Usage

You can create a `.github/workflows/readme-lint-double-link.yml` file:

```yaml
name: Awesome readme lint double link action
on:
  pull_request:
    types: [opened, synchronize]
    branches:
      - master
jobs:
  build:
    name: awesome readme lint double link
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: Scrum/awesome-readme-lint-double-link-action@v1
        with:
          entry: 'path/to/file'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```