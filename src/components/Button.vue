<template>
    <button :class="className + (expanded ? ' expanded' : '')">
        <slot></slot>
        <span v-if="rightIcon" class="material-icons">{{rightIcon}}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        expanded: Boolean,
        className: {
            default: "default",
            type: String
        },
        rightIcon: String
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>
    button {
        padding: 1rem 2.5rem;
        white-space: nowrap;
        border-radius: 12px;
        width: min-content;
        background: transparent;
        border: 2px solid rgba(96, 102, 208, 0.7);
        color: rgba(96, 102, 208, 0.8);
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button:disabled {
        pointer-events: none;
    }

    .expanded {
        padding: 1rem 1.25rem;
        display: flex;
        flex-direction: flex-start;
        width: 100%;
    }

    .error {
        background: #EA8282;
        border: 2px solid #EA8282;
        color: white;
    }
    .success {
        background: #60BF88;
        border: 2px solid #60BF88;
        color: white;
    }

    .default:hover {
        cursor: pointer;
        color: white;
        background: #F9A826;
        box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
        border: 2px solid #F9A826;
    }
</style>