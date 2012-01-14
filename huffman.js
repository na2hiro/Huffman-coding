function Tree(){
	this.children=[];
}
Tree.prototype={
	value: 0,
	numChildren: 0,
	children: [],
	printCode: function(prefix){
		if(!prefix)prefix="";
		var ret=0;
		for(var i=0; i<this.children.length; i++){
			ret+=this.children[i].printCode(prefix+i);
		}
		return ret;
	},
	setChildren: function(arr){
		this.children=arr;
		this.children.sort(function(obj1, obj2){return obj1.numChildren-obj2.numChildren});
		this.value=this.numChildren=0;
		for(var i=0; i<this.children.length; i++){
			this.value += this.children[i].value;
			this.numChildren += this.children[i].numChildren;
		}
	},
	get: function(str){
		if(!str || str.length==0){
			return this;
		}else{
			return this.children[str.substr(0,1)].get(str.substr(1));
		}
	}
};

function Huffman(name, value){
	this.name=name;
	this.value=value;
}
Huffman.prototype=new Tree;
Huffman.prototype.numChildren=1;
Huffman.prototype.printCode=function(code){
	console.log(code, this.name, this.value);
	return this.value*code.length;
};
Huffman.remaining = function(len, gen){
	return ((gen-len)%(gen-1)+gen-1)%(gen-1);
};
Huffman.calc = function(obj, gen){
	if(!gen) gen=2;
	var arr=[];
	for(var i in obj){
		arr.push(new Huffman(i, obj[i]));
	}
	var remaining = Huffman.remaining(arr.length, gen);
	for(var i=0; i<remaining; i++){
		arr.push(new Huffman("ε", 0));
	}
	while(arr.length>=gen){
		arr.sort(function(obj1, obj2){return obj2.value-obj1.value});
		var children=[];
		for(var i=0; i<gen; i++){
			children.push(arr.pop());
		}
		var tree=new Tree();
		tree.setChildren(children);
		arr.push(tree);
	}
	return arr[0];
};