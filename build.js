const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.red('              Eric Newport'),
  work: chalk.blue('I write software, sci-fi reviews, and sometimes some other stuff too.'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('kethinov'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan('~kethinov'),
  github: chalk.gray('https://github.com/') + chalk.cyan('kethinov'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('kethinov'),
  web: chalk.cyan('http://kethinov.com'),
  npx: chalk.white('npx') + ' ' + chalk.white('kethinov'),
  labelWork: chalk.gray.bold('            '),
  labelTwitter: chalk.gray.bold('    Twitter:'),
  labelnpm: chalk.gray.bold('        npm:'),
  labelGitHub: chalk.gray.bold('     GitHub:'),
  labelLinkedIn: chalk.gray.bold('   LinkedIn:'),
  labelWeb: chalk.gray.bold('        Web:'),
  labelCard: chalk.white('       Card:')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npm = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading +
               newline + newline +
               working + newline + newline +
               twittering + newline +
               npm + newline +
               githubing + newline +
               linkedining + newline +
               webing + newline + newline +
               carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
