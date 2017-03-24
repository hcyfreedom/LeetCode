
function findTarget(array,target) {
    var len = array.length;
    var i = len - 1;
    var j = 0;

    while(i >= 0 && array[i][j]){
        if (target > array[i][j]){
            j ++;
        }else if (target < array[i][j]){
            i --;
        }else {
            console.log('目标元素在第' + i + '行，' + '第' +j + '列');
            // console.log(`目标元素处于第${i}行，第${j}列`);
            return true;
        }
    }

    // console.log(`没有哦~`);
    return false;
}
// var arr = [[0,1,2,3,4],[1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8]];
// var arr = [[1,3,5,7,9],[2,8,11,19,30]]
var arr=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];

console.log(arr);
findTarget(arr,5);

//
// function find(ary,num) {
//     var rstart = 0;//行首
//     var rend = ary.length;//行尾
//
//     var cstart = 0;//列首
//     var cend = ary[0].length;//列尾
//
//     var rmid = 0;//行中点
//     var cmid = 0;//列中点
//
//     function recusion() {
//         rmid = Math.floor(rstart + rend);
//         cmid = Math.floor(cstart + cend);
//
//
//         if(num == ary[rmid][cmid]){
//             console.log(rmid + '，' +cmid)
//             return true;
//         }else if (num > ary[rmid][cmid]){
//             rstart = rmid;
//             cstart = cmid;
//         }else {
//             rend = rmid;
//             cend = cmid;
//         }
//
//         if (rstart === rend && cstart === cend){
//             console.log("错了")
//             return false
//         }
//
//         recusion();
//     }
// }
//
// var arr=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
// find(arr,5);