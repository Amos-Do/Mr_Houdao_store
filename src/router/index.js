import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/index',
    },
    {
      path: '/',
      redirect: '/index',
      component: () => import('../views/frontend/Layout'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('../views/frontend/Index'),
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('../views/frontend/Products'),
        },
        {
          path: 'product_detail/:id',
          name: 'ProductDetail',
          component: () => import('../views/frontend/ProductDetail'),
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('../views/frontend/Cart'),
        },
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: () => import('../views/frontend/CustomerOrder'),
        },
        {
          path: 'payment/:orderId',
          name: 'Payment',
          component: () => import('../views/frontend/Payment'),
        },
        {
          path: 'pay_complate/:orderId',
          name: 'PayComplate',
          component: () => import('../views/frontend/PayComplate'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/admin/Login'),
    },
    {
      path: '',
      name: 'Dashboard',
      component: () => import('../views/admin/Dashboard'),
      children: [
        {
          path: '/admin/products_list',
          name: 'ProductsList',
          component: () => import('../views/admin/ProductsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/admin/coupons_list',
          name: 'CouponsList',
          component: () => import('../views/admin/CouponsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/admin/order_list',
          name: 'OrderList',
          component: () => import('../views/admin/OrderList.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
