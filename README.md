# ハフマン符号構成スクリプト

## 概要
値とその頻度のペア群から，多元ハフマン符号を構成する．

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

例えば，ここで渡された連想配列では，hogeの頻度が100，fugaの頻度が20，ということを意味する．
Treeインスタンスはn分木であり，HuffmanまたはTreeオブジェクトをnつ子に持つ．配列であるchildrenフィールドに格納される．

###表示
Treeインスタンスの配下にある全ての符号語を表示する．結果が可視形式でconsoleに出力される．

	tree.printCode();
	=>
	0 hoge 100
	100 ugaa 10
	101 uhyo 15
	110 piyo 15
	111 fuga 20
	280

コード，値，頻度が1行で表示される．printCode自体の戻り値は，全体の総符号語長である．これを頻度の総和で割れば，平均の符号語長がわかる．
###traverse
tree.get(符号列)とすることで，その符号を受け取った段階でのツリーを返す．

	t = tree.get("1").get("0").printCode();
	t = tree.get("10").printCode();
	=>
	0 ugaa 10
	1 uhyo 15
	25
