<script>
    let count = 0

    const handleIncrement = () => {
        count += 1
    }
</script>

<h2>You've clicked {count} times</h2>
<button on:click={handleIncrement}>Click</button>
