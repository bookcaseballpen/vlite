# VLITE

Vlite is light version template rendering library, this library has dependency on jquery. this is a ES5 library and working on most of browswers.

## how to use

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="./dist/vlite.min.js"></script>
```

```javascript
var vlite = new Vlite();
vlite.init("#app", "/test.tpl.html", ""); // this will add the rendered element to the given node
```
