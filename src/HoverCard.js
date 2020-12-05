const { shell } = require("electron");
var flipped = 0;
Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleMouseClick"
      ref="card">
      <div class="card":style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage', 'link'],
  data: () => ({

    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const thingOne = flipped;
      const rX = (thingOne*1080) + this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY -  this.$refs.card.offsetTop - this.height/2;

    },
    handleMouseEnter() {
      flipped = 0;
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
        flipped = 0;
      }, 1000);
    },
    handleMouseClick(){
      flipped ^= 1;
      require("electron").shell.openExternal(this.link);
    }
  }
});
const app1 = new Vue({
  el: '#app1'
});
const app2 = new Vue({
  el: '#app2'
});
const app3 = new Vue({
  el: '#app3'
});
const app4 = new Vue({
  el: '#app4'
});
const app5 = new Vue({
  el: '#app5'
});
const app6 = new Vue({
  el: '#app6'
});

