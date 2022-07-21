<template>
    <div :class="'card' + (label ? ' labeled' : '')">
        <h1 v-if="label" class="header-2 color-white-1">{{label}}</h1>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: String
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

    .header-2 {
        top: -64px;
        left: 0;
        position: absolute;
    }

    .labeled {
        margin-top: 74px;
    }
    .card {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        position: relative;
        min-height: 542px;
        height: min-content;
        width: min(464px, 95%);
        background-color: white;
        border-radius: 24px;
    }
</style>