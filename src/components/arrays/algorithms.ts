
const nums = [3, 2, 4];
const target = 6;
export const twoSum = (nums: Array<number>, target: number) => {
    for (let i = nums.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[i] + nums[j] === target)
                return [j, i];
        }
    }
}
