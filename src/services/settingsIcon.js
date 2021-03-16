const settingsIcon = (container) => {

    const canvas = document.createElement('canvas');
    canvas.height = 35;
    canvas.width = 35;

    const center = canvas.width / 2;

    container.append(canvas);

    const ctx = canvas.getContext('2d');

    for(let i = 0; i < 2 * Math.PI; i += Math.PI / 6) {
        ctx.beginPath();
        ctx.arc(center, center, 12, i + Math.PI / 4, i + 2 * Math.PI / 6);
        ctx.arc(center, center, 15, i + 2 * Math.PI / 6 + 0.05, i + Math.PI / 4 + Math.PI / 6 - 0.05, false);
        ctx.lineTo(center - 5* Math.cos(i), center - 5* Math.sin(i));
        ctx.fillStyle = 'grey';
        ctx.fill();
    }

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(center, center, 7, 0, 2 * Math.PI);
    ctx.fill();
};

export default settingsIcon;