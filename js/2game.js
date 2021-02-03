//TODO: ensure that getters for arrays have overloads that allow for the return of specfic entries
class ProgressBarData {
    constructor(name, maxValue, increaseOnIncrement, addProgressBarClass, progressBarId, buttonClass, buttonId){
        this.name = name;
        this.maxValue = maxValue;
        this.increaseOnIncrement = increaseOnIncrement; //bool
        this.addProgressBarClass = addProgressBarClass;
        this.progressBarId = progressBarId;
        this.buttonClass = buttonClass;
        this.buttonId = buttonId;

        console.log("ProgressBarObj: "+this.name+" created");
    }

    getName(){return this.name;}
    setName(x){this.name = x;}

    getMaxValue(){return this.maxValue;}
    setMaxValue(x){this.maxValue = x;}

    getIncreaseOnIncrement(){return this.increaseOnIncrement;}
    setIncreaseOnIncrement(x){this.increaseOnIncrement = x;} //TODO: ensure mutations are bool

    getAddProgressBarClass(){return this.addProgressBarClass;}
    setAddProgressBarClass(x){this.addProgressBarClass = x;} //Use setter to change color of full bars?

    getProgressBarId(){return this.progressBarId;}
    setProgressBarId(x){this.name = progressBarId;} //probably dont need this

    getButtonClass(){return this.buttonClass;}
    setButtonClass(x){this.name = buttonClass;} //Use setter to change color when full bars?
    
    getButtonId(){return this.buttonId;}
    setButtonId(x){this.name = buttonId;} //probably dont need this
}

class Terrain{
    constructor(doGenerateTerrrain, terrainMap, innerTerrainSeeds, outerTerrainSeeds, innerIslandGenerationThreshold, outerIslandGenerationThreshold){
        this.doGenerateTerrrain = doGenerateTerrrain; //bool
        this.terrainMap = terrainMap;
        this.outerTerrainSeeds = outerTerrainSeeds;
        this.innerTerrainSeeds = innerTerrainSeeds;
        this.outerIslandGenerationThreshold = outerIslandGenerationThreshold;
        this.innerIslandGenerationThreshold = innerIslandGenerationThreshold;

        console.log("Terrain Obj Created");
    }

    getDoGenerateTerrrain(){return this.doGenerateTerrrain;}
    setDoGenerateTerrrain(x){this.doGenerateTerrrain = x;} //ensure that mutations are bool

    getTerrainMap(){return this.terrainMap;}
    setTerrainMap(x){this.terrainMap = x;} //should have overload for .push() and whole []

    getOuterTerrainSeeds(){return this.outerTerrainSeeds;}
    setOuterTerrainSeeds(x){this.outerTerrainSeeds = x;} //should have overload for .push() and whole []

    getInnerTerrainSeeds(){return this.innerTerrainSeeds;}
    setInnerTerrainSeeds(x){this.innerTerrainSeeds = x;} //should have overload for .push() and whole []

    getOuterIslandGenerationThreshold(){return this.outerIslandGenerationThreshold;}
    setOuterIslandGenerationThreshold(x){this.outerIslandGenerationThreshold = x;}

    getInnerIslandGenerationThreshold(){return this.innerIslandGenerationThreshold;}
    setInnerIslandGenerationThreshold(x){this.innerIslandGenerationThreshold = x;}
}

class Gameboard{ 
    constructor(gameboardLength, gameboardHeight, divisionLength, laidMinesMap){
        console.group("Gameboard");
        console.log("Gameboard Obj Created");

        this.gameboardLength = gameboardLength;
        this.gameboardHeight = gameboardHeight;
        this.divisionLength = divisionLength;
        this.laidMinesMap = laidMinesMap; //[] of landMine obj. 2 vals: int location, bool hidden
        let mapOuterBorders = this.findOuterBorders(gameboardLength, gameboardHeight);
        let mapInnerBorders = this.findInnerBorders(gameboardLength, gameboardHeight, divisionLength);
    }

    getGameboardLength(){return this.gameboardLength;}
    setGameboardLength(x){this.gameboardLength = x;} //used if implementing a generate new size button

    getGameboardHeight(){return this.gameboardHeight;}
    setGameboardHeight(x){this.gameboardHeight = x;} //used if implementing a generate new size button

    getDivisionLength(){return this.divisionLength;}
    setDivisionLength(x){this.divisionLength = x;}

    getLaidMinesMap(){return this.laidMinesMap;}
    setLaidMinesMap(x){this.laidMinesMap = x;} //should have overload for .push() and whole []

    getMapOuterBorders(){return this.mapOuterBorders;}
    setMapOuterBorders(x){this.mapOuterBorders = x;} //probs dont need this

    getMapInnerBorders(){return this.mapInnerBorders;}
    setMapInnerBorders(x){this.mapInnerBorders = x;} //probs dont need this

    findOuterBorders(length, height) {
        let outerBorders = [];
        for (let i = 0; i < length; i ++){
            $('#'+i).addClass('top-border');
        }
        for (let i = 0; i < length * height; i += length){
            outerBorders.push(i);
        }
        for (let i = outerBorders[outerBorders.length-1]; i < length * height; i ++){
            outerBorders.push(i);
        }
    }

    findInnerBorders(length, height, divisionLength){
        console.groupEnd("Gameboard");
        return 0;
        //write algorithm to find inner borders
    }

}

class Player{
    constructor(currentLocation, directionHistory, currentHealth, currentMines, currentDrones, currentSneak, currentTorpedo, currentSonar){
        this.currentLocation = currentLocation;
        this.directionHistory = directionHistory;
        this.currentHealth = currentHealth;
        this.currentMines = currentMines;
        this.currentDrones = currentDrones;
        this.currentSneak = currentSneak;
        this.currentTorpedo = currentTorpedo;
        this.currentSonar = currentSonar;

        console.log("Player Obj Created");
    }

    getCurrentLocation(){return this.currentLocation;}
    //if new location is valid, call setDirectionHistory and update from here
    setCurrentLocation(x){this.currentLocation = x;} //TODO: ensure that value is on the currentLocation //NOTE: check move integrity elsewhere?

    getDirectionHistory(){return this.directionHistory;}
    //should have overload for .push() and whole []
    setDirectionHistory(x){this.directionHistory = x;} //TODO: ensure that value == N,S,E,W

    getCurrentHealth(){return this.currentHealth;}
    setCurrentHealth(x){this.currentHealth = x;} //TODO: check value against max

    getCurrentMines(){return this.currentMines;}
    setCurrentMines(x){this.currentMines = x;} //TODO: check value against max

    getCurrentDrones(){return this.currentDrones;}
    setCurrentDrones(x){this.currentDrones = x;} //TODO: check value against max

    getCurrentSneak(){return this.currentSneak;}
    setCurrentSneak(x){this.currentSneak = x;} //TODO: check value against max

    getCurrentTorpedo(){return this.currentTorpedo;}
    setCurrentTorpedo(x){this.currentTorpedo = x;} //TODO: check value against max

    getCurrentSonar(){return this.currentSonar;}
    setCurrentSonar(x){this.currentSonar = x;} //TODO: check value against max
}

//TODO: make this into a list, location = id, who laid = value
class LandMine{
    constructor(location, shownToUser){
        this.location = location; //probs const
        this.shownToUser = shownToUser; //bool //probs const
    }

    getLocation(){return this.location;}
    setLocation(x){this.location = x;} //probs dont need this

    getShownToUser(){return this.shownToUser;}
    setShownToUser(x){this.shownToUser = x;} //bool //probs dont need this
}