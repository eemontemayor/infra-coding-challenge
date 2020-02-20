/**
 * Returns a promise that resolves after a given duration
 * @param {number} duration the duration we should sleep in millis
 */
function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

/**
 * generates a random number between min and max
 * @param {number} min - the smallest allowed number
 * @param {number} max - the largest possible number
 * @returns {number} the random number
 */
function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


module.exports = {
    sleep,
    generateRandomNum
};