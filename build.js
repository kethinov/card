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
  work1: chalk.blue('Experienced Software Engineer 👨‍💻 and Wearer of Many Hats 🎩'),
  work2: chalk.blue('I write software, sci-fi reviews, and sometimes some other stuff too.'),
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
const working1 = `${data.labelWork}  ${data.work1}`
const working2 = `${data.labelWork}  ${data.work2}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npm = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading +
               newline + newline +
               working1 + newline + newline +
               working2 + newline + newline +
               twittering + newline +
               npm + newline +
               githubing + newline +
               linkedining + newline +
               webing + newline + newline +
               carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
