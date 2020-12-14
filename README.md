![Build](https://github.com/FDMediagroep/fdmg-css-grid/workflows/Build/badge.svg)
![Publish](https://github.com/FDMediagroep/fdmg-css-grid/workflows/Publish/badge.svg)
![CodeQL](https://github.com/FDMediagroep/fdmg-css-grid/workflows/CodeQL/badge.svg)
[![npm version](https://badge.fury.io/js/%40fdmg%2Fcss-grid.svg)](https://badge.fury.io/js/%40fdmg%2Fcss-grid)

# fdmg-css-grid

FDMG CSS Grid with Flexbox fallback. Gap-size is `1rem`.

## Installation

-   `npm i --save @fdmg/css-grid`

## Import as CSS Module

Import both if you need FlexBox fallback otherwise only include the Grid.

-   Grid: `import '@fdmg/css-grid/css/grid.css';`
-   FlexBox: `import '@fdmg/css-grid/css/flex.css';`

## Usage

### Set default size in your project

To maximize accessabilty there is no default (font) size set as we want to use the browsers' default default size.
Setting the root font-size in your project to 62.5% will result in 1rem = 10px. Then define your font-size for your
project (i.e.) as 1.6rem for 16px. This will ensure proper scaling of units.

### Full-width column

```html
<div class="grid">
    <div class="xs-12 s-12 m-12 l-12 xl-12">
        Takes full width regardless of screen width
    </div>
</div>
```

### Full-width columns as rows

```html
<div class="grid">
    <div class="xs-12 s-12 m-12 l-12 xl-12 gap-bottom">
        Takes full width regardless of screen width and adds a gap below
    </div>
    <div class="xs-12 s-12 m-12 l-12 xl-12">Place below previous column</div>
</div>
```

### Responsive columns

In case your browser doesn't support CSS Grid you may still want to have a gap between the columns. In the example below
you can see `gap-3` is added as CSS class. With this you're telling the Grid that there are 3 gaps in the widest view.
It will know what to do when the screen becomes smaller and the responsive system kicks in.

```html
<div class="grid">
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
</div>
```

### Nested grid

```html
<div class="grid">
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
        1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
    </div>
    <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom grid">
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
            1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
        </div>
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
            1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
        </div>
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
            1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
        </div>
        <div class="xs-12 s-12 m-6 l-4 xl-3 gap-3 gap-bottom">
            1/4th on xl, 1/3 on l, 1/2 on m and full width on smaller
        </div>
    </div>
</div>
```

### Advanced gap

Note that we declare a `gap-3` which is used when 4 columns are shown next to each other. `gap-2` will start its
override when the last column turns full width.

```html
<div class="grid">
    <div class="xs-12 s-12 m-4 l-4 xl-3 gap-2 gap-3 gap-bottom">
        1/4th on xl, 1/3 on l, m and s and full width on smaller
    </div>
    <div class="xs-12 s-12 m-4 l-4 xl-3 gap-2 gap-3 gap-bottom">
        1/4th on xl, 1/3 on l, m and s and full width on smaller
    </div>
    <div class="xs-12 s-12 m-4 l-4 xl-3 gap-2 gap-3 gap-bottom">
        1/4th on xl, 1/3 on l, m and s and full width on smaller
    </div>
    <div class="xs-12 s-12 m-12 l-12 xl-3 gap-3 gap-bottom">
        1/4th on xl, full width on smaller
    </div>
</div>
```

-   Note: the `*gap*` CSS classes are only necessary when using the FlexBox fallback.

### Show & Hide CSS classes

You can show/hide elements for their respective screensizes using `xs-hide`, `xs-show`, `s-hide` and `s-show` etc.
Special case `xs-hide`, `hide-lt-m` etc. will hide only for screen sizes with a `max-width` of `XS`, `M` etc. So it will not affect other screen sizes.
For instance:

```html
...
<div class="xs-12 xs-hide s-12">Will still show on screens larger than XS</div>
<div class="xs-12 hide-lt-m">Will not show on screens smaller than M.</div>
<div class="xs-12 hide-lt-l">Will not show on screens smaller than L.</div>
...
```

All other show/hide classes are calculated through `min-width` so will affect larger screen sizes.
For instance:

```html
...
<div class="xs-12 s-hide">Will not show on screens larger than XS</div>
<div class="xs-12 s-hide xl-show">
    Will not show on screens larger than XS and smaller than XL
</div>
<div class="xs-12 s-hide l-show">
    Will not show on screens larger than XS and smaller than L
</div>
...
```

## Known issues

There are many issues regarding the FlexBox fallback. It does not mirror all features available with CSS Grid.
One of such issues is the gap. When you want to implement a more advanced responsive layout I.e. 4 columns becomes
3 columns or even less and you want to hide the extraneous column then the gap space will not be shown correctly.

### Build and run demo page

1. `npm install`
1. `npm run dev`
    - The demo will run on `localhost:3000`

### Compile CSS

1. `npm run build:ci`
