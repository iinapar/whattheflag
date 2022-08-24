import { writable } from 'svelte/store';

const stats = writable({
  round: 1,
  points: 0,
  MINpoints: -20,
  MAXpoints: 20,
  roundPoints: 20,
  tips: 3,
  tipPenalty: 5,
  mistakePenalty: 1,
  giveupPenalty: -10,
  randomCountry: null,
  newCountry: '',
  countryName: '',
  answer: '',
  countries: [],
});

export default stats;
