<template>
  <vue-page-transition name="zoom">
    <router-view/>
  </vue-page-transition>
</template>

<script>

export default {
name: 'App',

data: () => ({
  //
}),
};
</script>

<style>
button {
font-family: 'Marcellus SC', serif;
font-size: 15px;
font-weight: bold;
letter-spacing: 1px;
padding: 5px 15px; 
background: #1e2328;
color: #cdbe91 !important;
box-shadow: inset 0 0 2px #000000;
border-style: revert !important;
background-color: #1E2328 !important;
border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
border-image-slice: 1;
border-width: 2px;
}

button:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

button:active {
text-shadow: none;
box-shadow: none;
color: #cdbe9130;
}
</style>