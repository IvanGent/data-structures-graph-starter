function maxValue(node, visited=new Set()) {
    const stack = [node];
    let max;
    let currNode;
    while (stack.length) {
        visited.add(currNode);
        currNode = stack.pop();
        if (!max) {
            max = currNode.val
        } else if (max < currNode.val) {
            max = currNode.val
        }
        currNode.neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        })
    }
    return max;
}

module.exports = {
    maxValue
};
