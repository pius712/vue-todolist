import bus from '../utils/bus';
export default {
  // 재사용할 컴포넌트 옵션
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  // created() {
  //   bus.$emit('start:spinner');
  //   // setTimeout(() => {

  //   // }, 3000);
  //   this.$store
  //     .dispatch('FETCH_LIST', this.$route.name)
  //     .then(result => {
  //       console.log('result');
  //       console.log(result);
  //       bus.$emit('end:spinner');
  //       return result;
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // },
};
