// 最初 tsc --init
{
    "compilerOptions": {
//     公式のドキュメント：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

//     公式ドキュメントの和訳：http://js.studio-kingdom.com/typescript/project_configuration/tsconfig_json
//     公式のtsconfig.jsonのドキュメント: https://www.typescriptlang.org/tsconfig

/*Project




/*option オプション*/

    /* files*/   //コンパイルするファイルを直接指定する. includeやexcludeと違ってワイルドカードを使用できない。
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



    }

}



