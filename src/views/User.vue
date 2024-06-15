<template>
    <div>
        User: {{ id }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: String
})
</script>