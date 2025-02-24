---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "macvm.io"
  text: "Open-Source macOS Virtualization Solutions"
  tagline: Whether you're a developer, DevOps engineer, or simply curious about macOS virtualization, there's a place for you here!
  # actions:
  #   - theme: brand
  #     text: Markdown Examples
  #     link: /markdown-examples
  #   - theme: alt
  #     text: API Examples
  #     link: /api-examples

---
<style>
  .columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-top: 4rem;
  }

  /* For small devices, stack the columns */
  @media (max-width: 768px) {
    .columns {
      grid-template-columns: 1fr;
    }
  }
  
  .columns h2 {
    border: none;
    font-size: xx-large;
    margin-top: 0rem; /* Adjust this value to control the space between the image and title */
  }
  
  /* Remove underline and inherit the natural text color for links */
  .columns a {
    text-decoration: none;
    color: inherit;
  }
</style>

<div class="columns">
  <div>
    <a href="/posts/1-introduction-to-macos-virtualization">
      <img src="/posts/static/1-introduction-to-macos-virtualization.jpg" />
      <h2>#1 Introduction to macOS Virtualization</h2>
    </a>
  </div>
  <div>
    <a href="/posts/2-macos-virtualization-and-github-actions">
      <img src="/posts/static/2-macos-virtualization-and-github-actions.jpg" />
      <h2>#2 macOS Virtualization and GitHub Actions</h2>
    </a>
  </div>
  <div>

  </div>
</div>
