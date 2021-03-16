const getColor = (bright = 1) => {
    let i = 0;
    let color = [];
    while( i < 3 ) {
        color.push(`${255 - bright * (+Math.random().toString().slice(2, 4))}`);
        i++;
    }
    return color.toString();
};

export default getColor;