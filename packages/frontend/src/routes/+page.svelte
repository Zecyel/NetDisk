<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<mdui-button variant="filled" bind:this={btn}>.Svelte Button</mdui-button>

<script lang="ts">
    import { onMount } from 'svelte'
    let btn

    onMount(() => {
        btn.addEventListener('click', () => {
            console.log('clicked')
        })
    })
</script>