# Semantic Theme
defines the style Theme in UX terms as opposite to UI ones :)

Semantic theme vocabulary defines UX attributes in device neutral way. 
UX components in dark or light mode, printed on paper, and on e-paper screen 
are expressed is same semantic terms. You could take this vocabulary, override or 
extend it with your app-specific terms and compile into various platforms by
[Style Dictionary](https://github.com/amzn/style-dictionary).

# HTML semantic theme
[true-responsive](../demo/true-responsive) showcase in HTML 5 uses semantic CSS styling via CSS 
properties( aka CSS variables) rendered from Semantic Theme definitions. 

[html5.css](html5.css) and [true-responsive.css](../demo/true-responsive.css) implement semantic definitions 
for switching between `dark`/`light` and `sparse`/`spaced`/`compressed` variations.

# build
From project root run the usual `npm run build` or

    style-dictionary build -c ./semantic-theme/config.json

It would generate the [variables.css](variables.css) from theme defined by 
[properties](properties) directory with theme definitions.
 