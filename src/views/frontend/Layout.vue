<template>
  <div class="wrap">
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/images/loading.png" />
      </template>
    </loading>
    <Nav />
    <Alert />
    <router-view></router-view>
    <GoTop />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Nav from '../../components/frontend/Nav.vue';
import Footer from '../../components/frontend/Footer.vue';
import Alert from '../../components/AlertMessage.vue';
import GoTop from '../../components/frontend/GoTop.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    Nav,
    Footer,
    Alert,
    GoTop,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
