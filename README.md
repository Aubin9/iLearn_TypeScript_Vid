# I learn TypeScript by SIAHA TOUKO Aubin

### Contact me: peraubcorps@gmail.com

## Introduction

- Used to build large scale application
- Preriquisites: Basic JavaScript. JS included in TS.
  TS is JS with Type checking
  we have a .ts file, we give to a compiler to translate in .js file so that browsers can understand
- Setting up the development environment
  install node
  npm i -g typescript <!--this is to install the compiler tsc //tsc -v  -->
- Creating your first typescript program
  run: tsc index.ts
- Configuring your typescript compiler
  In the terminal, type(to run the code): tsc --init
  uncomment the following in the tsconfig.json file created:
  "target": "es2016",
  "module": "commonjs",
  "rootDir": "./src", and create the src folder in your root directory and move our ,ts files there
  "outDir": "./dist",
  "removeComments": true,
  "noEmitOnError": true,
  now to run the code, we simply have to type 'tsc' on the terminal
- Debugging Typescript applications
  run the code line by line enable "sourceMap": true,
  go to the debug panel of vscode, and click on "create a launch.json file and select node.js
  add the property "preLaunchTask": "tsc: build - tsconfig.json"

## Fundamentals of typescript

- The any, unknown, never, enum, tuple Types
- Arrays
- Tuples
- Enums
- Functions
  enable "noUnusedLocals", "noUnusedParameters", "noImplicitReturns"
- Objects
