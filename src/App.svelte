<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Game from './Game.svelte';
  import Instructions from './Instructions.svelte';
  import Button from './Button.svelte';
  import Startup from './Startup.svelte';
  import Rightanswer from './Rightanswer.svelte';
  import Gameover from './Gameover.svelte';
  import stats from './gamestats.js';

  let gameOn = false;
  let instructions = false;
  let wrongAnswer = false;
  let rightAnswer = false;
  let givingUp = false;
  let loading = false;

  // Funktio hakee tietokannasta datan ja sijoittaa sen countries muuttujaan
  onMount(async () => {
    loading = true;
    const response = await fetch(`https://restcountries.com/v2/all`);
    if (!response.ok) {
      throw new Error('Data not found');
    }
    $stats.countries = await response.json();
    loading = false;
  });

  // Funktio generoi satunnaisen maan countries-taulukosta randomCountry -muuttujaan
  function generateCountry() {
    $stats.randomCountry = (Math.random() * $stats.countries.length) | 0;
  }

  // Funktio vastaus-painikkeelle, tarkastaa onko annettu vastaus oikein. Muutetaan sekä oikea vastaus että pelaajan arvaus isoiksi kirjaimiksi, jotta kirjainkoko ei vaikuttaisi ratkaisuun
  // Jos vastaus on oikein, tyhjennetään newCountry ja countryName -muuttujat, lisätään kokonaispisteisiin kierrospisteet ja muutetaan righAnswer muuttujan arvo trueksi
  // Jos vastaus on väärä, muutetaan wrongAnswer muuttujan arvo trueksi 3000 millisekunnin ajaksi ja vähennetään kierrospisteistä virhepenalty
  function Answer(ce) {
    $stats.answer = ce.detail.answer;
    if ($stats.answer.toUpperCase() === $stats.countryName.toUpperCase()) {
      $stats.newCountry = '';
      $stats.points += $stats.roundPoints;
      rightAnswer = true;
    } else {
      wrongAnswer = true;
      $stats.roundPoints -= $stats.mistakePenalty;
      setTimeout(() => (wrongAnswer = false), 3000);
    }
  }

  // Aloitusfunktio, generoidaan arvattava maa ja laitetaan pelitila päälle
  function start() {
    generate();
    gameOn = true;
  }

  // Vinkkifunktio, vähennetään vinkkien määrää yhdellä ja vähennetään kierrospisteistä vinkkipenalty
  function tip() {
    $stats.tips--;
    $stats.roundPoints -= $stats.tipPenalty;
  }

  //Lopetusfunktio, otetaan pelitila pois päältä ja palautetaan aloitusasetukset
  function quit() {
    gameOn = false;
    rightAnswer = false;
    givingUp = false;
    $stats.round = 1;
    $stats.points = 0;
    $stats.roundPoints = $stats.MAXpoints;
    $stats.tips = 3;
    $stats.answer = '';
  }

  //Uusikierrosfunktio, palautetaan kierrospisteet ja vinkkien määrä oletusarvoihin, tyhjennetään vastaus-input, generoidaan seuraavaksi arvattava maa ja plussataan kierrosluku
  function nextRound() {
    $stats.roundPoints = $stats.MAXpoints;
    rightAnswer = false;
    givingUp = false;
    $stats.tips = 3;
    $stats.answer = '';
    generate();
    $stats.round++;
  }

  // Luovutus-funktio, luovutsruutu näkyväksi, muutetaan kierrospisteet luovutspenaltya vastaaviksi ja lisätään ne kokonaispisteisiin
  function giveUp(ce) {
    $stats.answer = ce.detail.answer;
    givingUp = true;
    $stats.roundPoints = $stats.giveupPenalty;
    $stats.points += $stats.roundPoints;
  }

  // Arvotaan uusi maa countries-taulukosta ja otetaan maan nimi countryName muuttujaan
  function generate() {
    generateCountry();
    $stats.newCountry = $stats.countries[$stats.randomCountry];
    $stats.countryName = $stats.newCountry.name;
  }
</script>

<main>
  <div class="center">
    <h1>What the flag !</h1>
  </div>
  <!-- Näytetään loading spinner datan hakemisen ajan, jotta saadaan tarvittaville muuttujille varmasti arvot.
     Kun kaikki on valmiina, näytetään Startup näkymä, jos gameOn muuttuja on false, muutoin näytetään Game näkymä -->
  {#if loading}
    <div class="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  {:else if !gameOn}
    <Startup on:start={start} />
  {:else if gameOn}
    <Game {wrongAnswer} on:Answer={Answer} on:tip={tip} on:giveUp={giveUp} />
  {/if}

  <!-- Jos kokonaispisteet yhtäsuuret tai vähemmän kuin minimipisteet näytetään Gameover näkymä, pisteiden ollessa korkeammat mutta rightAnswer tai givinUp muuttujan ollessa true näytetään Rightanswer näkymä  -->
  {#if $stats.points <= $stats.MINpoints}
    <div transition:fade={{ delay: 50, duration: 100 }}>
      <Gameover on:quit={quit} />
    </div>
  {:else if rightAnswer || givingUp}
    <div in:fade={{ delay: 50, duration: 100 }}>
      <Rightanswer on:quit={quit} on:nextRound={nextRound} {givingUp} />
    </div>
  {/if}
  <!-- Ohje-ikkunan avaaminen Instructions-painikkeella -->
  {#if instructions}
    <div transition:fade={{ delay: 50, duration: 100 }}>
      <Instructions on:click={() => (instructions = !instructions)} />
    </div>
  {/if}
  <div><Button on:click={() => (instructions = !instructions)}>Instructions</Button></div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    background-color: var(--main-color);
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 200;
    margin: 0.5rem;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    width: 35m;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
