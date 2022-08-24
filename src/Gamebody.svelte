<script>
  import Button from './Button.svelte';
  import stats from './gamestats.js';
  import { scale } from 'svelte/transition';
  import { fly, blur } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';
  export let wrongAnswer;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const tip = () => dispatch('tip');

  const Answer = () =>
    dispatch('Answer', {
      answer: $stats.answer,
    });

  const giveUp = () =>
    dispatch('giveUp', {
      answer: $stats.answer,
    });

  $: isItOK = isItValid($stats.answer);

  let isItValid = (answer) => answer.trim().length > 0;
</script>

<div class="flex-container">
  <div class="flex-child">Score for this round: {$stats.roundPoints}</div>
  <div class="flex-child">Total score: {$stats.points}</div>
</div>

<div class="center">
  <img src={$stats.newCountry.flag} alt="Random country flag" />
</div>

<!-- Each-lohko, joka luo arvotusta maan nimestä taulukon ja käy erikseen läpi nimestä jokaisen merkin
Jos merkki on kirjain tulostetaan _ 
Erikoismerkit tulostetaan näkyville.
-->
<div class="wordGenerator">
  {#each Array.from($stats.countryName) as y, i}
    {#if RegExp(/^\p{L}/, 'u').test(y)}
      _&nbsp;
    {:else}
      {y}&nbsp;
    {/if}
  {/each}
</div>

<div>
  <div class="center">
    <input type="text" bind:value={$stats.answer} placeholder="Write your answer here..." />
    <Button on:click={Answer} disabled={!isItOK}>Answer</Button>
  </div>
  {#if wrongAnswer}
    <div in:fly={{ y: -30, duration: 1000, easing: elasticOut }} out:blur>Wrong answer! You lost 1 point!</div>
  {/if}

  <!-- If-lohkot vinkkien näyttämiseen gamestats.js tips-muuttujan arvon perusteella  -->
  <div>
    {#if $stats.tips < 3}
      <div transition:scale={{ delay: 100, duration: 200 }}>1. Region: {$stats.countries[$stats.randomCountry].region}</div>
    {/if}
    {#if $stats.tips < 2}
      <div transition:scale={{ delay: 100, duration: 200 }}>2. Subregion: {$stats.countries[$stats.randomCountry].subregion}</div>
    {/if}
    {#if $stats.tips < 1}
      {#if $stats.countries[$stats.randomCountry].capital === undefined}
        <div transition:scale={{ delay: 100, duration: 200 }}>3. Capital: No capital</div>
      {:else}
        <div transition:scale={{ delay: 100, duration: 200 }}>3. Capital: {$stats.countries[$stats.randomCountry].capital}</div>
      {/if}
    {/if}
  </div>
  <Button on:click={tip} disabled={$stats.tips <= 0}>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="32px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
    Tip ({$stats.tips}) (-{$stats.tipPenalty} p)
  </Button>

  <Button on:click={giveUp}
    >Give up <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="32px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg></Button
  >
</div>

<style>
  img {
    height: 8rem;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .wordGenerator {
    font-size: 24px;
    letter-spacing: 3px;
  }

  svg {
    vertical-align: middle;
  }

  .flex-container {
    display: flex;
  }

  .flex-child {
    flex: 1;
    border: 2px solid black;
    margin: 1rem;
    padding: 0.5rem;
  }
</style>
