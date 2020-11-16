//1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

//2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
    var total = fruit['apple'] + fruit['pear'] + fruit['peach'];
    console.log(total);