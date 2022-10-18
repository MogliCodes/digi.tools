<template>
  <div class="pt-12">
    <div class="container mx-auto grid grid-cols-3 gap-8">
      <div class="">
        <input v-model="inputSlug" class="border p-2 rounded slug-input block w-full" placeholder="Enter a string to slugify" type="text">
      </div>
      <div class="">
        <button class="bg-black border rounded p-2 w-full" @click="stringify">Stringify</button>
      </div>
      <div class="">
        <textarea class="border rounded w-full">{{ stringifiedSlug }}</textarea>
      </div>
      {{ stringifiedSlug }}
    </div>
  </div>
</template>

<script setup lang="ts">

const inputSlug = ref(null)
let stringifiedSlug = ref(null)

function stringify() {
  stringifiedSlug.value = inputSlug.value.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
}


</script>
