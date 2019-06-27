function myClass(){

}
myClass.prototype.a = function(){
    console.log('aaaaa');
}
myClass.prototype.b = function(){
    console.log('bbbb');
}
let my = new myClass();

my.a();
my.b();
