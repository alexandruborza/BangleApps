require("FontTeletext10x18Mode7").add(Graphics);

g.clearRect(0, 0, g.getWidth(), g.getHeight());

let dt = new Date();
let dateStr = `${('0' + dt.getDate()).slice(-2)}/${('0' + (dt.getMonth() + 1)).slice(-2)}`;

g.setColor('#00ff00').setFont('Teletext10x18Mode7', 2);

g.drawString(dateStr, g.getWidth() - g.stringWidth(dateStr) - 10, g.getHeight() / 2 + 25, true);
g.drawString(dt.getFullYear(), g.getWidth() - g.stringWidth(dt.getFullYear()) - 10, g.getHeight() - 50, true);

const runWatch = () => {
	let dt = new Date();
	let hours = dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours();
	let mins = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
	let secs = dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds();

	//g.clearRect(0, 0, g.getWidth(), g.getHeight());
	g.setColor('#00ff00');

	g.setFont('Teletext10x18Mode7', 6);
	g.drawString(hours, 10, 35, true);

	g.setFont('Teletext10x18Mode7', 3);
	g.drawString(mins, g.getWidth() - g.stringWidth(mins) - 10, 35, true);

	g.setFont('Teletext10x18Mode7', 2);
	g.drawString(secs, g.getWidth() - g.stringWidth(secs) - 10, 88, true);
};
runWatch();
let w = setInterval(runWatch, 1000);
Bangle.on('lcdPower', x => {
  if (w) clearInterval(w);
  w = undefined;
  if (x) {
    secondInterval = setInterval(runWatch, 1000);
    runWatch();
  }
});
Bangle.loadWidgets();
Bangle.drawWidgets();
// Show launcher when middle button pressed
setWatch(Bangle.showLauncher, BTN2, { repeat: false, edge: "falling" });
