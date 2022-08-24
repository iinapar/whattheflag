<script>
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';
</script>

<Modal>
  <div slot="header">
    <h1>Instructions</h1>
  </div>
  <div>
    <p>In this game you will be shown a flag of a country. Your job is to tell the name of the country in question.</p>
    <p>Write your answer and press 'Answer' button to see if it's correct. Every wrong answer gives you -1 point.</p>
    <p>You have three tips to help you. Pressing 'Tip' you will see them one by one, but you will get -5 points for each one.</p>
    <p>If you don't know the answer you can give up the round but it gives you -10 points.</p>
    <p>You lose the game if you get -20 points.</p>
    <p>GOOD LUCK!</p>
  </div>
  <Button on:click>Close</Button>
</Modal>
