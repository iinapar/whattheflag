<script>
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';
  import stats from './gamestats.js';
  export let givingUp;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const nextRound = () =>
    dispatch('nextRound', {
      answer: $stats.answer,
    });

  const quit = () => dispatch('quit');
</script>

<Modal>
  <div slot="header">
    {#if givingUp}
      <h1>You gave up!</h1>
    {:else}
      <h1>Right answer!</h1>
    {/if}
  </div>
  <div>
    Right answer was: <b>{$stats.countryName}</b>
  </div>
  <div>You got {$stats.roundPoints} points for this round</div>

  <div>You have a total of {$stats.points} points.</div>
  <div>You have played {$stats.round} rounds.</div>
  <div slot="footer">
    <div>
      <Button on:click={nextRound}
        >Next round<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="32px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></Button
      >
    </div>
    <div>
      <Button on:click={quit}
        >Quit <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="32px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></Button
      >
    </div>
  </div>
</Modal>

<style>
  svg {
    padding-bottom: 0.2rem;
    vertical-align: middle;
  }
</style>
