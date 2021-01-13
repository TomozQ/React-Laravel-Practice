<template>
    <app-layout>
        <template #header></template>
        <div class="start_spot">
            <a href="/start" class="link_to_start">Start work...</a>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'

    export default {
        components: {
            AppLayout,
        },
    }
</script>
