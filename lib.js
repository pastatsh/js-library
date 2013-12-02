//�����_���Ȑ�����Ԃ�
Math.randomInt = function(max){
	return parseInt(Math.random() * max);
}
//�ő���񐔂�Ԃ�
Math.gcd = function(a, b){
	return b != 0 ? Math.gcd(b, a % b) : a;
}
//�ŏ����{����Ԃ�
Math.lcm = function(a, b){
	return a * b / Math.gcd(a, b);
}
//x^k(mod m)��Ԃ�
Math.powMod = function(x, k, m){
	if(k == 0) return 1;
	if(k % 2 == 0) return Math.powMod(x * x % m, k >> 1, m);
	return x * Math.powMod(x, k - 1, m) % m;
}
//�x�N�g���N���X
Math.Vector = function(){
	var arr = typeof arguments[0] == "number" ? arguments : arguments[0];
	this.length = arr.length;
	for(var i = 0; i < this.length; i++)
		this[i] = arr[i];
	
	//�N���[��
	this.clone = function(){
		return new Math.Vector(this);
	}
	//���Z
	this.add = function(b){
		var r = this.clone();
		for(var i = 0; i < this.length; i++)
			r[i] += b[i];
		return r;
	}
	//���Z
	this.sub = function(b){
		var r = this.clone();
		for(var i = 0; i < this.length; i++)
			r[i] -= b[i];
		return r;
	}
	//��Z
	this.mul = function(b){
		var r = this.clone();
		for(var i = 0; i < this.length; i++)
			r[i] *= b;
		return r;
	}
	//���Z
	this.div = function(b){
		return this.mul(1 / b);
	}
	//�傫��
	this.magnitude = function(){
		var r = 0;
		for(var i = 0; i < this.length; i++)
			r += this[i] * this[i];
		return Math.sqrt(r);
	}
	//���K��
	this.nomalize = function(){
		return this.div(this.magnitude());
	}
	//����
	this.innerProduct = function(b){
		var r = 0;
		for(var i = 0; i < this.length; i++)
			r += this[i] * b[i];
		return r;
	}
}

//�j��
Date.SUN = 0;
Date.MON = 1;
Date.TUE = 2;
Date.WED = 3;
Date.THU = 4;
Date.FRI = 5;
Date.SAT = 6;
//�j����Ԃ�
Date.getDayOfTheWeek = function(y, m, d){
	if(m < 3){ y--; m += 12;}
	var yy = parseInt(y / 100);
	return (y + (y >> 2) - yy + (yy >> 2) + parseInt((13 * m + 8) / 5) + d) % 7;
}

//�e�X�g�z������
Array.makeSortedArray = function(max){
	var array = [];
	for(var i = 0; i < max; i++)
		array[i] = i;
	return array;
}
//�e�X��Ԃ�
Array.prototype.max = function(){
	return Math.max.apply(null, this);
}
//�ő�l��Ԃ�
Array.prototype.max = function(){
	return Math.max.apply(null, this);
}
//�ŏ��l��Ԃ�
Array.prototype.min = function(){
	return Math.min.apply(null, this);
}
//i��j�����ւ���
Array.prototype.swap = function(i, j){
	var tmp = this[i];
	this[i] = this[j];
	this[j] = tmp;
}
//�V���b�t������(�j��I)
Array.prototype.shuffle = function(){
	for(var i = this.length - 1; i; i--)
		this.swap(i, Math.randomInt(i + 1));
	return array;
}
//�񕪒T��
Array.prototype.binaryIndexOf = function(item){
	var min = 0, max = this.length -�@1;
	while(min <= max){
		var i = (min + max) >> 1;
		if(this[i] == item) return i;
		if(this[i] < item) min = i + 1;
		else max = i - 1;
	}
	return -1;
}
//����������Ȃ��\�[�g
Array.prototype.sortNoString = function(){
	return this.sort(function(a, b){
		return a < b ? -1 : (a > b ? 1 : 0);
	});
}
//�v���p�e�B�Ń\�[�g
Array.prototype.sortOn = function(){
	var keys = arguments;
	return this.sort(function(a, b){
		for(var i = 0; i < keys.length; i++){
			if(a[keys[i]] < b[keys[i]]) return -1;
			else if(a[keys[i]] > b[keys[i]]) return 1;
		}
		return 0;
	});
}

//�q�[�v�\��
Heap = function(){
	var array = [];
	this.length = 0;
	//�ǉ�����
	this.push = function(item){
		var k = this.length;
		while(k){
			var i = (k - 1) >> 1;
			if(array[i] <= item) break;
			array[k] = array[i];
			k = i;
		}
		array[k] = item;
		this.length++;
	}
	//�ŏ��l��Ԃ�
	this.top = function(){
		return array[0];
	}
	//�ŏ��l���폜���ĕԂ�
	this.pop = function(){
		this.length--;
		var r = array[0];
		var x = array[this.length];
		var k = 0, i;
		while((i = k * 2 + 1) < this.length){
			if(i + 1 < this.length && array[i] > array[i + 1]) i++;
			if(x <= array[i]) break;
			array[k] = array[i];
			k = i;
		}
		array[k] = x;
		return r;
	}
}

//�����␔�l���p�f�B���O���ĕԂ�
Number.prototype.padding = String.prototype.padding = function(length, c){
	if(c == undefined) c = " ";
	return ((new Array(length + 1)).join(c) + this).slice(-length);
}
Number.prototype.zeroPadding = String.prototype.zeroPadding = function(length){
	return this.padding(length, 0);
}