<template>
<div class="page-wrap">
  <div class="row">
    <div class="col">
      <h1>Here you may add some products</h1>
      <div class="form-wrap">
        <div class="form">
          <input type="text" placeholder="Product name" class="form-control" v-model="productName">
          <p>{{productName}} price:</p>
          <div class="input-group">
            <input type="text"
              class="form-control"
              v-model="productPrice"
              placeholder="Product price">
            <div class="input-group-append">
              <span class="input-group-text counters-wrap">
                <span class="rotateY-90" @click="incProductPrice()">&lt;</span>
                <span class="rotateY-90" @click="decProductPrice()">&gt;</span>
              </span>
              <span class="input-group-text">UAH</span>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <input type="submit" class="btn btn-success" value="Add" @click="addProduct()">
            <input type="reset" class="btn btn-primary" value="Reset" @click="reset()">
            <button class="btn btn-danger" @click="back()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      productName: "",
      productPrice: ""
    };
  },
  methods: {
    incProductPrice() {
      this.productPrice++;
    },
    decProductPrice() {
      this.productPrice--;
    },
    addProduct() {
      if (!isNaN(parseFloat(this.productPrice)) && isFinite(this.productPrice) && this.productName.trim().length>2) {
        this.$store.commit({
          type: "addProduct",
          name: this.productName,
          price: this.productPrice
        });
        this.productName = "";
        this.productPrice = "";
      }
    },
    reset() {
      this.productName = "";
      this.productPrice = "";
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
.form-control {
  margin-bottom: 10px;
}
.form {
  width: 300px;
  margin: auto;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 15px 15px;
}
.input-group {
  margin-bottom: 15px;
}
.counters-wrap {
  width: 30px;
  height: 38px;
  position: relative;
}
.rotateY-90 {
  transform: rotate(90deg);
  cursor: pointer;
  text-align: center;
  position: absolute;
  user-select: none;
}
.rotateY-90:first-child {
  top: -6px;
  width: 22px;
  left: 3px;
  height: 28px;
  border-right: 1px solid #ced4da;
}
.rotateY-90:last-child {
  bottom: -6px;
  width: 16px;
  left: 6px;
  height: 27px;
}
.btn {
  width: 80px;
}
</style>
