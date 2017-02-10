/**
 * Created by Acer on 2017/2/10.
 */
var reverse = function (x) {

    // var max = 0x7fffffff;//最大值
    // var min = 0x80000000;//最小值
    var sum = 0;
    // var eps = 0.1;
    // console.log(x);
    while (x){
        var temp = x%10;//取余
        sum = sum*10 + temp;
        // if (sum>max || sum<min)//溢出处理
        // {
        //     sum = sum >0 ? max:min;
        //     return sum;
        // }
        x =Math.floor(x/10);
        // console.log(x);
    }
    return sum;
};
// console.log(x);
console.log(reverse(123));
// reverse(123);