# Strategie per il focus dei componenti
<br>
Alcune volte, vi è la necessità di sviluppare dei componenti che hanno bisogno nella loro interezza di avere focus durante la navigazione

Le card sono un esempio

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

Abbiamo due possibili strategie