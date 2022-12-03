<h1 class="title">Uso corretto e intelligente dell'outline</h1>

<v-click>

<h2 class="text-center uppercase font-bold py-12">Non rimuovete l'outline!!!</h2>

</v-click>

<br>

<v-click>

```css
*:focus-visible {
  outline: var(--out-size, 2px) solid var(--out-clr, currentColor);
  outline-offset: var(--out-offset, 3px);
}
```

</v-click>

---

Esempio di personalizzazione in un componente:

```css
.on-button,
.on-button[type='button'],
.on-button[type='reset'],
.on-button[type='submit'] {
  --on-btn-main-clr: theme('colors.gray.600');
  --on-btn-main-ghost-clr: transparent;
  --on-btn-fg-clr: theme('colors.white');

  --out-clr: var(--on-btn-main-clr);

  background-color: var(--on-btn-main-clr);
  color: var(--on-btn-fg-clr);
	
	/* altre proprieta' */

}
```