# Creator Images

This folder contains profile images for the "Creators We Already Manage" section.

## Image Guidelines

### File Naming Convention
Use lowercase with hyphens, e.g.:
- `john-doe.jpg`
- `jane-smith.png`
- `creator-name.webp`

### Image Specifications
- **Format:** JPG, PNG, or WebP (WebP recommended for best performance)
- **Dimensions:** 400x400px (square) or 1:1 aspect ratio
- **File Size:** Keep under 200KB for optimal loading
- **Quality:** High quality, professional headshots or profile photos

### How to Use Images in Code

In your React components, reference images like this:

```tsx
<img src="/images/creators/creator-name.jpg" alt="Creator Name" />
```

Or with Vite's asset handling:

```tsx
import creatorImage from '/images/creators/creator-name.jpg';

<img src={creatorImage} alt="Creator Name" />
```

### Optimization Tips
- Use tools like TinyPNG or Squoosh to compress images
- Consider using WebP format for better compression
- Ensure images are properly cropped to square dimensions before uploading
