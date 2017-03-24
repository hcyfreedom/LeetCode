# LeetCode
<style>
p{font-size:15px;}
</style>
<h2>twoSum.js<br>
<p>给定一个目标值，总是可以从数组中找到两个数相加而得。</p><br>
<h2>addTwoNumbers<br>
<p>给出两个链表，代表两个倒序的数，计算链表和，即相当于，给出链表l1:2 -> 4 -> 3,
给出了链表l2:5 -> 6 -> 4,相加，得到 7 -> 0 ->8.就是倒序的两数相加，满十即向前进一。哎嘿，突然想起来汇编。。涉及链表和进位的知识。要注意的几点：<br>
1、js用函数定义singly-linked;  2、题目并没有说两个链表的长度相同，使用较长的链表的值，应该顺接在结果后面； 3、如果两个链表最后节点相加结果有进位，最终结果应该将进位单独算作一个节点。</p>
<h2>reverse integer<br>
<p>整数逆序输出<br>
<p>遇到的问题：<br>
<p>可以看到代码里面有我注释掉的溢出判断。打印的时候一直打印出来“2147483647”，很头疼这是为什么错，因为逻辑很简单啊，汇编，数据结构作业，都写过啊，不可能有问题啊。结果呢，打印了x看到还是原来的数，说明x/10的时候就被判断成溢出并且是min了。在acm大神的帮助下，终于明白了，原来，这里不是32位整形数，var的符号位是第64位，这里的min
根本不是最小数，反而是最大数；最小数应该是：0x8000000000000000，最大是0x7fffffffffffffff，16个数。
<br>好的，像我这么懒的人，一定会深深记住这次的教训，谢谢我腿儿的评价：你错的很厉害嘛。对了一gay打游戏不理我，呵呵。
<br>ps:在Java里是对的。

<h2>FindInTwodimArray.js<br>
<p>输入一个二维数组，每一行从左到右递增，没一列从上到下递增；输入一个值，查找，这个值是否在这个二维数组里。</p><br>
<p>思路就是，二维数组的长度就是有多少行。左下角元素，与目标值相比较。如果目标值小于左下角元素就往上，大于就往右。相等就返回TRUE。

<h2>printListFromTailToHead<br>
<p>从头到尾打印链表元素<br>
<p>可以用unshift——将一个或多个元素加入数组头部。

<h2>reConstructBinaryTree<br>
<p>输入前序遍历、中序，重建二叉树；规定输入的前序、中序的结果中都不含重复数字。
<p>前序：根左右；中序：左根右；前序的第一个节点就是根节点；中序的根节点位于中间位置m，m的左边是根节点左子树的中序遍历，右边是根节点的右子树的中序遍历；<br>
<p>同样的，在前序中，第二个位置到m，是根节点左子树的前序遍历，剩下的m右边的是根节点右子树的前序遍历。