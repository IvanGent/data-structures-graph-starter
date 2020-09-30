/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
  // throw new Error('Replace this error with your implementation.');
  if (visited.includes(name)) return;
  visited.push(name);
  while (currentDistance <= maxDistance) {
    adjacencyList[name].forEach(friend => add)
  }
}

function friendsOf(adjacencyList, name, distance) {
  // throw new Error('Replace this error with your implementation.');
  if (adjacencyList.length === 0) return undefined;
  if (adjacencyList[name] === undefined) return undefined;
  if (!adjacencyList[name].length) return [];
  if (adjacencyList[name].length === 1 && adjacencyList[name].includes(name)) return [];
  if (adjacencyList[name].length === 1 && !adjacencyList[name].includes(name)) return adjacencyList[name];
  if (distance === 1) return adjacencyList[name];
  let visited = [name]
  if (distance === 2) {
    visited.push(...adjacencyList[name]);;
    adjacencyList[name].forEach(friend => {
      if (!visited.includes(friend)) {
        visited.push(friend);
      }
      adjacencyList[friend].forEach(friendOfFriend => {
        if (!visited.includes(friendOfFriend)) {
          visited.push(friendOfFriend);
        }
      });
    });
    visited.shift()
    return visited;
  }

  adjacencyList[name].forEach(friend => friendsOfRecursion(friend, adjacencyList, visited, distance, 1));
  visited.shift();
  return visited;
}

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
