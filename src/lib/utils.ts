const colors = ['#F2798F', '#171D40', '#7EC8D9', '#03A6A6', '#F2F2F2'];

/**
 * Generate a random color from the colors array
 *
 * @returns {string} A random color from the colors array
 */
export const getRandomColor = (): string => colors[Math.floor(Math.random() * colors.length)];

/**
 * Calculate the distance between two points
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number} The distance between the two points
 */
export const distance = (x1: number, y1: number, x2: number, y2: number): number => {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

/**
 * Returns the number of circles to draw based on the screen width
 *
 * @returns {number} The number of circles to draw
 */
export const getNumberOfCircles = (width: number): number => {
	if (width < 768) {
		return 100;
	} else if (width < 1024) {
		return 200;
	}

	return Math.floor((width / 1024) * 300);
};
