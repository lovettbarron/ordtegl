---
layout: default
title: Press Kit
permalink: /press/
description: "Press resources for Ordtegl Danish vocabulary learning app"
---

<section class="press-intro">
  <h1>Press Kit</h1>
  <p>Media resources for Ordtegl, the Danish vocabulary learning app.</p>
</section>

<section class="press-section">
  <h2>App Description</h2>

  <div class="description-block">
    <h3>Short Description</h3>
    <div class="copyable">
      <pre id="short-desc">{{ site.data.press.short_description }}</pre>
      <button class="copy-btn" data-copy-target="short-desc">Copy</button>
    </div>
  </div>

  <div class="description-block">
    <h3>Long Description</h3>
    <div class="copyable">
      <pre id="long-desc">{{ site.data.press.long_description }}</pre>
      <button class="copy-btn" data-copy-target="long-desc">Copy</button>
    </div>
  </div>
</section>

<section class="press-section">
  <h2>App Icons</h2>
  <p>High-resolution app icons in multiple sizes.</p>

  <div class="asset-grid">
    {% for icon in site.data.press.icons %}
    <div class="asset-card">
      <img src="{{ icon.file }}" alt="{{ icon.name }}">
      <p class="asset-name">{{ icon.name }}</p>
      <p class="asset-meta">{{ icon.size }} {{ icon.format }}</p>
      <a href="{{ icon.file }}" download class="download-btn">Download</a>
    </div>
    {% endfor %}
  </div>
</section>

<section class="press-section">
  <h2>Screenshots</h2>
  <p>High-resolution iPhone screenshots showing key features.</p>

  <div class="asset-grid">
    {% for screenshot in site.data.press.screenshots %}
    <div class="asset-card">
      <img src="{{ screenshot.file }}" alt="{{ screenshot.name }}">
      <p class="asset-name">{{ screenshot.name }}</p>
      <p class="asset-meta">{{ screenshot.description }}</p>
      <a href="{{ screenshot.file }}" download class="download-btn">Download</a>
    </div>
    {% endfor %}
  </div>
</section>

<section class="attributions">
  <h2>Data Sources & Attributions</h2>

  {% for attr in site.data.press.attributions %}
  <div class="attribution-item">
    <h4>{{ attr.name }}</h4>
    <p>{{ attr.description }}</p>
    <p class="license">License: {{ attr.license }}</p>
    <p>{{ attr.attribution }}</p>
    {% if attr.note %}
    <p class="note">{{ attr.note }}</p>
    {% endif %}
    <p><a href="{{ attr.url }}">{{ attr.url }}</a></p>
  </div>
  {% endfor %}
</section>

<script src="/assets/js/clipboard.js"></script>
