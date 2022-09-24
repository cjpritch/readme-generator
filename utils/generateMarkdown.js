const generateMarkdown = templateData => {
  const {title, description, install, contribution, usage, licenses, email, github} = templateData; 
// generates a license badge 
  let licenseString = "This project is covered under the following license:<br>"
  let licenseNav = ""
  let licenseBadge = ""
  
  let licenseGenerator = function() {
      if(licenses.includes('APACHE')) {
          licenseString += "[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)<br>" 
          licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) "       
      }
      if(licenses.includes('MIT')) {
          licenseString += "[MIT](https://opensource.org/licenses/MIT)<br>"
          licenseBadge += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) "         
      }
      if(licenses.includes('MOZILLA')) {
          licenseString += "[MOZILLA 2.0](https://opensource.org/licenses/MPL-2.0)<br>"       
          licenseBadge += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) " 
      }
      if(licenses.includes('IBM')) {
          licenseString += "[IBM 1.0](https://opensource.org/licenses/IPL-1.0)<br>"
          licenseBadge += "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"        
      }  
      if(licenseString) {
          licenseNav = "- [License](#license)"
      }
     
  }
  licenseGenerator(licenses);

// returns the markdown file 
  return `

  # ${ title }

  ## Description
  ${ description } 

  ${ licenseBadge }

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contributions)
  - [Questions](#questions)

  ${ licenseNav }

  ## Installation
  ${ install }

  ## Usage
  ${ usage }

  ## Contribution Guidelines
  ${ contribution }

  ## License
  ${ licenseString }
  
  ## Questions
  Questions about this project? You can reach me by email at ${ email } or view my other projects on [GitHub](https://www.github.com/${github})!
  `

};

module.exports = generateMarkdown;
