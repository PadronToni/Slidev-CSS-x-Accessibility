<h1 class="title">Strategia per direttiva</h1>

<br>

Se utilizziamo un framework js possiamo utilizzare una directive

```ts
export const vFocusable = {
	mounted(el: HTMLElement, binding: any) {

		// rende focusable
		el.setAttribute('tabindex', '0');
		// da il ruolo di bottone per essere individuato
		// dagli screen reader correttamente
		el.setAttribute('role', 'button');

		// simula il click al keypress su enter o spacebar
		el.addEventListener('keypress', (evt: any) => {
			if (evt.key === "Enter" || evt.key === " ") {
				evt.preventDefault();
				el.click();
			}
		})

	}
}
```


---

risultato:

```html 
  <div class="card" @click="goToDetails" v-focusable>
    <div class="card-image">
      <img
        :src="item.image"
        @error="ImagesHelper.onErrorLoad($event, DEF_IMG)"
        :alt="item.imageDesc"
      />
    </div>
    <span class="card-badge" v-else-if="item.inEvidence">New</span>
    <div class="card-content">
      <span class="font-bold text-xl">{{ item.name }}</span>
    </div>
  </div>
```