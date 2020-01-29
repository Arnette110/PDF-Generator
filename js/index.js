const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const puppeteer = require("puppeteer");
const generateHTML = require("./generateHTML");
const writeFile = util.promisify(fs.writeFile);


async function init() {
  try {
    //   waits for getUsrName function to run, then takes the return value and assigns it to username
    let { username } = await getUsrName();

    // waits for getColor function to run, then takes the return value and assigns it to color
    const { color } = await getColor();
    
    // waits for getData fcn to run using username as a search parameter, then takes the return value and assigns it to data
    let { data } = await getData(username);
    
    // waits for getStars fcn to run using username as a search parameter, then takes the return value and assigns it to starCountData
    let starCountData = await getStars(username);
    
    // takes the length of the starCountData and assigns it to starCount
    let starCount = starCountData.data.length;
    
    // takes the color selected by the user and references it to the selector in the generateHTML fcn
    data.color = color;

    // takes starCount and references it to the selector in the generateHTML fcn
    data.starCount = starCount;

    // // 
    // profile = username;

    // passes the data received from the axios API calls into the generateHTML fcn and consolodates it as a const variable
    const html = generateHTML(data);

    // writes a new index.html file using the data from the generateHTML fcn
    writeFile("index.html", html);
    createPDF(html);
  } catch (err) {
    console.log(err);
  }
  
}

init();

// function to get input from user and return input as username
function getUsrName() {
  const username = inquirer.prompt({
    type: "input",
    message: "Enter your GitHub username",
    name: "username",
  });
  return username;
}

// function to run axios API call using username as parameter for search, returns API call info as data
function getData(username) {
  let data = axios.get(`https://api.github.com/users/${username}`);
  return data;
}

// function to run axios API call using username as search parameter, returns API call info as starData
function getStars(username) {
  let starData = axios.get(`https://api.github.com/users/${username}/starred`);  
  return starData;
}

// function to get color input from user and return input as color
function getColor() {
  const color = inquirer.prompt({
    type: "rawlist",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"],
  });
  return color;
}

async function createPDF(html) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`${html}`);
  await page.pdf({ path: "profile.pdf", format: "Letter" });

  await browser.close();
};
