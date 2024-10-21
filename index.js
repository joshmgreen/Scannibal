import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
  .prompt([
    {
      message:
        "Feed me a URL, and I'll devour it to spit out a tasty QR code! 🩸",
      name: 'greeting',
      type: 'input',
    },
  ])
  .then((answers) => {
    fs.writeFile(
      'URL_history.txt',
      '\n' + answers.greeting,
      { flag: 'a' },
      (err) => {
        if (err) {
          console.error(err);
        } else {
        }
      }
    );
    var qr_svg = qr.image(answers.greeting);
    qr_svg.pipe(fs.createWriteStream(answers.greeting + '_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
