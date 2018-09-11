const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentViews = require('./views/instrument_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

    //The MENUVIEW shows the instruments, choosing
    // one by selecting from the dropdown menu

  const  instrumentFamilies = new InstrumentFamilies();
  const instrumentView = new InstrumentViews();
  instrumentView.bindEvents(instrumentFamilies);

    // let instruments = new InstrumentFamilies;
    // let dropDownItems = instruments.instrumentFamilies.map(x => x.name);

});
