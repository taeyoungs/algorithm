// #1 Set을 이용한 방식
function solution1(nums) {
  const set = new Set(nums);
  const max = nums.length / 2;

  return set.size > max ? max : set.size;
}

// #2 Map을 이용한 방식
function solution2(nums) {
  const map = new Map();
  const max = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      continue;
    }

    map.set(nums[i], 1);
  }

  return map.size > max ? max : map.size;
}
