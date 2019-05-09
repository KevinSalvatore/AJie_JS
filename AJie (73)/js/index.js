Vue.component("Content", {
  template: `
  <div class="content">
  <div class="item" v-for="(hero, index) in heroes">
    <div class="item-body">
      <div class="avatar">
        <img :src="hero.src">
      </div>
      <div class="indo">
        {{hero.name}}
      </div>
    </div>
  </div>
</div>
  `,
  props: {
    heroes: {
      type: Array
    }
  },
  data(){
    return {
      // heroes
    }
  }
});
Vue.component("Snap", {
  template: `
<div class="main">
  <div class="gauntlet">
    <div class="gauntlet-wrapper">
      <div v-if="showSnap" id="gauntlet-snap" class="gauntlet-item" :class="snaping ? 'snaping' : ''" @click="snapHandle"></div>
      <div v-if="showReverse" id="gauntlet-reverse" class="gauntlet-item" :class="reversing ? 'reversing' : ''" @click="reverseHandle"></div>
    </div>
  </div>
  <audio preload ref="allAudio"></audio>
  <Content :heroes="heroes"/>
</div>
  `,
  data() {
    return {
      snaping: false,
      reversing: false,
      showSnap: true,
      showReverse: false,
      heroes
    };
  },
  methods: {
    snapHandle() {
      this.snaping = true;
      const audio = this.$refs.allAudio;
      audio.src =
        "https://yiliang114.github.io/vue-thanos-snap/media/thanos_snap_sound.b746c7d7.mp3";
      audio.play();
      setTimeout(() => {
        this.showSnap = false;
        this.showReverse = true;
        this.snaping = false;
      }, 2800);
    },
    reverseHandle() {
      this.reversing = true;
      const audio = this.$refs.allAudio;
      audio.src =
        "https://yiliang114.github.io/vue-thanos-snap/media/thanos_reverse_sound.e00730e1.mp3";
      audio.play();
      setTimeout(() => {
        this.showSnap = true;
        this.showReverse = false;
        this.reversing = false;
      }, 2800);
    }
  }
});
new Vue({
  el: "#app",
  data() {
    return {
      hero: "snap"
    };
  }
});
