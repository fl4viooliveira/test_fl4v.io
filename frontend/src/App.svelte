<script>

import { onMount } from 'svelte';

const apiURL = 'http://127.0.0.1:8000/api/blog/posts/';
let data = [];

onMount (async function() {
  const response = await fetch(apiURL);
  data = await response.json();
});

</script>

<main>
  {#each data as item}
    <h1>{item.title}</h1>
    <div>
      <p>{item.content}</p>
    </div>
  {/each}
</main>


<style>
  
</style>
