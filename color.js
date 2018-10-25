class Color {
	constructor(r, g, b) {
		this.buffer = new ArrayBuffer(3*8);
		this.view = new Float64Array(this.buffer);
		this.r = r;
		this.g = g;
		this.b = b;
	}

	get r() {
		return this.view[0];
	}
	set r(s) {
		return this.view[0] = s;
	}
	get g() {
		return this.view[1];
	}
	set g(s) {
		return this.view[1] = s;
	}
	get b() {
		return this.view[2];
	}
	set b(s) {
		return this.view[2] = s;
	}


	_add(v) {
		this.r += v.r;
		this.g += v.g;
		this.b += v.b;
		return this;
	}
	_sub(v) {
		this.r -= v.r;
		this.g -= v.g;
		this.b -= v.b;
		return this;
	}
	_mul(v) {
		if (v instanceof Color) {
			this.r *= v.r;
			this.g *= v.g;
			this.b *= v.b;
		} else {
			this.r *= v;
			this.g *= v;
			this.b *= v;
		}
		return this;
	}
	_div(v) {
		if (v instanceof Color) {
			this.r /= v.r;
			this.g /= v.g;
			this.b /= v.b;
		} else {
			this.r /= v;
			this.g /= v;
			this.b /= v;
		}
		return this;
	}
	
	clone() {
		return new Color(this.r, this.g, this.b);
	}

	add(v) {
		return this.clone()._add(v);
	}
	sub(v) {
		return this.clone()._sub(v);	
	}
	mul(v) {
		return this.clone()._mul(v);
	}
	div(v) {
		return this.clone()._div(v);
	}

	neg() {
		return new Color(-this.r, -this.g, -this.b);
	}
	
	toString() {
		return "rgb(" + 255*this.r + ", " + 255*this.g + ", " + 255*this.b + ")";
	}
}
