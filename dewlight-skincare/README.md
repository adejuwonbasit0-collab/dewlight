# Dewlight - skincare frontend (HTML, CSS, JavaScript)

No build step. Upload the folder to any static host, or run locally:

    python3 -m http.server 8000     # then open http://localhost:8000

## Pages
- index.html        Scroll-controlled cream show (3D), concerns, featured products
- shop.html         All products, filter by type, concern and skin type, sort
- product.html      Product detail (?id=...), benefits, ingredients, how to use, add to bag
- routine.html      Four-question routine finder with morning and evening plans
- ingredients.html  Ingredient glossary built from the product data
- about.html, contact.html

## Edit products, brand and the WhatsApp number
Open `js/data.js`: `SK_BRAND` (name, WhatsApp, phone) and `SK_PRODUCTS`. Every page updates.
The bag saves in the browser and checks out by opening WhatsApp with the order written out.

## The hero
The cream show is a live 3D scene (three.js, bundled in `js/hero3d.js`), driven by scroll: jars slide in,
lids unscrew, cream rises and swirls, the camera dollies in, and the backdrop changes colour per cream.
The four hero creams are the products that have a `hero` line in data.js.
If a browser cannot run WebGL the page falls back to the normal layout.

## Product images
`assets/products/*.webp` are 3D renders made from the same scene. To use real photos, replace the file
with the same name (800x900 recommended).
