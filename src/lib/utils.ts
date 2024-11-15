export interface ImageEntry {
	src: string;
	height: number;
	width: number;
	person: 'khaled' | 'dhaw' | 'jihen';
}

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

/**
 * Generate a random velocity
 * @returns {number} A random velocity between -5 and 5
 */
export const getRandomVelocity = (): number => {
	let velocity = 0;

	while (velocity > -2 && velocity < 2) {
		velocity = Math.random() * 10 - 5;
	}

	return velocity;
};

/**
 * Images list
 */
export const imageList: ImageEntry[] = [
	{
		src: '/images/dhaw-1.png',
		height: 324,
		width: 154,
		person: 'dhaw'
	},
	{
		src: '/images/dhaw-2.png',
		height: 467,
		width: 339,
		person: 'dhaw'
	},
	{
		src: '/images/dhaw-3.png',
		height: 506,
		width: 280,
		person: 'dhaw'
	},
	{
		src: '/images/dhaw-4.png',
		height: 276,
		width: 136,
		person: 'dhaw'
	},
	{
		src: '/images/khaled-1.png',
		height: 430,
		width: 290,
		person: 'khaled'
	},
	{
		src: '/images/khaled-2.png',
		height: 375,
		width: 264,
		person: 'khaled'
	},
	{
		src: '/images/khaled-3.png',
		height: 318,
		width: 352,
		person: 'khaled'
	},

	{
		src: '/images/jihen-1.png',
		height: 414,
		width: 282,
		person: 'jihen'
	},
	{
		src: '/images/jihen-2.png',
		height: 355,
		width: 320,
		person: 'jihen'
	},
	{
		src: '/images/jihen-3.png',
		height: 426,
		width: 421,
		person: 'jihen'
	},
	{
		src: '/images/jihen-4.png',
		height: 516,
		width: 234,
		person: 'jihen'
	},
	{
		src: '/images/jihen-5.png',
		height: 480,
		width: 371,
		person: 'jihen'
	}
];
