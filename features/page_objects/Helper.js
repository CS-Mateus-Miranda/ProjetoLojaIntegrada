class Helper{
  slowType(elemento, keys) {
      var action = browser.actions().mouseMove(elemento).click();

      for (var i = 0; i < keys.length; i++) {
          action = action.sendKeys(keys[i]);
          browser.sleep(5000);
      }
      return action.perform();
  }
}

module.exports = Helper;
