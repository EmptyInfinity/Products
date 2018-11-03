<template>
<div id="app" class="container-fluid">
    <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img width="100px" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png" alt="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'main' }" class="nav-link">Main page</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Products' }" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Add product' }" class="nav-link">Add product</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view></router-view>
</div>
</template>
