<template>
    <div class="card" :class="{ 'hovered': isHovered }" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
        <div id="cardTitle" class="card-header mt-3">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardView',
        data() {
            return {
                isHovered: false
            };
        },
        methods: {
            toggleHover(state) {
                this.isHovered = state;
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 18rem;
        margin: .5rem;
        transition: transform 0.3s ease;
    }

    .hovered {
        transform: scale(1.05); /* Adjust the scale factor as per your preference */
        box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2); 
    }

    #cardTitle {
        border-radius: 12px;
    }
</style>
