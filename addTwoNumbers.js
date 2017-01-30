/**
 * Created by Acer on 2017/1/30.
 */
//js中使用函数来定义链表。
// function List(val) {
//     this.val = val;
//     this.next = null;
// }

var addTwoNumbers = function (l1,l2) {
    var sum = l1.val + l2.val;//首先计算两个链表头部的和
    var next1 = l1.next,next2 = l2.next;
    var l3 = new ListNode(sum%10);//将和的个位赋予结果l3的头部节点
    var node = l3;//使用新的指针指向结果l3用于后面移动存储结果
    sum = Math.floor(sum/10);//取到进位的数值
//输出l3结束的条件有两个，l1和l2均已结束；当前无进位。
    while(next1||next2||sum!==0){
        sum+=(next1?next1.val:0)+(next2?next2.val:0);
        node.next = new ListNode(sum%10);//令l3当前节点的下一节点为一个新链表并和的个位保存进去
        node = node.next;//移动到l3的下一个节点
        next1 = next1?next1.next:null;
        next2 = next2?next2.next:null;
        sum = Math.floor(sum/10);//计算进位值
    }
    return l3;
}