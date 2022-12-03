<h1 class="title">Strategia per elementi nativi</h1>

<br>

"Avvolgo" tutto in un bottone, cosi nativamente avro' focus e click emulato a `spacebar` ed `enter`

```html 
  <button class="card" @click="goToDetails">
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
  </button>
```