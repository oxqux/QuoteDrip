<script lang="ts">
import Quote from "./Quote.svelte"

let quoteComponent: Quote;
let status = "idle";
let quotes = [];


</script>

<main>
  <h1>QuoteDrip - random quote</h1>

  <Quote
    bind:this={quoteComponent}
    bind:status
    bind:quotes
  />

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
  .quote-box {
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    padding: 1.5rem;
    border-radius: 12px;
    background: #1e1e1e;
    border: 1px solid #333;
    transition: all 0.3s ease;
  }

  .quote-text {
    font-size: 1.5rem;
    line-height: 1.45;
    margin: 0;
    text-align: center;
    color: #e0e0e0;
  }

  .status {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
  }

  .loading {
    color: #888;
    font-style: italic;
  }

  .error {
    color: #ff6b6b;
    font-weight: 500;
  }

  .idle {
    color: #777;
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
