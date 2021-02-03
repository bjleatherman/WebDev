class GameConfig{
    constructor(userMap, enemyMap, mapSize, islandList, parentIslandGenerationThreshold, childIslandGenerationThreshold, health, mines, drones, sneak, torpedo, sonar, healthMax, minesMax, dronesMax, sneakMax, torpedoMax, sonarMax) {
        this.userMap = userMap;
        this.enemyMap = enemyMap;
        this.mapSize = mapSize;
        this.islandList = islandList;
        this.parentIslandGenerationThreshold = parentIslandGenerationThreshold;
        this.childIslandGenerationThreshold = childIslandGenerationThreshold;
        this.health = health;
        this.mines = mines;
        this.drones = drones;
        this.sneak = sneak;
        this.torpedo = torpedo;
        this.sonar = sonar;
        this.healthMax = healthMax;
        this.minesMax = minesMax;
        this.dronesMax = dronesMax;
        this.sneakMax = sneakMax;
        this.torpedoMax = torpedoMax;
        this.sonarMax = sonarMax;
    }
    
    getUserMap(){return this.userMap;}

    setUserMap(x){
        //TODO: datastructure of somekind
        //TODO: check constraints
        this.userMap.push(x);
    }

    getEnemyMap(){return this.enemyMap;}

    setEnemyMap(){
        //TODO: datastructure of somekind
    }

    getMapSize(){return this.mapSize;}

    setMapSize(x){
        //TODO: test/sanitize
        this.mapSize = this.x;
    }

    getParentIslandGenerationThreshold(){return this.parentIslandGenerationThreshold;}
    
    setParentIslandGenerationThreshold(x){
        //TODO: test/sanitize
        this.parentIslandGenerationThreshold = this.x;
    }

    getChildIslandGenerationThreshold(){return this.childIslandGenerationThreshold;}

    setChildIslandGenerationThreshold(){
        //TODO: test/sanitize
        this.childIslandGenerationThreshold = this.x;
    }

    getHealth(){return this.health;}

    setHealth(x){
        //TODO: test/sanitize
        this.health = this.x;
    }

    getMines(){return this.mines;}

    setMines(x){
        //TODO: test/sanitize
        this.mines = this.x;
    }

    getDrones(){return this.drones;}

    setDrones(x){
        //TODO: test/sanitize
        this.drones = this.x;
    }

    getSneak(){return this.sneak;}

    setSneak(x){
        //TODO: test/sanitize
        this.sneak = this.x;
    }

    getTorpedo(){return this.torpedo;}

    setTorpedo(x){
        //TODO: test/sanitize
        this.torpedo = this.x;
    }

    getSonar(){return this.sonar;}

    setSonar(x){
        //TODO: test/sanitize
        this.sonar = this.x;
    }

    getHealthMax(){return this.healthMax;}

    setHealthMax(x){
        //TODO: test/sanitize
        this.healthMax = this.x;
    }

    getMinesMax(){return this.minesMax;}

    setMinesMax(x){
        //TODO: test/sanitize
        this.minesMax = this.x;
    }

    getDronesMax(){return this.dronesMax;}

    setDronesMax(x){
        //TODO: test/sanitize
        this.dronesMax = this.x;
    }

    getSneakMax(){return this.sneakMax;}

    setSneakMax(x){
        //TODO: test/sanitize
        this.sneakMax = this.x;
    }

    getTorpedoMax(){return this.torpedoMax;}

    setTorpedoMax(x){
        //TODO: test/sanitize
        this.torpedoMax = this.x;
    }

    getSonarMax(){return this.sonarMax;}

    setSonarMax(x){
        //TODO: test/sanitize
        this.sonarMax = this.x;
    }
}

//future page should use JSON to load config, other classes go from there
class GameBoard extends GameConfig{ 
    constructor(){
        super(userMap, enemyMap, mapSize, parentIslandGenerationThreshold, childIslandGenerationThreshold);
    }

}

//Try to use Inheritance lol
//Probably could've just made user player and an enemy player ¯\_(ツ)_/¯
class Player extends GameConfig{
    constructor(){
        super(Map, enemyMap, health, mines, drones, sneak, torpedo, sonar);
    }
}

//Dont Use: create user player instead
class User extends Player{
    constructor(){
        super(Map, health, mines, drones, sneak, torpedo, sonar);
    }
}
//Dont Use: create user player instead
class Enemy extends Player{
    constructor(){
        super(enemyMap, health, mines, drones, sneak, torpedo, sonar);
    }  
}
