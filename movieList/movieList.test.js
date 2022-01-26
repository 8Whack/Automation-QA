const {Builder, Capabilities} = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

let {addMovie, deleteMovie, crossOffMovie, findMessage} = require("./tests.js")

beforeAll(async ()=>{
    await driver.get('http://localhost:5500/movieList/index.html');
});

afterAll(async ()=>{
    await driver.quit();
});

test("add a movie to the list", async () =>{
    await addMovie(driver);
    //add a .sleep() to make the driver wait for a bit
    await driver.sleep(1001);
})

test('cross off a movie', async () =>{
    await crossOffMovie(driver);
    await driver.sleep(1001);
})

test('test if update message is right', async ()=>{
    await findMessage(driver);
    await driver.sleep(1001);
})

test('Delete a movie from the list', async ()=>{
    await deleteMovie(driver);
    await driver.sleep(1001);
})

