const colors = ['#F2798F', '#171D40', '#7EC8D9', '#03A6A6', '#F2F2F2'];

export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export const distance = (x1: number, y1: number, x2: number, y2: number) => {
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
