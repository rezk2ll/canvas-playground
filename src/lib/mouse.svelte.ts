interface Mouse {
	x: number;
	y: number;
}

export const mouse = $state<Mouse>({
	x: 0,
	y: 0
});
