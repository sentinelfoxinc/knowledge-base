---
layout: default
title: "Sentinelfox Knowledge Hub"
---

# 🧠 Sentinelfox Knowledge Hub

Welcome to the **Sentinelfox internal knowledge base** — your one-stop hub for operations, DevOps, and incident documentation.

---

<div style="display: flex; flex-direction: row; gap: 2rem;">

<!-- Sidebar -->
<div style="flex: 0 0 250px; border-right: 1px solid #ddd; padding-right: 1rem; height: 100%;">
  <h3>📚 Documentation Index</h3>
  <ul>
    {% assign sorted_pages = site.pages | sort: 'title' %}
    {% for page in sorted_pages %}
      {% if page.title and page.url != '/' %}
        <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

<!-- Main content -->
<div style="flex: 1;">
  <h2>Welcome</h2>
  <p>Browse through our internal documentation using the sidebar on the left. You’ll find details on infrastructure, monitoring, automation, and access controls.</p>

  <h3>Recently Updated</h3>
  <ul>
    {% assign sorted_docs = site.pages | sort: 'date' | reverse %}
    {% for doc in sorted_docs limit:5 %}
      {% if doc.title and doc.url != '/' %}
        <li><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

</div>
