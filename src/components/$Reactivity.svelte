<script>
  let title = 'An old good title'
  
  $: if (title === 'my title') {
  document.title = title
  console.log(title)
}
</script>

<h2>Change that title!</h2>
<input type="text" bind:value={title}>
