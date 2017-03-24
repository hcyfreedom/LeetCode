/**
 * Created by Acer on 2017/3/24.
 */
function LinkNode(node) {
    this.val = node;
    this.next = null;
}
function printListFromTailToHead(head) {
        var arr = [];
        while(head){
            arr.unshift(head.val);
            head = head.next;
        }
        return arr;
}

var a = new LinkNode(5);
a.next = new LinkNode(9);
a.next.next = new LinkNode(10);
console.log(printListFromTailToHead(a))