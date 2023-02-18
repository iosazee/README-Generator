// function to Display License Badge
const displayLicenseBadge = (license) => {
    let badge = ""
    if (license === 'Apache') {
        badge = `[${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
    else if (license === 'Boost') {
        badge = `[${license}](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
    }
    else if (license === 'CCO'){
        badge = `[${license}](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
    }
    else if (license === 'MIT'){
        badge = `[${license}](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    else {
        badge = ""
    }
    return badge
}


// function to get license link
const getLicenseLink = (license) => {
    let link = ""
   if (license === 'Apache'){
    link = `[${license}](https://opensource.org/licenses/Apache-2.0)`
   }
   else if (license === 'Boost'){
    link = `[${license}](https://www.boost.org/LICENSE_1_0.txt)`
   }
   else if (license === 'CCO') {
    link = `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`
   }
   else if (license === 'MIT') {
    link = `[${license}](https://opensource.org/licenses/MIT)`
   }
   else {
    link = ''
   }
    return link
}

// function to render License Section of README

const renderLicense = (license) => {
    let licenseSection = ""
    if (license === "None") {
        licenseSection = ""
    } else {
        licenseSection = `## License
    This project is licensed under the ${license} license.`

    }

    return licenseSection
}

// function to generate MarkDown
const generateMarkDown = (data) => {

    return `# ${data.title}
    ${displayLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

\`\`\`
    ${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicense(data.license)}

## Contributing

${data.contributing}

## Tests

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions you can contact me at ${data.email}.

You can see more of my work at [${data.username}](https://github.com/${data.username}).`;

}

export default generateMarkDown;
