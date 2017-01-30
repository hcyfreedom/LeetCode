/**
 * Created by Acer on 2017/1/30.
 */
var twoSum= function (nums,target) {
    var sourceItem = nums;
    var taegetItem = target;
    for(var i in nums){
        for(j in nums){
            if (nums[i]+nums[j]===target && i!=j){
                return [parseInt(i),parseInt(j)]
            }
        }
    }
};