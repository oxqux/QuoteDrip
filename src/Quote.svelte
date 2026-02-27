<script lang="ts">
  import { onMount } from "svelte"
  import getQuotes from "./lib/api.ts"

  export let quoteText = ""
  export let status: "idle" | "loading" | "success" | "error" = "idle"
  let errorMessage = ""
  export let quoteLang: string

  export let quotes: string[] = []

  async function loadAndShowQuote() {
    status = "loading"
    errorMessage = ""
    quoteText = ""

    try {
      quotes = await getQuotes(quoteLang)

      if (quotes.length === 0) {
        status = "error"
        errorMessage = "Quotes not found"
        quoteText = ""
        return
      }

      const randomIndex = Math.floor(Math.random() * quotes.length)
      quoteText = quotes[randomIndex]
      status = "success"
    } catch (err) {
      status = "error"
      errorMessage =
        err instanceof Error
          ? err.message
          : "An unknown error occurred while loading quotes."
      quoteText = ""
    }
  }

  export function handleGenerate() {
    loadAndShowQuote()
  }

  onMount(() => {
    loadAndShowQuote()
  })
</script>

<main>
  <div class="quote-box">
    {#if status === "loading"}
      <p class="status loading">Loading quotes...</p>
    {:else if status === "error"}
      <p class="status error">
        Error: {errorMessage}
      </p>
    {:else if status === "success" && quoteText}
      <h2 class="quote-text">{quoteText}</h2>
    {:else}
      <p class="status idle">Click the button to see the quote</p>
    {/if}
  </div>
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
    background: var(--bg);
    border: 1px solid var(--fg);
    transition: all 0.3s ease;
  }

  .quote-text {
    font-size: 1.5rem;
    line-height: 1.45;
    margin: 0;
    text-align: center;
    color: var(--accent);
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
</style>
