const json = '{"first":"Himanshu", "last": "Singh"}';
const name = JSON.parse(json);

document.write(name.first);
document.write(name.last)