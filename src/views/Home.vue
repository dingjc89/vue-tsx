<template>
    <div>
        Home: {{ id }}---{{ query }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: String,
    query: Object
})
</script>