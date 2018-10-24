class Vec2 {
	constructor(x, y) {
		this.buffer = new ArrayBuffer(2*8);
		this.view = new Float64Array(this.buffer);
		this.x = x;
		this.y = y;
	}

	get x() {
		return this.view[0];
	}
	set x(s) {
		return this.view[0] = s;
	}
	get y() {
		return this.view[1];
	}
	set y(s) {
		return this.view[1] = s;
	}


	_add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}
	_sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}
	_mul(v) {
		if (v instanceof Vec2) {
			this.x *= v.x;
			this.y *= v.y;
		} else {
			this.x *= v;
			this.y *= v;
		}
		return this;
	}
	_div(v) {
		if (v instanceof Vec2) {
			this.x /= v.x;
			this.y /= v.y;
		} else {
			this.x /= v;
			this.y /= v;
		}
		return this;
	}
	
	clone() {
		return new Vec2(this.x, this.y);
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
	dot(v) {
		return this.x*v.x + this.y*v.y;
	}
	cross(v) {
		return this.x*v.y - this.y*v.x;
	}

	neg() {
		return new Vec2(-this.x, -this.y);
	}
	
	lr() {
		return new Vec2(this.y, -this.x);
	}
	rr() {
		return new Vec2(-this.y, this.x);
	}

	len2() {
		return this.x*this.x + this.y*this.y;
	}
	len() {
		return Math.sqrt(this.len2());
	}
	norm() {
		return this.div(this.len());
	}

	toString() {
		return "Vec2 [" + this.x + ", " + this.y + "]";
	}
}
