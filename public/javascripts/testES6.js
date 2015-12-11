/**
 * Created by ad on 2015/12/7.
 */

var human = {
    breathe() {
        alert('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        alert('working...');
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’
var sum = (num1, num2) => {
    return num1 + num2;
}
alert(sum(1, 2));
var array = [1, 2, 3];
//ES6
array.forEach(v => alert(v));
