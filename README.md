[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-css-grid.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-css-grid)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-css-grid.svg)](https://greenkeeper.io/)

# fdmg-css-grid
FDMG CSS Grid with Flexbox fallback. Gap-size is `1rem`.

# Installation
* `npm i --save @fdmg/css-grid`

# Usage

## Full-width column
```html
<div class="grid">
    <div class="xs-12 s-12 m-12 l-12 xl-12">Takes full width regardless of screen width</div>
</div>
```

## Full-width columns as rows
```html
<div class="grid">
    <div class="xs-12 s-12 m-12 l-12 xl-12 gap-bottom">Takes full width regardless of screen width and adds a gap below</div>
    <div class="xs-12 s-12 m-12 l-12 xl-12">Place below previous column</div>
</div>
```

## Responsive columns
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

## Nested grid
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

* Note: the `*gap*` CSS classes are only necessary when using the FlexBox fallback.
