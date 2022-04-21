// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "Apache 2.0") {
       return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } if (license === "MIT license") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } if (license === "ISC License") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } if (license === "None") {
      return `None`
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License
    
    This project is licensed under ${license}.`
  } else {
    return `## License
    
    This product is not licensed.`
  }
};

// TODO: Create a function to generate markdown for README
// Created Markdown syntax 
function generateMarkdown(data) {
  return `

## Title
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Descriotion](#description)
- [Utilize Project](#utilize-project)
- [Languages](#languages)
- [Credits](#credits)
- [License](#license)
- [Links](#links)

## Utilize Project
${data.runProject}

## Screenshot
![Project Screenshot](${data.screenshot})

## Languages
${data.languages}

## Credits
${data.credits}

## License
${renderLicenseBadge(data.license)}


## Links

[Portfolio Link](${data.portfolio})

[Github Link](${data.github})

[Email](${data.email})

`;
}

module.exports = generateMarkdown;
