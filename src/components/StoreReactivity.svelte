<script>
  import count from '../stores/count'
  import Increment from './Increment.svelte'
</script>

<h2>The current values is: {$count.number} 🕵️‍♀️</h2>
<Increment />
