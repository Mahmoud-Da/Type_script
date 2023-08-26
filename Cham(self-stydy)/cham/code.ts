{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    "incremental": true,                         
    "composite": true,                                
    "tsBuildInfoFile": "./.tsbuildinfo",              
    "disableSourceOfProjectReferenceRedirect": true,  
    "disableSolutionSearching": true,                 
    "disableReferencedProjectLoad": true,             

    /* Language and Environment */
    "target": "es2016",                                  
    "lib": [],                                        
    "jsx": "preserve",                                
    "experimentalDecorators": true,                   
    "emitDecoratorMetadata": true,                    
    "jsxFactory": "",                                 
    "jsxFragmentFactory": "",                         
    "jsxImportSource": "",                            
    "reactNamespace": "",                             
    "noLib": true,                                    
    "useDefineForClassFields": true,                  
    "moduleDetection": "auto",                        

    /* Modules */
    "module": "commonjs",                               
    "rootDir": "./src",                                  
    "moduleResolution": "node10",                     
    "baseUrl": "./",                                  
    "paths": {},                                      
    "rootDirs": [],                                   
    "typeRoots": [],                                  
    "types": [],                                      
    "allowUmdGlobalAccess": true,                     
    "moduleSuffixes": [],                             
    "allowImportingTsExtensions": true,               
    "resolvePackageJsonExports": true,                
    "resolvePackageJsonImports": true,                
    "customConditions": [],                           
    "resolveJsonModule": true,                        
    "allowArbitraryExtensions": true,                 
    "noResolve": true,                                

    /* JavaScript Support */
    "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    "declaration": true,                              
    "declarationMap": true,                           
    "emitDeclarationOnly": true,                      
    "sourceMap": true,                                
    "inlineSourceMap": true,                          
    "outFile": "./",                                  
    "outDir": "./dist",                               
    "removeComments": true,                           
    "noEmit": true,                                   
    "importHelpers": true,                            
    "importsNotUsedAsValues": "remove",               
    "downlevelIteration": true,                       
    "sourceRoot": "",                                 
    "mapRoot": "",                                    
    "inlineSources": true,                            
    "emitBOM": true,                                  
    "newLine": "crlf",                                
    "stripInternal": true,                            
    "noEmitHelpers": true,                            
    "noEmitOnError": true,                            
    "preserveConstEnums": true,                       
    "declarationDir": "./",                           
    "preserveValueImports": true,                     

    /* Interop Constraints */
    "isolatedModules": true,                          
    "verbatimModuleSyntax": true,                     
    "allowSyntheticDefaultImports": true,             
    "esModuleInterop": true,                          
    "preserveSymlinks": true,                      
    "forceConsistentCasingInFileNames": true,         

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "noImplicitAny": true,                            
    "strictNullChecks": true,                         
    "strictFunctionTypes": true,                      
    "strictBindCallApply": true,                      
    "strictPropertyInitialization": true,             
    "noImplicitThis": true,                           
    "useUnknownInCatchVariables": true,               
    "alwaysStrict": true,                             
    "noUnusedLocals": true,                           
    "noUnusedParameters": true,                       
    "exactOptionalPropertyTypes": true,               
    "noImplicitReturns": true,                        
    "noFallthroughCasesInSwitch": true,               
    "noUncheckedIndexedAccess": true,                 
    "noImplicitOverride": true,                       
    "noPropertyAccessFromIndexSignature": true,       
    "allowUnusedLabels": true,                        
    "allowUnreachableCode": true,                     

    /* Completeness */
    "skipDefaultLibCheck": true,                     
    "skipLibCheck": true                            
  }
}
