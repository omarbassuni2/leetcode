class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {};
        for i in range(len(nums)):
            hashMap[nums[i]] = i;
        for i in range(len(nums)):
            remainder = target - nums[i]
            if(remainder in hashMap and hashMap[remainder] != i):
                return [i, hashMap[remainder]];