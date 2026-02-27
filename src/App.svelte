<script lang="ts">
  import Quote from "./Quote.svelte"
  import Language from "./Language.svelte"

  let quoteLang: string

  let quoteComponent: Quote
  let LanguageComponent: Language

  let status = "idle"
  let quotes = []
</script>

<main>
  <h1>QuoteDrip - random quote</h1>

  <div class="language-wrapper">
    <button on:click={() => LanguageComponent.toggleLanguagePopup()}>
      Language
    </button>

    <Language bind:this={LanguageComponent} bind:quoteLang />
  </div>

  <Quote bind:this={quoteComponent} bind:status bind:quotes bind:quoteLang />

  <button
    on:click={quoteComponent.handleGenerate}
    disabled={status === "loading"}
    class:loading={status === "loading"}
  >
    {status === "loading" ? "Loading..." : "New quote"}
  </button>

  {#if status === "success" && quotes.length > 0}
    <p class="info">Total quotes: {quotes.length}</p>
  {/if}
</main>

<style>
  .language-wrapper {
    position: relative;
    display: inline-block;
  }

  button {
    padding: 0.8rem 1.8rem;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s;
  }

  button.loading {
    background: #444;
    color: #aaa;
    cursor: not-allowed;
  }

  .info {
    margin-top: 1rem;
    color: #888;
    font-size: 0.95rem;
  }
</style>
