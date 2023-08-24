{
  "compilerOptions": {
    // 最初 tsc --init
    //     https://qiita.com/ryokkkke/items/390647a7c26933940470
    //     公式のドキュメント：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

    //     公式ドキュメントの和訳：http://js.studio-kingdom.com/typescript/project_configuration/tsconfig_json
    //     公式のtsconfig.jsonのドキュメント: https://www.typescriptlang.org/tsconfig

    /*Project*/

    /*option オプション*/

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation・インクリメンタルコンパイルを有効にする*/
    "target": "es5",                          /* Specify ECMAScript target version・ECMAScript ターゲット バージョンを指定する: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation・モジュールコード生成の指定: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation・コンパイルに含めるライブラリ ファイルを指定する。 */
    // "allowJs": true,                       /* Allow javascript files to be compiled・JavaScript ファイルのコンパイルを許可する. */
    // "checkJs": true,                       /* Report errors in .js files・.js ファイル内のエラーを報告する. */
    // "jsx": "preserve",                     /* Specify JSX code generation・JSXコード生成の指定: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding・対応するものを生成する '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding・対応するそれぞれのソースマップを生成する '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding・対応するものを生成する '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file・出力を連結して単一のファイルに出力する. */
    // "outDir": "./",                        /* Redirect output structure to the directory・出力構造をディレクトリにリダイレクトする. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir.*/
                                              /*・入力ファイルのルートディレクトリを指定します。 --outDir で出力ディレクトリ構造を制御するために使用する。 */
    // "composite": true,                     /* Enable project compilation・プロジェクトのコンパイルを有効にする。*/
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information・インクリメンタルコンパイル情報を保存するファイルを指定する。 */
    // "removeComments": true,                /* Do not emit comments to output・出力にコメントを発行しない. */
    // "noEmit": true,                        /* Do not emit outputs・出力を発行しない. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'・「tslib」から出力ヘルパーをインポートする. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'*/
                                              /*・「ES5」または「ES3」をターゲットとする場合、「for-of」、スプレッド、および構造化におけるイテラブルの完全なサポートを提供する。. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule')
                                              /* 各ファイルを個別のモジュールとしてトランスパイルします (「ts.transpileModule」と同様). */

    /*  Strict Type-Checking Options・厳密な型チェックのオプション　*/
    "strict": true,                           /* Enable all strict type-checking options・すべての厳密な型チェック オプションを有効にする. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type.*/
                                              /* すべての厳密な型チェック オプションを有効にする*/
    // "strictNullChecks": true,              /* Enable strict null checks・厳密な null チェックを有効にする. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types・関数タイプの厳密なチェックを有効にする. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions・関数で厳密な 'bind'、'call'、および 'apply' メソッドを有効にする. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes・クラス内のプロパティ初期化の厳密なチェックを有効にする. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type・暗黙の「any」型を持つ「this」式でエラーを発生させる. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file・strict モードで解析し、ソース ファイルごとに「use strict」を出力する. */

    /* Additional Checks・追加のチェック */
    // "noUnusedLocals": true,                /* Report errors on unused locals・未使用のローカルに関するエラーを報告する. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters・未使用のパラメータに関するエラーを報告する. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value・関数内のすべてのコード パスが値を返さない場合にエラーを報告する. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement・switch ステートメントのフォールスルー ケースのエラーを報告する. */

    /* Module Resolution Options・モジュール解像度オプション */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
                                              /* モジュール解決戦略を指定します: 'node' (Node.js) または 'classic' (TypeScript 1.6 以前) */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names・非絶対モジュール名を解決するためのベース ディレクトリ. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'.*/
                                              /*「baseUrl」を基準とした相対的な場所を検索するためにインポートを再マップする一連のエントリ */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. 
                                              /* 結合されたコンテンツが実行時のプロジェクトの構造を表すルート フォルダーのリスト。*/
    // "typeRoots": [],                       /* List of folders to include type definitions from・タイプ定義を含めるフォルダーのリスト. */
    // "types": [],                           /* Type declaration files to be included in compilation・コンパイルに含める型宣言ファイル. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
                                              /* デフォルトのエクスポートがないモジュールからのデフォルトのインポートを許可します。 これはコードの出力には影響せず、型チェックのみに影響する*/
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. 
                                              /* すべてのインポートの名前空間オブジェクトの作成を通じて、CommonJS モジュールと ES モジュール間の出力の相互運用性を有効にします。 「allowSyntheticDefaultImports」を意味する*/
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks・シンボリックリンクの実際のパスを解決しない. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules・モジュールから UMD グローバルへのアクセスを許可する. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */

    /* files*/
      //コンパイルするファイルを直接指定する. includeやexcludeと違ってワイルドカードを使用できない。
      //グロブパターンを必要としない場合で有用する。 グロブパターンが必要な場合、includeを利用する。
    "files": [
      "core.ts",
      "sys.ts",
      "types.ts",
      "scanner.ts",
      "parser.ts",
      "utilities.ts",
      "binder.ts",
      "checker.ts",
      "tsc.ts"
    ]

    /*include*/
      // ワイルドカード（*,?,**/）が使える。
    "include": [
      "src/**/*"
    ]
  

  
  }
}
