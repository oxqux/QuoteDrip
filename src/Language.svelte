<script lang="ts">
  import { onMount } from "svelte"
  import { fly } from "svelte/transition"
  import { quintOut } from "svelte/easing"

  import { getLangs } from "./lib/api.ts"

  let isOpen = false
  export let quoteLang: string = "english"

  let languages: string[] = ["English"]

  export function toggleLanguagePopup() {
    isOpen = !isOpen
  }

  export function setLanguage(e) {
    quoteLang = e.target.innerHTML.toLowerCase()
  }

  async function loadLangs() {
    languages = await getLangs()
  }

  onMount(() => {
    loadLangs()
  })
</script>

<main>
  {#if isOpen}
    <div
      class="langsPopup"
      transition:fly={{ y: 20, duration: 500, easing: quintOut }}
    >
      <h4>Languages</h4>
      {#each languages as lang (lang)}
        <p on:click={setLanguage}>{lang}</p>
      {/each}
    </div>
  {/if}
</main>

<style>
  .langsPopup {
    position: absolute;
    bottom: 110%;
    left: 50%;
    padding: 0 1rem;
    transform: translateX(-50%);
    background: var(--bg);
    border: solid 1px var(--fg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  main {
    margin: 0;
    padding: 0;
  }
</style>
