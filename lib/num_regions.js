function depthFirst(vertex, graph, visited) {
    if (visited.has(vertex)) return false;
    visited.add(vertex);
    graph[vertex].forEach(neighbor => depthFirst(neighbor, graph, visited));
    return true;
}

function numRegions(graph) {
    let visited = new Set();
    let count = 0;
    let keys = Object.keys(graph);

    keys.forEach(key => {
        if (depthFirst(key, graph, visited)) {
            count++;
        }
    })
    return count;
}

module.exports = {
    numRegions
};
