import Building from './5-building';


class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'This is a test evacuation warning message.';
  }
}


const building = new TestBuilding(120);
console.log(building.sqft);
console.log(building.evacuationWarningMessage());
