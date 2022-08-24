<script>
  import Button from './Button.svelte';
  import Gamebackground from './Gamebackground.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const start = () => dispatch('start');
</script>

<main>
  <Gamebackground>
    <div slot="header">
      <h2>WELCOME</h2>
    </div>
    <div class="center">
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgeDE9IjE4LjU5NCIgeDI9IjMuMzczIiB5MT0iNDcuOTIiIHkyPSI1LjQwNyIvPjxwYXRoIGQ9IiAgTTQuNDQ4LDguNDA5YzAsMCw1LjkxMS02LjQwOSwxNi4xNzktNi40MDljNi4yNSwwLDkuMTA2LDQuMDczLDE0LjI2NCw0LjA3M0M0MC4wNDYsNi4wNzMsNDQuOTk4LDIsNDQuOTk4LDJ2MjYuNDcxICBjMCwwLTMuNzIzLDIuMDM3LTguMTQ2LDIuMDM3Yy00LjQyMSwwLTYuMjI1LTIuMDM3LTEyLjIxNy0yLjAzN2MtNS42ODMsMC0xMS4wMjUsNS41MTYtMTEuMDI1LDUuNTE2TDQuNDQ4LDguNDA5eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTQuNDQ4LDguNDA5YzAsMCwzLjA2Ny0zLjI0OCw3LjIwNy00LjU4NGwzLjE2NCw4LjEyNGMwLDAtNC4wODYsMS40Ny03LjQyMiw0LjYwNUw0LjU1Myw4LjcwOSIvPjxwYXRoIGQ9Ik0xNC44MTksMTEuOTQ5bDMuNDEyLDguNzU5YzAsMCwyLjY4My0wLjk1NCw0LjUzLTAuOTU0czMuNjc4LDAuMjcxLDMuNjc4LDAuMjcxbC0yLjQ3Ny05LjMxNWMwLDAtMC43LTAuMDk5LTEuNTYzLTAuMDk5ICBDMTguMjY0LDEwLjYxMSwxNC44MTksMTEuOTQ5LDE0LjgxOSwxMS45NDl6Ii8+PHBhdGggZD0iTTEwLjcyLDI1Ljc3NmwyLjg5LDguMjFjMCwwLDMuOTk3LTMuODMyLDcuODA0LTQuOTFsLTMuMTgyLTguMzY4QzE0LjU2NiwyMi4xMiwxMC43MiwyNS43NzYsMTAuNzIsMjUuNzc2eiIvPjxwYXRoIGQ9Ik0yMS42NzYsMi4xMTFsMi4yODcsOC41OThjMS44NSwwLDYuOTk0LDIuNTIxLDYuOTk0LDIuNTIxbC0yLjAyOC04Ljg3OUMyNy43NjYsMy45MTYsMjQuNzIxLDIuMjU1LDIxLjY3NiwyLjExMXoiLz48cGF0aCBkPSJNMjYuNDM5LDIwLjAyNGwyLjM1NSw4Ljg1MWMxLjE4NiwwLDQuNTg2LDEuNDQ5LDYuMDY1LDEuNDQ5bC0xLjk4OC04LjcwMkMzMC45NTcsMjEuMTI0LDI3Ljg1OSwyMC4yMjMsMjYuNDM5LDIwLjAyNHoiLz48cGF0aCBkPSJNMzAuOTU3LDEzLjIzMWwxLjkxNSw4LjM5MmMwLDAsMS45MTYsMC4zNTQsMy4yMzEsMC4zNTRjMS4zMTQsMCwyLjk1My0wLjI5OCwyLjk1My0wLjI5OGwtMC42MjItNy42ODQgIGMwLDAtMS4yNjksMC4zOTQtMi44MDcsMC4zOTRDMzMuMjI1LDE0LjM4OSwzMC45NTcsMTMuMjMxLDMwLjk1NywxMy4yMzF6Ii8+PHBhdGggZD0iTTM3Ljc2Miw1LjY3MWwwLjY3Myw4LjMyM2MwLDAsMy4xMjktMC43ODYsNi41NjUtMy4zODRMNDQuOTk4LDJDNDEuMDUzLDUuMDIyLDM3Ljc2Miw1LjY3MSwzNy43NjIsNS42NzF6Ii8+PHBhdGggZD0iTTM5LjA1NywyMS42NzljMCwwLDMuMDE0LTAuNTU5LDUuOTQxLTIuMjU5djkuMDUxYy0zLjExNywxLjQ5Ni01LjI2MSwxLjc2Ny01LjI2MSwxLjc2N0wzOS4wNTcsMjEuNjc5eiIvPjwvc3ZnPg=="
        alt="starting flag"
      />
    </div>
    <div slot="footer">
      <Button on:click={start}>Start new game</Button> <br />
    </div>
  </Gamebackground>
</main>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  img {
    border: 0;
    height: 10rem;
  }
  h2 {
    padding: 0.5rem;
    margin: 0%;
  }
</style>
