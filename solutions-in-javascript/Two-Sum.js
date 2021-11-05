// Time: O(n) | Space: O(n)
var twoSum = function (nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    let compliment = Math.abs(target - nums[i])

    if (compliment in obj) {
      return [obj[compliment], i]
    } else {
      obj[nums[i]] = i
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
