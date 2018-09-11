const InstrumentFamilies = require('../models/instrument_families.js');

const PubSub = require('../helpers/pub_sub.js');

const InstrumentView = function(){
};

InstrumentView.prototype.bindEvents = function(instruments){
    let dropDownItems = instruments.instrumentFamilies.map(x => x.name); //make new array of adding each element
    let addDropDownDOM = document.getElementById("instrument-families");

    for(let i = 0; i < dropDownItems.length; i++) {
        let item = dropDownItems[i];
        let instrumentForMenu = document.createElement("option");
        instrumentForMenuId = document.createElement("id");
        instrumentForMenu.id = item;
        instrumentForMenu.textContent = item;
        addDropDownDOM.appendChild(instrumentForMenu)
    }

    const selectedElement = document.querySelector('select#instrument-families');
    PubSub.publish('InstrumentView:selected', selectedElement);
    //console.log(selectedElement)
}



module.exports = InstrumentView;