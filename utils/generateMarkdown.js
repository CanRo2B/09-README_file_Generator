// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = inputName.license;
  let addedLicense = " "
  if (licenseBadge === "Apache 2.0") {
      addedLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg) ${href="https://opensource.org/licenses/Apache-2.0"}`
  } else if (licenseBadge === "MIT license") {
      addedLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ${href="https://opensource.org/licenses/MIT"}`
  } else if (licenseBadge === "ISC License") {
      addedLicense = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg) ${href="https://opensource.org/licenses/ISC"}`
  } else {
    inputName.license = "N/A"
  }
  return addedLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let license
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# Title
${data.title};

## Description
${data.description};

## Table of Contents
- [Descriotion](#description)
- [Utilize Project](#utilize project)
- [Languages](#languages)
- [Credits](#credits)
- [License](#license)
- [Links](#links)

## Utilize Project
${data.runProject};

## Languages
${data.languages};

## Credits
${data.credits};

## License
${renderLicenseBadge(license)};

##Links
${data.links}`;

}
// console.log(data);
module.exports = generateMarkdown;
