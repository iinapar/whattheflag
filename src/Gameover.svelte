<script>
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';
  import stats from './gamestats.js';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const quit = () => dispatch('quit');
</script>

<Modal>
  <div slot="header">
    <h1>Game over!</h1>
  </div>
  <div>You got a total of {$stats.points} points and lost the game.</div>
  <div>
    Right answer was: <b>{$stats.countryName}</b>
  </div>
  <div>You played {$stats.round} rounds.</div>
  <div slot="footer">
    <Button on:click={quit}
      >Quit <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="32px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg></Button
    >
  </div>
</Modal>

<style>
  svg {
    padding-bottom: 0.2rem;
    vertical-align: middle;
  }
</style>
