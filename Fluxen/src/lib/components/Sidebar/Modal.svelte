

{#if show}
<div>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" data-close on:click={proc_overlay_click} transition:fade={{duration: 150}}>
    <div class="modal-container">
      <main><p class="modal_about_text">Fluxen, logiciel de création de devis et de factures pour freelancers !</p></main>
    </div>
  </div>
</div>
{/if}

<script>

// @ts-nocheck
import { fade } from 'svelte/transition';

  /**
   * @param {{ target: { dataset: any; }; }} e
   */
function proc_overlay_click(e) {
    if ('close' in e.target.dataset)
        show = false;
}

export let show = false;
</script>
<style>
@import './Modal.css';
</style>