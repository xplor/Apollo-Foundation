# Apollo Foundation

This repo and NPM package contain the design tokens for Xplor's [Apollo UI framework](https://github.com/xplor/apollo). Design tokens are low-level variables such as color values, fonts/typefaces, and text styles that help to ensure visual consistency across interfaces and products.

While Xplor recommends the use of Apollo components whenever possible, you may also find it useful to use Apollo Foundation's design tokens directly in your UI to allow for more custom development than Apollo components afford. Read on to learn how to do this!

## Usage

First, download the latest version of this package with NPM:

```
npm install @xplortech/apollo-foundation
```

Depending on how you prefer to import design variables, there are two recommended methods for a web project &mdash; 1) CSS variables or 2) JavaScript variables (it is possible to use both!)

### 1. CSS Variables

You can either `@import` the variables in a CSS file in your project, or reference it as a `<link>` in the `<head>` of your document.

```css
@import "@xplortech/apollo-foundation/build/css/variables.css";
```

```html
<link rel="stylesheet" href="@xplortech/apollo-foundation/build/css/variables.css">
```

Including the CSS variables by one of these two methods will add all the design tokens to the global scope of your CSS. Each variable is namespaced with `--xpl` (to attempt to prevent conflicts with other global CSS variables). The variables take the form `--xpl-{category}-{class}-{modifier}-{value}-{mode}`. Categories are things like `color` and `size`, classes are things like `red` and `spacing`. There may be 0, 1, 2, or more modifiers (such as `success` or `warning`). Values are usually numeric (e.g. `0`, lightest, through `900`, darkest, for color values), but can also be strings (`bold` for font weight). Finally, if there is a mode, it is always either `lm` for light mode, or `dm` for dark mode.

### 2. JS Variables

Import the type of variables you wish to reference:

```js
import { color } from "@xplortech/apollo-foundation/build/js/colors.js";
import { font } from "@xplortech/apollo-foundation/build/js/font.js"; 
```

`color` and `font` are both deeply nested JavaScript objects (roughly following the pattern described above for CSS variables). For example, to reference the `red-700` color value, you would write:

```js
const red_700 = color.red["700"].value;
```

## More Info

The design tokens included in this package should match the Figma documentation provided [**here**](https://www.figma.com/file/qRzFFgT4Fy8p9GpUmV0g5E/Apollo-Foundation?node-id=2609%3A67938).
