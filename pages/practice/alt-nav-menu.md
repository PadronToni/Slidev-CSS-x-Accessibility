<h1 class="title">Menu di navigazione alternativo e content skip</h1>

<br>

Quando uno screenreader scandaglia il nostro HTML, segue l'accessibility tree, leggendo molti elementi prima di arrivare al contenuto

La soluzione per facilitare la navigazione e' usare un menu di navigazione alternativo visibile solo da navigazione da tastiera

```html
<body>
	<nav class="alt-nav-menu"></nav>

	<!-- altri elementi -->
</body>
```

Esempio perfetto su [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)

---

Implementazione CSS

```css
.alt-nav-menu {
	visibility: hidden;
	/* altre proprieta' */
}
.alt-nav-menu:focus-visible {
	visibility: visible;
}

```