/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const set = new Set();
    set.add(0);
    const queue = [...rooms[0]];
    while(queue.length){
        let tempRoom = queue.shift();
        if(!set.has(tempRoom)){
            set.add(tempRoom);
            queue.push(...rooms[tempRoom]);
        }
    }
    for(var i = 0; i < rooms.length; i += 1){
        if(!set.has(i)) return false;
    }
    return true;
};