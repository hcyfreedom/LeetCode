# LeetCode
<style>
p{
font-size:15px;
}
</style>
<h2>twoSum.js<br>
<p>给定一个目标值，总是可以从数组中找到两个数相加而得。</p><br>
<h2>addTwoNumbers<br>
<p>给出两个链表，代表两个倒序的数，计算链表和，即相当于，给出链表l1:2 -> 4 -> 3,
给出了链表l2:5 -> 6 -> 4,相加，得到 7 -> 0 ->8.就是倒序的两数相加，满十即向前进一。哎嘿，突然想起来汇编。。涉及链表和进位的知识。要注意的几点：<br>
1、js用函数定义singly-linked;  2、题目并没有说两个链表的长度相同，使用较长的链表的值，应该顺接在结果后面； 3、如果两个链表最后节点相加结果有进位，最终结果应该将进位单独算作一个节点。</p>
