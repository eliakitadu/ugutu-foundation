# Images — how to add photos and the logo

Drop image files into this folder, then point to them in `src/data/site.js`.
Any slot left as `""` shows a styled placeholder until you add a file, so the
site always looks finished.

## Logo

1. Add the file here, e.g. `public/images/logo.png` (or `logo.svg`).
2. In `src/data/site.js`, set: `logo: "/images/logo.png"`
   It replaces the "UGUTU" text mark in the header and footer.
   (A wide/horizontal logo works best; transparent PNG or SVG ideal.)

## Main page photos

In `src/data/site.js`, the `images` object controls these slots:

```js
export const images = {
  hero:    "/images/hero.jpg",     // homepage hero (portrait/tall looks best)
  story:   "/images/story.jpg",    // About → Our story
  serve:   "/images/serve.jpg",    // Homepage → The children we serve
  funding: "/images/funding.jpg",  // About → How we are funded
};
```

## School photos

Each school in the `schools` array has an `image` field:

```js
image: "/images/schools/ugutu-pre-primary.jpg"
image: "/images/schools/jowin-daycare.jpg"
```

## Gallery

Add files to `public/images/gallery/`, then list them in the `gallery` array
in `src/data/site.js`:

```js
export const gallery = [
  { src: "/images/gallery/photo-1.jpg", alt: "Children in class at Simanjiro", caption: "Simanjiro, 2026" },
  { src: "/images/gallery/photo-2.jpg", alt: "Pupils at JOWIN Daycare" },
];
```

## Tips

- Use good-quality photos (at least ~1600px wide). Landscape works well for
  most slots; the hero looks best portrait/tall.
- Prefer `.jpg` for photos, `.png`/`.svg` for the logo.
- Keep file names lowercase with dashes, no spaces (e.g. `simanjiro-classroom.jpg`).
