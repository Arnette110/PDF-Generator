# PDF Generator

This is is a command-line application that dynamically generates a PDF profile from a GitHub username.  


## Instructions
- Download/Clone the repo
- Navigate to the local folder that contains the repo via the command line in Bash/Terminal
- Alternatively you can open the code in your text/code editor and then open the index.js file in the terminal
- Make sure to run "npm i" to install the required dependencies
  - If the dependencies do not automatically install you can install them individually - the required dependencies are as follows: fs, axios, inquirer, util and puppeteer
- After the required dependencies are installed type "node index.js" in the command line and follow the prompts
- You will be prompted to input your GitHub username - do so and hit enter/return
- Next you will be asked what your favorite color is and you will be given 4 options, navigate with your arrow keys and select your desired color by hitting enter/return on your keyboard
- The code will run and create both an HTML and PDF file in the same directory as index.js ({rootdirectory}.../js)
- Open the PDF in your preferred PDF viewer and you will see the PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Gif
![profile-generator](https://user-images.githubusercontent.com/54122844/73402335-51a71780-42aa-11ea-9598-bc5a09bbfd4b.gif)


## Built With

* Node.js
* HTML
* CSS
* JavaScript
* fontAwesome
* googlefontsapi


## Credits

* [nodejs.org] (https://nodejs.org/) - used for assistance with node, particularly with async functions
* [w3schools] (https://www.w3schools.com/nodejs) - used for assistance with node


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


