var ds = require('datastructures.js');
var u = require('../user.js');
var lang = {'english', 'spanish', 'japanese', 'chinese'}

var table = ds.hashtable();
var active = ds.hashtable();
var sessions = ds.hashtable();


for( var i = 0; i < lang.length;i++ ){

  var q = ds.queue();
  table.put(lang[i], q);
}





function inputUser (user, langK, langL  ) {

  var total = langK.concat(langL);
  if(active_users.get(user.useername) == null ){
    active.put(user.username, total);
  }
  else {
    return 0;
  }

  for( var i = 0; i<langK.length; i++){
    var data = table.get(langK[i]);
    data.enqueue(user);
    //table.put(lang, data);
  }
  for( var i = 0; i< langL[i]; i++ ){
    var data = table.get(langL[i]);
    data.enqueue(user);
    //table..put(lang,data);
  }

  return 1;

}


//everytime we refresh the platform

function match(){

  while( true ) {
    var range = lang.length()
    var first = Math.floor((Math.random() * range) + 1);
    var firstL = lang[first];
    var firstQ =table.get(firstL);

    var user1 = firstQ.front();

    if( user1.InSession == true ){
      firstQ.dequeue();
      continue;
    }

    var learn = active.get(user1.username);
    var range = learn.length()
    var second = Math.floor((Math.random() * range) + 1);
    var secondL = lang[second];
    var secondQ = table.get(secondL);

    var user2 = secondQ.front();

    if( user2.InSession == true ){
      secondQ.dequeue();
      continue;
    }

    //connect user1 and user 2


  }

}
