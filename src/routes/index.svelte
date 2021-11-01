<script>
    const baseUrl = "http://localhost:3000";
    let topics = [];

    $: topics.sort(function(a, b) {
        return b.vote - a.vote;
    });

   async function getTopics() {
       const res = await fetch (`${baseUrl}/topics.json`);
       const data = await res.json();
       topics = data.topics;
   }
   getTopics();

   async function handleVote(id) {
       const res = await fetch (`${baseUrl}/topics`, {
           method : "PATCH",
           body: JSON.stringify({id: id})
       });
       const data = res.json();
       topics = data.topics;
   }
</script>

<h1>Vote Topik Livestreaming</h1>

<ul>
    {#each topics as topic}
        <li><div>{topic.title}<button on:click={()=> handleVote(topic.id)}>Vote({topic.vote})</button></div></li>
    {/each}
</ul>

