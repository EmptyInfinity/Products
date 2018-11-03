<template>
<div class="page-wrap">
  <div class="row">
    <div class="col">
      <h1>Products</h1>
      <div class="products-wrap">
        <h3 class="no-products" v-show="getProducts.length<1">
            No products yet
        </h3>
        <div class="product" v-for="(product, index) in getProducts" v-bind:key="index">
          <div class="cancel-btn" @click="removeProduct(index)">x</div>
          <h4>Name: {{product.name}} </h4>
          <h4>Price: {{product.price}} UAH</h4>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.state.products;
    }
  },
  methods: {
    removeProduct(id) {
      this.$store.commit("removeProduct", id);
    }
  }
};
</script>

<style>
.products-wrap {
  width: 500px;
  margin: auto;
}
.product {
  position: relative;
  border: 1px solid #212529;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.cancel-btn {
  position: absolute;
  right: 10px;
  top: 2px;
  padding: 1px;
  cursor: pointer;
  user-select: none;
}
h3{
  text-align: center;
}
</style>
