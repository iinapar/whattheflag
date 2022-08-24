<script>
  import stats from './gamestats.js';
  import Gamebackground from './Gamebackground.svelte';
  import Gamebody from './Gamebody.svelte';
  export let wrongAnswer;
</script>

<main>
  <Gamebackground>
    <div slot="header">
      <h3>ROUND {$stats.round}</h3>
    </div>
    <div>
      <Gamebody on:Answer on:giveUp on:tip {wrongAnswer} />
    </div>
  </Gamebackground>
</main>

<style>
  h3 {
    padding: 0.5rem;
    margin: 0%;
  }
</style>
