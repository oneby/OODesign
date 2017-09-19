function Subject() {
    this.data = new Object();
    this.observers = new Array();
}
Subject.prototype.registerObserver = function(o) {
    this.observers.push(o);
}
Subject.prototype.removeObserver = function(o) {
    this.observers.remove(o);
}
Subject.prototype.notifyObserver = function() {
    for (let o in this.observers)
        this.observers[o].update(this.data);

}
Subject.prototype.setData = function(data) {
    this.data = data;
    this.dataChanged();
}
Subject.prototype.dataChanged = function() {
    this.notifyObserver();
}

function Observer() {
    this.data = new Object();
}
Observer.prototype.update = function(data) {
    this.data = data;
    this.show();
}
Observer.prototype.show = function() {
    for (let index in this.data)
        console.log(this.data[index]);
}

let subject = new Subject();
let observer1 = new Observer();
let observer2 = new Observer();
subject.registerObserver(observer1);
subject.registerObserver(observer2);
subject.setData({ id: 12, name: "one" });
subject.setData({ id: 14, name: "two" });