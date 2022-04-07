var w = graphics.width = window.innerWidth,
	h = graphics.height = window.innerHeight;

var ctx = graphics.getContext('2d'), tick = 0;

var lprng = (_) => ((_ * 106 + 1283) % 6075);

var particles = {
	seed: 19465639,
	dx: [0, w], 
	dy: [0, h],
	number: 500,
	speed: 2,
	color: '#fff',
	side: 2
};

function drawSystem(t) {
	var seed = particles.seed;
	ctx.fillStyle = particles.color;
	for (var i = particles.number; i --;) {
		seed = lprng(seed);
		var x = (particles.dx[0] + lprng(seed)) % (particles.dx[1] - particles.dx[0]);
		seed = lprng(seed);
		var y = (particles.dy[0] + lprng(seed) + t * (particles.speed * lprng(seed) / 6075 + 1)) % (particles.dy[1] - particles.dy[0]);
		ctx.fillRect(
			x, 
			y, 
			particles.side * lprng(seed) / 6000 + 1, 
			particles.side * lprng(seed) / 6000 + 1
		)
	}
}

(function LOOP() {
	ctx.clearRect(0, 0, w, h);
	tick += 0.5;
	drawSystem(tick);
	requestAnimationFrame(LOOP);
})();