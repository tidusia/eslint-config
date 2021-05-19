# Opinionated Eslint config to work with Prettier, React and TypeScript

## The problem

I love high code quality standards, but setting up and maintaining configuration takes a long time for each project.

One day, I found [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos) from Wes Bos.
I loved the idea : a unique place to share my favorite eslint configuration of the moment.

One place for all the rules, one place to maintain them. Easy to distribute as a npm package for each project.

## Installing

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev @tidusia/eslint-config
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```js
{
  "extends": [
    "@tidusia/eslint-config"
  ]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint . --ignore-path .gitignore",
  "lint:fix": "eslint . --fix --ignore-path .gitignore"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
  "extends": [
    "@tidusia/eslint-config"
  ],
  "rules": {
    "no-console": 2,
  }
}
```

After that, create your own [prettier configuration](https://prettier.io/docs/en/install.html) or check out my [shared prettier config](https://github.com/tidusia/prettier-config) for a quick start.

