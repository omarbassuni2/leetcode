/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // Initialize a visited set
    const visited = new Set([0]), stack = [...rooms[0]];
    // use dfs and check for every child, and if its not in the visited set then add it
    while(stack.length) {
        const curr = stack.pop();
        if(visited.has(curr))   continue; 
        visited.add(curr);
        stack.push(...rooms[curr]);
    }
    // you can return visited set === n - 1, because all keys are distinct
    return visited.size === rooms.length;
};