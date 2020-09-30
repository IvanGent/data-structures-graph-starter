function breadthFirstSearch(startingNode, targetVal) {
    const queue = [startingNode];
    const visited = [startingNode];

    let currNode;
    while (queue.length) {
        currNode = queue.shift();
        if (currNode.val === targetVal) return currNode;
        currNode.neighbors.forEach(neighbor => {
            if (!visited.includes(neighbor)) {
                visited.push(neighbor);
                queue.push(neighbor);
            }
        })
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};
