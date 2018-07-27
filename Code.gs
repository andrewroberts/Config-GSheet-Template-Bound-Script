var SCRIPT_NAME = 'Config - GSheet Template Bound Script'
var SCRIPT_VERSION = 'v1.0'

function onOpen() {
  SpreadsheetApp
    .getUi()
    .createMenu('[ Config ]')
    .addItem('Store active config sheet ID for active user', 'initialise')
    .addToUi()
}

function initialise() {
  Config.initialise({
    email: Session.getActiveUser().getEmail(),
    spreadsheetId: SpreadsheetApp.getActive().getId(),
  })
}