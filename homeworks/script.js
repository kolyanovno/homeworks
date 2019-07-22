function Human() {
    this.type = 'homo sapiens';
}

Human.prototype.move = function() {
    console.log('Walk');
}

Human.prototype.constructor = Human;

function Child() {
    Human.call(this);
    this.occupation = 'learner';
}

Child.prototype = Object.create(Human.prototype);
Child.prototype.constructor = Child;

Child.prototype.goal = function() {
    console.log('Play!');
}

function Adult() {
    Human.call(this);
    this.occupation = 'worker';
}

Adult.prototype = Object.create(Human.prototype);
Adult.prototype.constructor = Adult;

Adult.prototype.goal = function() {
    console.log('Get more money!');
}

function Old() {
    Human.call(this);
    this.occupation = 'retiree';
}

Old.prototype = Object.create(Human.prototype);
Old.prototype.constructor = Old;

Old.prototype.goal = function() {
    console.log('Get more rest!');
}

function Humanist() {
    Adult.call(this);
    this.interests = 'social sciences';
}

Humanist.prototype = Object.create(Adult.prototype);
Humanist.prototype.constructor = Humanist;

Humanist.prototype.thoughts = function() {
    console.log('Nietzsche advanced an interesting theory...');
}

function Technologist() {
    Adult.call(this);
    this.interests = 'exact sciences';
}

Technologist.prototype = Object.create(Adult.prototype);
Technologist.prototype.constructor = Technologist;

Technologist.prototype.thoughts = function() {
    console.log('How soon a human’s brain can be digitized?');
}

function NuclearPhysicist() {
    Technologist.call(this);
    this.learning = 'processes of the universe';
}

NuclearPhysicist.prototype = Object.create(Technologist.prototype);
NuclearPhysicist.prototype.constructor = NuclearPhysicist;

NuclearPhysicist.prototype.tool = function() {
    console.log('Nuclear reactions');
}

function Programmer() {
    Technologist.call(this);
    this.learning = '100101001101001101'
}

Programmer.prototype = Object.create(Technologist.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.tool = function() {
    console.log('Computer, knee, rubber duck');
}

function WebDeveloper() {
    Programmer.call(this);
    this.language = 'HTML, CSS, Java Script';
}

WebDeveloper.prototype = Object.create(Programmer.prototype);
WebDeveloper.prototype.constructor = WebDeveloper;

WebDeveloper.prototype.problem = function() {
    console.log('Internet Explorer');
}

var human = new Human(),
    child = new Child(),
    adult = new Adult(),
    old = new Old(),
    humanist = new Humanist(),
    technologist = new Technologist(),
    nuclearPhysycyst = new NuclearPhysicist(),
    programmer = new Programmer(),
    webDev = new WebDeveloper();

console.log(
    human.move(), 
    child.goal(), 
    adult.goal(), 
    old.goal(), 
    humanist.thoughts(), 
    technologist.thoughts(), 
    nuclearPhysycyst.tool(), 
    programmer.tool(),
    webDev.problem()
);