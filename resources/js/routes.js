module.exports = [
    {
        path: '/',
        name: 'products.index',
        component: require('./routes/Product/Index.vue').default
    },
    {
        path: '/products/:slug',
        name: 'products.show',
        component: require('./routes/Product/Show.vue').default
    },
    {
        path: '/cart',
        name: 'order.cart',
        component: require('./routes/Order/Cart.vue').default
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: require('./routes/Order/Checkout.vue').default
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: require('./routes/Order/Summary.vue').default
    },


]
