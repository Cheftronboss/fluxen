{#if show}
  <nav transition:fly={{x: 250, opacity: 1}}>
    <button on:click={() => {modal_show = true; show = false;}}>About</button>
  </nav>
{/if}

<Modal bind:show={modal_show} />

<script>
import './Sidebar.css';

import { fly } from 'svelte/transition';
import Modal from './Modal.svelte';

export let show = false;
let modal_show = false;
</script>
		

