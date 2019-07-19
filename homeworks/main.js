function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.maxHealth = health;
    this.distance = 0;
    this.maxDistance = distance;
}

MilitaryResource.prototype.isReadyToMove  = function() {
    return this.maxDistance > this.distance;
}

MilitaryResource.prototype.isReadyToFight  = function() {
    return this.health > 0;
}

MilitaryResource.prototype.restore  = function() {
    if (this.health === 0 || this.distance === 0) {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
        return 'Restored!';
    } else {
        return 'GO GO GO!';
    }
}

MilitaryResource.prototype.clone  = function() {
    return new MilitaryResource(this.type, this.maxHealth, this.maxDistance);
}
 
function Squad(resources) {
    this.resources = resources && resources.length ? 
    resources.map(function(res){
        return res;
    }) : [];
}

Squad.prototype.isReadyToMove = function() {
    return this.resources.every(function(res) {
        return res.isReadyToMove();
    });
}

Squad.prototype.isReadyToFight = function() {
    return this.resources.every(function(res) {
        return res.isReadyToFight();
    });
}

Squad.prototype.restore = function() {
    this.resources.forEach(function(res) {
        return res.restore();
    });
    return this.resources;
}

Squad.prototype.getReadyToMoveResources = function() {
    return this.resources.filter(function(res) {
        return res.isReadyToMove();
    });
}

Squad.prototype.combineResouces = function() {
    return this.resources.sort(function() {
        return Math.round(Math.random()) - 0.5;
    });
}

Squad.prototype.clone = function() {
    return new Squad(this.resources.map(function(res) {
        return res.clone();
    }));
}

//tests

var mordecai = new MilitaryResource('hunter', 300, 600);
var roland = new MilitaryResource('soldier', 400, 700);
var lilith = new MilitaryResource('siren', 300, 600);
var brick = new MilitaryResource('berserker', 500, 1000);
var lilithClone = lilith.clone();

console.log('Lilith is ready to move - ', lilith.isReadyToMove());
console.log('Lilith is ready to fight - ', lilith.isReadyToFight());
console.log('Lilith cloned: ', lilith.clone());
console.log('Lilith restored - ', lilith.restore());

var resourcesArray = [
    mordecai,
    roland,
    lilith,
    brick,
    lilithClone
];

var squad = new Squad(resourcesArray);

console.log('Squad is ready to move - ', squad.isReadyToMove());
console.log('Squad is ready to fight - ', squad.isReadyToFight());
console.log('Squad get ready to move: ', squad.getReadyToMoveResources());
console.log('Clone squad: ', squad.clone());
console.log('Squad restored!', squad.restore());