const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// write inquirer questions
const promptUser = data => {
    return inquirer.prompt([      
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('A title is required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('A project description is required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Installation instructions are required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Contribution guidelines are required');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Usage information required');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'Which licenses apply to this project? (Check all that apply)',
        choices: ['APACHE', 'MIT', 'MOZILLA', 'IBM']
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email address!');
            return false;
            }
           }
       }, 
         {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
           }
       },  
    ]);
  };
// calls the function to ask the questions, then writes the answers to the new readme 
    promptUser()
    .then(data => generateMarkdown(data))
    .then(generateMarkdown => {
        fs.writeFile('./dist/README.md', generateMarkdown, err => {
            if (err) throw err
        })
    });

