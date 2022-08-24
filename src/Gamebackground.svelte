<div class="background">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</div>

<style>
  .background {
    background-color: var(--light-main-color);
    position: relative;
    left: 20vw;
    right: 20vw;
    width: 60%;
    border: 2px solid black;
    box-shadow: 2px 5px 5px rgb(137, 137, 137);
    padding: 0.5rem;
  }
</style>
