<mdui-layout style="height: 100vf; position: relative;">
    
    <mdui-top-app-bar>
        <mdui-button-icon icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>FDU Netdisk</mdui-top-app-bar-title>
    </mdui-top-app-bar>
  
    <mdui-navigation-rail value="recent"  contained>
        {#each items as item}
            <mdui-navigation-rail-item icon="{item.icon}" value="{item.name}">{item.title}</mdui-navigation-rail-item>
        {/each}
    </mdui-navigation-rail>
    
    <mdui-layout-main style="min-height: 500px;">
        <slot />
        <!-- <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p> -->
    </mdui-layout-main>
</mdui-layout>

<script lang="ts">
	import { onMount, layout } from "svelte";

    let items = [
        { icon: "home", name: "home", title: "Home", url: "" },
        { icon: "share", name: "share", title: "Share", url: "" },
        { icon: "logout", name: "logout", title: "Logout", url: "" },
    ]

    onMount(() => {
        // layout()
    })

</script>
