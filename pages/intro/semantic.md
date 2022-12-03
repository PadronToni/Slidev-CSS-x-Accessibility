<h1 class="title">
Il concetto di semantica nel web
</h1>

<br>

<v-clicks>

Tutto cio' a cui noi attribuiamo un significato, solitamente lo deduciamo da come gli elementi appaiono nella pagina (colore, spaziature, forme, animazioni), tuttavia questa semantica non e' sempre deducibile dall'HTML.

L'HTML semantico e i WAI-Aria ci aiutano a farlo.

```html 
  <div class="card" @click="goToDetails">
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

</v-clicks>