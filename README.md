# ハフマン符号構成スクリプト

## 概要
値とその頻度のペアから，二元ハフマン符号を構成する．

##使い方
###構成
Huffman.calc()の第一引数に値とその頻度の連想配列を，第二引数に元数nを渡すと，n元ハフマン符号を構成し，そのツリーを表すTreeインスタンスが返る．
	var tree = Huffman.calc({
		hoge: 100,
		fuga: 20,
		piyo: 15,
		uhyo: 15,
		ugaa: 10
	}, 2);
Treeインスタンスはn分木であり，HuffmanまたはTreeオブジェクトをnつ子に持つ．childrenフィールドに格納される．

###表示
Treeインスタンスからコードをprintする．可視な結果がconsoleに出力される．
	tree.printCode();
	=>
	0 hoge 100
	100 ugaa 10
	101 uhyo 15
	110 piyo 15
	111 fuga 20
	280
コード，値，頻度が1行で表示される．printCode自体の戻り値は，全体の総符号長
###traverse
tree.get(符号列)とすることで，その符号を受け取った段階でのツリーを返す．
	t = tree.get("1").get("0").printCode();
	t = tree.get("10").printCode();
	=>
	0 ugaa 10
	1 uhyo 15
	25
