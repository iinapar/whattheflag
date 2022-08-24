<script></script>

<div class="backdrop" />

<div class="moodal">
  <header>
    <slot name="header" />
  </header>
  <slot />
  <footer>
    <slot name="footer" />
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
  }

  .moodal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 30vw;
    width: 40%;
    max-height: 80vh;
    background: #e9dac1;
    border-radius: 10px;
    z-index: 20;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.656);
    overflow: auto;
    border: 2px black solid;
  }

  footer {
    padding: 1rem;
  }
</style>
