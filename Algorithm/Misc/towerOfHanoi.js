//? Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod A. 
//? The objective of the puzzle is to move the entire stack to another rod (here considered C), obeying the following simple rules: 
//? =>Only one disk can be moved at a time.
//? =>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
//? =>No disk may be placed on top of a smaller disk.

//*The idea is to use the helper node to reach the destination using recursion. Below is the pattern for this problem:
//* => Shift ‘N-1’ disks from ‘A’ to ‘B’, using C.
//* => Shift last disk from ‘A’ to ‘C’.
//* => Shift ‘N-1’ disks from ‘B’ to ‘C’, using A.

function towerOfHanoi(diskN, startingRod, endingRod, helperRod) {
    if (diskN == 1) {
        console.log(`Move disk ${diskN} from ${startingRod} to ${endingRod}`);
        return;
    }
    towerOfHanoi(diskN - 1, startingRod, helperRod, endingRod);
    console.log(`Move disk ${diskN} from ${startingRod} to ${endingRod}`);
    towerOfHanoi(diskN - 1, helperRod, endingRod, startingRod);


}

console.log("1 Disk:")
towerOfHanoi(1, 'A', 'C', 'B');
console.log("\n2 Disks:");
towerOfHanoi(2, 'A', 'C', 'B');
console.log("\n3 Disks:");
towerOfHanoi(3, 'A', 'C', 'B');
console.log("\n4 Disks:");
towerOfHanoi(4, 'A', 'C', 'B');
