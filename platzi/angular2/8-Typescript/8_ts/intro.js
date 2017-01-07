var UserAdd = (function () {
    function UserAdd() {
    }
    UserAdd.prototype.add = function (user) {
        this.users.push(user);
    };
    return UserAdd;
}());
var user_1 = {
    name: 'Josue',
    age: 30,
    date: '20/12/2016'
};
var u = new UserAdd();
u.add(user_1);
