<script>
  export let disabled = false;
</script>

<button on:click {disabled}><slot /></button>

<style>
  button {
    background-color: var(--acc-color);
    margin: 0.5rem;
  }
</style>
