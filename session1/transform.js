function transform(nums){
    const squares = [];
    for (const num of nums){
        squares.push(num*num);
    }
    console.log(squares)
    squares.sort()
    
    return squares
    
}

const nums = [4, 9, 5, 3, 8];
const sortedSquaredNums = transform(nums);
console.log(sortedSquaredNums); 