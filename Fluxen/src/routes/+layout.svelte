<script lang="ts">
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
  let sidebar_show = false;
</script>



<Sidebar bind:show={sidebar_show} />

<main>
  <button class="main_menu_button" on:click={() => sidebar_show = !sidebar_show}>Menu</button>
  <div class="main_title">
    <h1>Fluxen</h1>
    <p>Bienvenue sur Fluxen, le logiciel par un freelancer, pour les freelancers !</p>
  </div>

  
</main>
