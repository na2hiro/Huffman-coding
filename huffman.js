function Tree(){
	
}
Tree.prototype={
	value: 0,
	numChildren: 0,
	right: null,
	left: null,
	printCode: function(prefix){
		if(!prefix)prefix="";
		this.left.printCode(prefix+"0");
		this.right.printCode(prefix+"1");
	},
	setChildren: function(child1, child2){
		if(child1.numChildren<child2.numChildren){
			this.left=child1;
			this.right=child2;
		}else{
			this.left=child2;
			this.right=child1;
		}
		this.value=this.left.value+this.right.value;
		this.numChildren=this.left.numChildren+this.right.numChildren;
	},
	switch: function(str){
		if(!str || str.length==0){
			var temp=this.left;
			this.left=this.right;
			this.right=temp;
		}else{
			var child;
			if(str.substr(0,1)=="0"){
				child = this.left;
			}else{
				child = this.right;
			}
			child.switch(str.substr(1));
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
};
Huffman.calc = function(obj){
	var arr=[];
	for(var i in obj){
		arr.push(new Huffman(i, obj[i]));
	}

	while(arr.length>1){
		arr.sort(function(obj1, obj2){return obj2.value-obj1.value});
		var huff1=arr.pop();
		var huff2=arr.pop();
		var tree=new Tree();
		tree.setChildren(huff1, huff2);
		arr.push(tree);
	}
	return arr[0];
};