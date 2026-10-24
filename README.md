# @x12i/text-entities usage example

Validated identifiers and exact dictionary mentions, with source evidence.

This consuming application demonstrates **extract validated identifiers with source evidence** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Validated identifiers and exact dictionary mentions, with source evidence.
- A Text integration needs to reuse the capabilities of @x12i/text-entities inside a larger application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/text-entities)
- [Implementation monorepo](https://github.com/x12i/distinctive-terms)
- [Reviewed package source](https://github.com/x12i/distinctive-terms/tree/75caadc9b8e4851a7250a4d9ad3f480131805413/packages/text-entities)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
