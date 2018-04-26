# fdmg-css-grid
[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-css-grid.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-css-grid)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-css-grid.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fcss-grid.svg)](https://badge.fury.io/js/%40fdmg%2Fcss-grid)

FDMG CSS Grid with Flexbox fallback. Gap-size is `1rem`.

## Installation
* `npm i --save @fdmg/css-grid`

## Import as CSS
Import both if you need FlexBox fallback otherwise only include the Grid.
* Grid: `@import 'node_modules/@fdmg/css-grid/dist/css/grid';`
* FlexBox: `@import 'node_modules/@fdmg/css-grid/dist/css/flex';`

## Import as SCSS
Import both if you need FlexBox fallback otherwise only include the Grid.
* Grid: `@import 'node_modules/@fdmg/css-grid/scss/grid';`
* FlexBox: `@import 'node_modules/@fdmg/css-grid/scss/flex';`

## Usage
### Set default size in your project
To maximize accessabilty there is no default (font) size set as we want to use the browsers' default default size.
Setting the root font-size in your project to 62.5% will result in 1rem = 10px. Then define your font-size for your
project (i.e.) as 1.6rem for 16px. This will ensure proper scaling of units.
### Full-width column
```html
<div class="grid">
    <div class="xs-12 s-12 m-12 l-12 xl-12">Takes full width regardless of screen width</div>
</div>
```

### Full-width columns as rows
```html
<div class="grid">
    <div class="xs-12 s-12 m-12 l-12 xl-12 gap-bottom">Takes full width regardless of screen width and adds a gap below</div>
    <div class="xs-12 s-12 m-12 l-12 xl-12">Place below previous column</div>
</div>
```

### Responsive columns
In case your browser doesn't support CSS Grid you may still want to have a gap between the columns. In the example below
you can see `gap-3` is added as CSS class. With this you're telling the Grid that there are 3 gaps in the widest view.
It will know what to do when the screen becomes smaller and the responsive system kicks in.
```html
<div class="grid">
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
</div>
```

### Nested grid
```html
<div class="grid">
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom grid">
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller</div>
    </div>
</div>
```

### Advanced gap
Note that we declare a `gap-3` which is used when 4 columns are shown next to each other. `gap-2` will start its 
override when the last column turns full width.
```html
<div class="grid">
    <div class="xs-12 s-12 m-4 l-4 xl-3 gap-2 gap-3 gap-bottom">1/4th on xl, 1/3 on l, m and s and full width on smaller</div>
    <div class="xs-12 s-12 m-4 l-4 xl-3 gap-2 gap-3 gap-bottom">1/4th on xl, 1/3 on l, m and s and full width on smaller</div>
    <div class="xs-12 s-12 m-4 l-4 xl-3 gap-2 gap-3 gap-bottom">1/4th on xl, 1/3 on l, m and s and full width on smaller</div>
    <div class="xs-12 s-12 m-12 l-12 xl-3 gap-3 gap-bottom">1/4th on xl, full width on smaller</div>
</div>
```

* Note: the `*gap*` CSS classes are only necessary when using the FlexBox fallback.

### Show & Hide CSS classes
You can show/hide elements for their respective screensizes using `xs-hide`, `xs-show`, `s-hide` and `s-show` etc.
Special case `xs-hide` and `xs-show` will set display `none !important` or `inherit !important` only for screen sizes with a `max-width` of `XS`. So it will not affect other screen sizes.
For instance:
```html
...
<div class="xs-12 xs-hide s-12">Will still show on screens larger than XS</div>
...
```
All other show/hide classes are calculated through `min-width` so will affect larger screen sizes.
For instance:
```html
...
<div class="xs-12 s-12 s-hide">Will not show on screens larger than XS</div>
<div class="xs-12 s-12 s-hide xl-show">Will not show on screens larger than XS and smaller than XL</div>
<div class="xs-12 s-12 s-hide l-show">Will not show on screens larger than XS and smaller than L</div>
...
```

## Known issues
There are many issues regarding the FlexBox fallback. It does not mirror all features available with CSS Grid.
One of such issues is the gap. When you want to implement a more advanced responsive layout I.e. 4 columns becomes
3 columns or even less and you want to hide the extraneous column then the gap space will not be shown correctly.

## Demo
The demo will run on `localhost:3008`.

### Build and run demo page
1. `npm install`
1. `npm run build`
1. `npm run start`
#### Stop demo
You need to stop the demo manually or it will keep running until you reboot.
1. `npm run stop`

### Make adjustments to the demo
You may want to play around with the demo. When you do that you probably want the demo to auto-transpile and reload.
For this you can start a few watches which auto-transpiles your server and client code:
1. `npm run watch-client`
1. `npm run watch-server`
1. `npm run start` - start the server. When you've followed the above steps whenever you change the TypeScript files it will auto-transpile and the server will
reload with the new assets.

### Compile release code
The following will transpile the demo page with the `production` flag.
1. `npm run release`
or to only transpile the TypeScript for release:
1. `npm run compile-release`
