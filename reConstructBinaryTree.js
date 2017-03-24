/**
 * Created by Acer on 2017/3/24.
 */
function TreeNode(treeNode) {
    this.val = treeNode;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(preorder,inorder) {
    if (!preorder||preorder.length === 0){
        return false;
    }

    var treeNode = {
        var : preorder[0]
    }

    for(var i = 0; i< preorder.length; i++){
        if (inorder[i] === preorder[0]){
            treeNode.left = reConstructBinaryTree(preorder.slice(1,i+1),inorder.slice(0,i));
            treeNode.right = reConstructBinaryTree(preorder.slice(i+1),inorder.slice(i+1));
        }

    }

    console.log(treeNode);
    return treeNode;
}
 var a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
a.right.right = new TreeNode(5);
a.left.right = new TreeNode(6);
a.left.left.left = new TreeNode(7);
a.right.left = new TreeNode(8);
a.right.right.left = new TreeNode(9);


reConstructBinaryTree(['A','B','C','E','D','F','G','H','I'],['E','C','B','D','A','G','F','I','H']);
