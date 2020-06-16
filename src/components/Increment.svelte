<script>
    import count from '../stores/count'

    const handleIncrement = () => {
        count.update(({ number }) => ({ number: number + 1 }))
    }
</script>

<button on:click={handleIncrement}>Increment ➕</button>
