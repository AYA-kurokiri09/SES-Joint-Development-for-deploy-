const SF_css_data = [
    {
        'id': 1,
        'question':'不透明度', // 問題文
        'answer':'opacity', // 解答
        'explanation': '透明度を指定することができる(透明度を 0.0～1.0 の範囲で指定)。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/function_list/', //詳細リンク
    },
    {
        'id': 2,
        'question':'フォントの種類', // 問題文
        'answer':'font-family', // 解答
        'explanation': 'ホームページで使用するフォント種類を指定することができる(指定しないとブラウザのデフォルトフォントが使用される)。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/font-family/', //詳細リンク
    },
    {
        'id': 3,
        'question':'文字サイズの自動調節', // 問題文
        'answer':'font-size-adjust', // 解答
        'explanation': 'フォントの種類の違いによる見た目のサイズの調整をすることができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/font-size-adjust/', //詳細リンク
    },
    {
        'id': 4,
        'question':'フォントの斜体', // 問題文
        'answer':'font-style', // 解答
        'explanation': '使用するフォントの斜体を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/font-style/', //詳細リンク
    },
    {
        'id': 5,
        'question':'フォントの太さ', // 問題文
        'answer':'font-weight', // 解答
        'explanation': 'フォント太さを指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/font-weight/', //詳細リンク
    },
    {
        'id': 6,
        'question':'フォントの形状（幅広・幅狭）', // 問題文
        'answer':'font-stretch', // 解答
        'explanation': '文字を伸縮するのではなく、指定のフォントが提供するフェイスから適切なものを選択することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/font-stretch/', //詳細リンク
    },
    {
        'id': 7,
        'question':'行の高さ', // 問題文
        'answer':'line-height', // 解答
        'explanation': '1行の高さを指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/line-height/', //詳細リンク
    },
    {
        'id': 8,
        'question':'横(水平)方向の文字位置', // 問題文
        'answer':'text-align', // 解答
        'explanation': '文字の横(水平)方向の位置を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/text-align/', //詳細リンク
    },
    {
        'id': 9,
        'question':'横(水平)方向の文字位置', // 問題文
        'answer':'text-align', // 解答
        'explanation': '文字の横(水平)方向の位置を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/text-align/', //詳細リンク
    },
    {
        'id': 10,
        'question':'文字の装飾線の種類', // 問題文
        'answer':'text-decoration-style', // 解答
        'explanation': '文字の装飾線の種類を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/text-decoration/', //詳細リンク
    },
    {
        'id': 11,
        'question':'文字の両端揃えの調節', // 問題文
        'answer':'text-justify', // 解答
        'explanation': '文字の両端揃えの調節方法を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/text-justify/', //詳細リンク
    },
    {
        'id': 12,
        'question':'文字の影付け', // 問題文
        'answer':'text-shadow', // 解答
        'explanation': '文字に影を付ける場合に使用します。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/text-shadow/', //詳細リンク
    },
    {
        'id': 13,
        'question':'基点から下端までの距離', // 問題文
        'answer':'bottom', // 解答
        'explanation': '基点から下端までの距離を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/bottom/', //詳細リンク
    },
    {
        'id': 14,
        'question':'ボックスの種類', // 問題文
        'answer':'display', // 解答
        'explanation': '要素の表示形式を(ブロックレベル要素をインラインで表示やブロックレベルで表示などに)指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/display/', //詳細リンク
    },
    {
        'id': 15,
        'question':'配置と回り込み', // 問題文
        'answer':'float', // 解答
        'explanation': '指定した要素を左または右に寄せて配置する場合に、使用します。後に続く要素は、その反対側に回り込む。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/float/', //詳細リンク
    },
    {
        'id': 16,
        'question':'高さ', // 問題文
        'answer':'height', // 解答
        'explanation': '要素の高さを指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/height/', //詳細リンク
    },
    {
        'id': 17,
        'question':'基点から左端までの距離', // 問題文
        'answer':'left', // 解答
        'explanation': '基点から左端までの距離を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/bottom/', //詳細リンク
    },
    {
        'id': 18,
        'question':'幅の最大値', // 問題文
        'answer':'max-width', // 解答
        'explanation': '要素の幅の最大値を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/max-width/', //詳細リンク
    },
    {
        'id': 19,
        'question':'幅の最小値', // 問題文
        'answer':'min-width', // 解答
        'explanation': '要素の幅の最小値を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/max-width/', //詳細リンク
    },
    {
        'id': 20,
        'question':'領域からはみ出たコンテンツの表示', // 問題文
        'answer':'overflow', // 解答
        'explanation': '領域からはみ出たコンテンツの表示方法を(横方向、縦方向の表示方法をまとめて)指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/overflow/', //詳細リンク
    },
    {
        'id': 21,
        'question':'要素の配置方法(設定値：relative など)', // 問題文
        'answer':'position', // 解答
        'explanation': '要素の配置方法のみを指定することができる。要素の配置位置は、「top」「right」「bottom」「left」にて指定できる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/position/', //詳細リンク
    },
    {
        'id': 22,
        'question':'基点から右端までの距離', // 問題文
        'answer':'right', // 解答
        'explanation': '基点から右端までの距離を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/bottom/', //詳細リンク
    },
    {
        'id': 23,
        'question':'基点から上端までの距離', // 問題文
        'answer':'top', // 解答
        'explanation': '基点から上端までの距離を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/bottom/', //詳細リンク
    },
    {
        'id': 24,
        'question':'基点から上端までの距離', // 問題文
        'answer':'top', // 解答
        'explanation': '基点から上端までの距離を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/bottom/', //詳細リンク
    },
    {
        'id': 25,
        'question':'横幅', // 問題文
        'answer':'width', // 解答
        'explanation': '要素の横幅を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/width/', //詳細リンク
    },
    {
        'id': 26,
        'question':'ボックスの重なり順', // 問題文
        'answer':'z-index', // 解答
        'explanation': '要素のボックスの重なり順を指定することができる。「position: static」を指定した場合はz-indexは有効にはならない。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/z-index/', //詳細リンク
    },
    {
        'id': 27,
        'question':'カーソルの種類', // 問題文
        'answer':'cursor', // 解答
        'explanation': 'マウスポインターが対象の要素の上に乗ったときに表示されるマウスカーソルの形状を指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/cursor/', //詳細リンク
    },
    {
        'id': 28,
        'question':'表示の有無', // 問題文
        'answer':'visibility', // 解答
        'explanation': '要素を非表示にすることができる。「display:none」と似ているが、「visibility」は要素のエリアが縮まらない。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/visibility/', //詳細リンク
    },
    {
        'id': 29,
        'question':'余白(マージン)の大きさ', // 問題文
        'answer':'margin', // 解答
        'explanation': 'マージン領域の４辺（上下左右）の設定をまとめて行うことができる。マージン領域とは、要素と要素の間の余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/margin/', //詳細リンク
    },
    {
        'id': 30,
        'question':'パディングの大きさ', // 問題文
        'answer':'padding', // 解答
        'explanation': 'パディング領域の４辺（上下左右）の設定をまとめて行うことができる。 パディング領域とは、要素の内側の内容までの余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/padding/', //詳細リンク
    },
    {
        'id': 31,
        'question':'下マージン', // 問題文
        'answer':'margin-bottom', // 解答
        'explanation': '下マージンを指定することができる。 下マージンは、要素の下の余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/margin-bottom/', //詳細リンク
    },
    {
        'id': 32,
        'question':'左マージン', // 問題文
        'answer':'margin-left', // 解答
        'explanation': '左マージンを指定することができる。 左マージンは、要素の左の余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/margin-left/', //詳細リンク
    },
    {
        'id': 33,
        'question':'右マージン', // 問題文
        'answer':'margin-right', // 解答
        'explanation': '右マージンを指定することができる。 右マージンは、要素の右の余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/margin-right/', //詳細リンク
    },
    {
        'id': 34,
        'question':'上マージン', // 問題文
        'answer':'margin-top', // 解答
        'explanation': '上マージンを指定することができる。 上マージンは、要素の上の余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/margin-top/', //詳細リンク
    },
    {
        'id': 35,
        'question':'下パディング', // 問題文
        'answer':'padding-bottom', // 解答
        'explanation': '下パディングを指定することができる。 下パディングは、要素の内側の内容までの下からの余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/padding-bottom/', //詳細リンク
    },
    {
        'id': 36,
        'question':'左パディング', // 問題文
        'answer':'padding-left', // 解答
        'explanation': '左パディングを指定することができる。 左パディングは、要素の内側の内容までの左からの余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/padding-left/', //詳細リンク
    },
    {
        'id': 37,
        'question':'右パディング', // 問題文
        'answer':'padding-right', // 解答
        'explanation': '右パディングを指定することができる。 右パディングは、要素の内側の内容までの右からの余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/padding-right/', //詳細リンク
    },
    {
        'id': 38,
        'question':'上パディング', // 問題文
        'answer':'padding-top', // 解答
        'explanation': '上パディングを指定することができる。 上パディングは、要素の内側の内容までの上からの余白のこと。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/padding-top/', //詳細リンク
    },
    {
        'id': 40,
        'question':'背景の設定(背景をまとめて設定)', // 問題文
        'answer':'background', // 解答
        'explanation': '背景に関する設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/background/', //詳細リンク
    },
    {
        'id': 41,
        'question':'背景色の設定', // 問題文
        'answer':'background-color', // 解答
        'explanation': '背景色の設定を行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/background-color/', //詳細リンク
    },
    {
        'id': 42,
        'question':'背景画像の設定', // 問題文
        'answer':'background-image', // 解答
        'explanation': '背景画像の設定を行うことができる。背景画像は複数指定することも可能。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/background-image/', //詳細リンク
    },
    {
        'id': 43,
        'question':'背景画像の表示サイズ設定', // 問題文
        'answer':'background-size', // 解答
        'explanation': '背景画像の表示サイズの設定を行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/background-size/', //詳細リンク
    },
    {
        'id': 44,
        'question':'罫線の設定(罫線に関してまとめて設定)', // 問題文
        'answer':'border', // 解答
        'explanation': '罫線に関する設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border/', //詳細リンク
    },
    {
        'id': 45,
        'question':'罫線の底辺の設定', // 問題文
        'answer':'border-bottom', // 解答
        'explanation': '罫線の底辺に関する設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-bottom/', //詳細リンク
    },
    {
        'id': 46,
        'question':'罫線の色設定', // 問題文
        'answer':'border-color', // 解答
        'explanation': '罫線の色の設定を行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-color/', //詳細リンク
    },
    {
        'id': 47,
        'question':'画像を使った罫線の表示', // 問題文
        'answer':'border-image', // 解答
        'explanation': '画像を使った罫線の表示の値をまとめて指定することができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-image/', //詳細リンク
    },
    {
        'id': 48,
        'question':'罫線の左辺の設定', // 問題文
        'answer':'border-left', // 解答
        'explanation': '罫線の左辺に関する設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-left/', //詳細リンク
    },
    {
        'id': 49,
        'question':'罫線の角丸の設定', // 問題文
        'answer':'border-radius', // 解答
        'explanation': '罫線の四隅を丸く設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-radius/', //詳細リンク
    },
    {
        'id': 50,
        'question':'罫線の右辺の設定', // 問題文
        'answer':'border-right', // 解答
        'explanation': '罫線の右辺に関する設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-right/', //詳細リンク
    },
    {
        'id': 51,
        'question':'罫線のスタイル設定', // 問題文
        'answer':'border-style', // 解答
        'explanation': '罫線のスタイルの設定を行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-style/', //詳細リンク
    },
    {
        'id': 52,
        'question':'罫線の上辺の設定', // 問題文
        'answer':'border-top', // 解答
        'explanation': '罫線の上辺に関する設定をまとめて行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-top/', //詳細リンク
    },
    {
        'id': 53,
        'question':'罫線の太さ設定', // 問題文
        'answer':'border-width', // 解答
        'explanation': '罫線の太さの設定を行うことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/border-width/', //詳細リンク
    },
    {
        'id': 54,
        'question':'要素に影を付ける', // 問題文
        'answer':'box-shadow', // 解答
        'explanation': '要素に影を付けることができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/box-shadow/', //詳細リンク
    },
    {
        'id': 55,
        'question':'アウトラインの表示を(まとめて)設定', // 問題文
        'answer':'outline', // 解答
        'explanation': 'アウトラインのスタイル、太さ、色、アウトラインまでの距離をまとめて指定できる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/outline/', //詳細リンク
    },
    {
        'id': 56,
        'question':'アニメーション設定', // 問題文
        'answer':'animation', // 解答
        'explanation': '要素をアニメーション（指定した動き）に変化させる事ができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/animation/', //詳細リンク
    },
    {
        'id': 57,
        'question':'時間的変化', // 問題文
        'answer':'transition', // 解答
        'explanation': '時間や速度を指定したCSSプロパティの値を変化させる事ができる。アニメーションの1つで、カーソルイン（:hover）のタイミングで変化を与えたりできる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/transition/', //詳細リンク
    },
    {
        'id': 58,
        'question':'変形(回転、拡大・縮小など)', // 問題文
        'answer':'transform', // 解答
        'explanation': '要素を変形させる事ができる。アニメーションとの組み合わせで要素が回り続けたり、拡大縮小などを繰り返すことができる。', // 解説
        'url':'https://web-designer.cman.jp/css_ref/abc_list/transition/', //詳細リンク
    },
]