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
                                              /*各ファイルを個別のモジュールとしてトランスパイルします (「ts.transpileModule」と同様). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

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
