const isOdd = (num: number) => num % 2 !== 0;

const calculateNrOfFingers = (size: number, finger: number) => {
	let nrOfFingers = Math.floor((size - finger * 2) / finger);
	nrOfFingers = isOdd(nrOfFingers) ? nrOfFingers : nrOfFingers - 1;
	return nrOfFingers;
};

export const side1Data = (
	x: number,
	y: number,
	width: number,
	height: number,
	thickness: number,
	finger: number
) => {
	const innerWidth = width - thickness * 2;
    const innerHeight = height - thickness * 2;

	let widthNrOfFingers = calculateNrOfFingers(innerWidth, finger);
	let widthEdge = (innerWidth - widthNrOfFingers * finger) / 2;

    let heightNrOfFingers = calculateNrOfFingers(innerHeight, finger);
    let heightEdge = (innerHeight - heightNrOfFingers * finger) / 2;

	let d = `M ${x + thickness} ${y + thickness} `;

	// Line 1
	d += `h ${widthEdge} `;
	for (let i = 0; i <= widthNrOfFingers; i++) {
		if (isOdd(i)) {
			d += `v ${thickness} `;
		} else {
			d += `v -${thickness} `;
		}
		if (i < widthNrOfFingers) {
			d += `h ${finger} `;
		}
	}
	d += `h ${widthEdge} `;

	// Line 2
	d += `v ${heightEdge} `;
	for (let i = 0; i <= heightNrOfFingers; i++) {
		if (isOdd(i)) {
			d += `h ${thickness} `;
		} else {
			d += `h -${thickness} `;
		}
		if (i < heightNrOfFingers) {
			d += `v ${finger} `;
		}
	}
	d += `v ${heightEdge} `;

	// Line 3
	d += `h -${widthEdge} `;
	for (let i = 0; i <= widthNrOfFingers; i++) {
		if (isOdd(i)) {
			d += `v -${thickness} `;
		} else {
			d += `v ${thickness} `;
		}
		if (i < widthNrOfFingers) {
			d += `h -${finger} `;
		}
	}
	d += `h -${widthEdge} `;

	// Line 4
	d += `v -${heightEdge} `;
	for (let i = 0; i <= heightNrOfFingers; i++) {
		if (isOdd(i)) {
			d += `h -${thickness} `;
		} else {
			d += `h ${thickness} `;
		}
		if (i < heightNrOfFingers) {
			d += `v -${finger} `;
		}
	}
	d += `Z`;
	return d;
};
