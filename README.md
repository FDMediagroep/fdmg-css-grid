# fdmg-css-grid
[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-css-grid.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-css-grid)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-css-grid.svg)](https://greenkeeper.io/)

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

## Known issues
There are many issues regarding the FlexBox fallback. It does not mirror all features available with CSS Grid.
One of such issues is the gap. When you want to implement a more advanced responsive layout I.e. 4 columns becomes
3 columns or even less and you want to hide the extraneous column the gap space will not be shown correctly.
