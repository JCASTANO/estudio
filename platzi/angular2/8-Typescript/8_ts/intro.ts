interface User{
  name : string,
  age : number,
  date : string
}

class UserAdd{
  users : User [ ];
  add ( user : User){
    this.users.push( user);
  }
}

var user_1 : User= {
  name : 'Josue',
  age : 30,
  date : '20/12/2016'
}


var u = new UserAdd();
u.add( user_1);
