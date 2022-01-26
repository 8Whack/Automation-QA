const {By} = require('selenium-webdriver');

module.exports = {
    addMovie: async (driver) =>{
        //access input field
        await driver.findElement(By.xpath('//input')).sendKeys('The Batman');

        //with xpath, select and click the button element.
        await driver.findElement(By.xpath('//button')).click();

        const movie = await driver.findElement(By.xpath('//li'));
        const displayed = movie.isDisplayed();

        expect(displayed).toBeTruthy();
    },
    crossOffMovie: async (driver) =>{
        await driver.findElement(By.xpath('//span')).click();
        const title = await driver.findElement(By.xpath('//span[@class="checked"]'));
         const checked = title.isDisplayed();
        expect(checked).toBeTruthy();
    },
    findMessage: async(driver) =>{
        await driver.findElement(By.xpath('//span')).click();
        const message = await driver.findElement(By.id('message')).getText()
        expect(message).toBe('The Batman added back!')
    },
    deleteMovie: async (driver)=>{
        let removeButton = await driver.findElements(By.xpath('//li/button'));
        await removeButton[0].click();
      
        
        let removeButtonOne = await driver.findElements(By.xpath('//li/button'));
    expect(removeButtonOne).toHaveLength(0);
    }
}