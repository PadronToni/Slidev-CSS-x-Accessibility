
<h1 class="title">Non stilate gli elementi nativi</h1>

<br>

<v-clicks>

Come nello scorso esempio, possiamo usare gli elementi nativi per "avvolgere" i componenti.

Per evitare conflitti tra stili la soluzione migliore e' di non stilare gli elementi!

Deleghiamo lo stile ad una classe che da' l'aspetto di un bottone

</v-clicks>

--- 

Esempio di una classe di stile di un bottone: 
```css
.btn {
  --btn-fg: theme('colors.neutral.500');
  --btn-bg: theme('colors.neutral.50');
  --btn-border-radius: theme('borderRadius.lg');
  --btn-height: 48px;
  --btn-border-size: 2px;
  --btn-offset: 3px;

  line-height: var(--btn-height);

  @apply flex items-center justify-center
  px-6
  font-semibold whitespace-nowrap
  select-none cursor-pointer
  bg-transparent;

  border-radius: var(--btn-border-radius);
  border: var(--btn-border-size) solid currentColor;
}
.btn[data-color="primary"] {
  --btn-fg: theme('colors.primary.500');
  --btn-bg: theme('colors.primary.50');
}
```