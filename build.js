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
  work1: chalk.blue('Software Engineer 👨‍💻 Developer Mentor 👨‍🏫 Career Coach 🧗'),
  work2: chalk.blue('and Wearer of Many Hats 🎩 '),
  mastodon: chalk.gray('https://mastodon.social/') + chalk.cyan('@kethinov'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('kethinov'),
  npm: chalk.gray('https://npmjs.com/') + chalk.cyan('~kethinov'),
  github: chalk.gray('https://github.com/') + chalk.cyan('kethinov'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('kethinov'),
  angellist: chalk.gray('https://angel.co/u/') + chalk.cyan('kethinov'),
  web: chalk.cyan('http://kethinov.com'),
  npx: chalk.white('npx') + ' ' + chalk.white('kethinov'),
  labelWork: chalk.gray.bold('            '),
  labelMastodon: chalk.gray.bold('   Mastodon:'),
  labelTwitter: chalk.gray.bold('    Twitter:'),
  labelnpm: chalk.gray.bold('        npm:'),
  labelGitHub: chalk.gray.bold('     GitHub:'),
  labelLinkedIn: chalk.gray.bold('   LinkedIn:'),
  labelAngelList: chalk.gray.bold('  AngelList:'),
  labelWeb: chalk.gray.bold('        Web:'),
  labelCard: chalk.white('       Card:')
}

const newline = '\n'
const heading = `${data.name}`
const working1 = `${data.labelWork}  ${data.work1}`
const working2 = `${data.labelWork}  ${data.work2}`
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npm = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const angellisting = `${data.labelAngelList}  ${data.angellist}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading +
                newline + newline +
                working1 + newline +
                working2 + newline + newline +
                mastodoning + newline +
                twittering + newline +
                npm + newline +
                githubing + newline +
                linkedining + newline +
                angellisting + newline +
                webing + newline + newline +
                carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
