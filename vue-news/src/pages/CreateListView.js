import ListView from './ListView.vue';
import bus from '../utils/bus.js';
import ListItem from '../components/ListItem';
export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    // el :'',
    // data: '',
    // components:{
    // },
    // creatd(){
    // }
    name: 'HOC',
    // template: `
    // <div class="ListView">
    //     <list-item :items="list"></list-item>
    // </div>
    // `,
    // computed: {
    //   list() {
    //     return this.$store.state.list;
    //   },
    // },
    components: {
      ListItem,
    },
    created() {
      bus.$emit('start:spinner');
      // setTimeout(() => {

      // }, 3000);
      console.log('?');
      console.log(this.$route);
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(result => {
          bus.$emit('end:spinner');
          return result;
        })
        .catch(err => {
          console.error(err);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
