# Quick start with Compilets

This repo demonstrates how to compile a TypeScript source file into C++ and then
build a native Node.js module from it.

Only works on Linux and macOS,
[Windows is currently not supported](https://github.com/compilets/compilets/issues/2).

## Get started

Clone the repo:

```sh
git clone https://github.com/compilets/quick-start.git
```

Install deps and start building:

```sh
cd quick-start
npm install
```

Run the benchmark script:

```sh
./benchmark.js
```

## Exploration

To convert a TypeScript project, run `compilets gen`, which creates a C++
project under the `cpp-project/` directory.

```console
$ npx compilets gen
Done. Made 50 targets from 79 files in 521ms
$ ls cpp-project/
BUILD.gn         eratosthenes.cpp out/
cpp/             eratosthenes.h
```

The `eratosthenes.h` and `eratosthenes.cpp` files are converted from the
`eratosthenes.ts` file, which include both the translated C++ implementation of
the TypeScript code, and extra bindings code for Node.js native module.

The `BUILD.gn` and a hidden file `.gn` are the configuration files of GN build
system, the `out/` directory stores build files, and `cpp/` directory contains
dependencies used by the generated project.

To build the C++ project, run `compilets build`, and a `eratosthenes.node` file
will be generated under `cpp-project/out/Release`, which is the built native
module.

```console
$ npx compilets build
ninja: Entering directory `out/Release'
ninja: no work to do.
$ node -e "console.log(require('./cpp-project/out/Release/quick-start.node'))"
{
  sieveOfEratosthenes: [Function (anonymous)],
  isPrimeNumber: [Function (anonymous)]
}
```

## License

Public domain
