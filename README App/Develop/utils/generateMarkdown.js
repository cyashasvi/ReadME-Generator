// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const stringGenerator = (Project, Description, Usage, Contribution, Testing, Username) => {
  return `# Application: ${Project}\n
  \n Description: ${Description} \n
  \n Usage: ${Usage} \n
  \n Contribution: ${Contribution} \n
  \n  Testing: ${Testing} \n
  \n Questions: Go to https://www.github.com/${Username}, or email me at cyashasvi@gmail.com. \n

`;
}

module.exports = {stringGenerator};
