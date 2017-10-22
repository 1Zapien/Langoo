var ds = require('datastructures-js');
var lang = ['english', 'spanish', 'japanese', 'chinese' ]


console.log("hello");

var table = ds.hashtable();
for(var i = 0; i<lang.length;i++ ){

  var q = ds.queue();
  table.put(lang[i], q);
}

///

table.get(lang[1]).enqueue(1);
var x = table.get(lang[1]);
x.enqueue(2);
x.dequeue();
console.log(x.front());
console.log(table.get(lang[1]).front());

table.get(lang[1]).dequeue();


console.log(table.get(lang[1]).front());

console.log(x);
x.dequeue();

console.log(table.get(lang[1]).front());







////
