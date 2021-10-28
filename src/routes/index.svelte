<script>
    async function getData() {
        const res = await fetch(`http://localhost:3000/topics.json`);
        const data = await res.json();
        return data;
    }

    getData();
</script>


<h1>Vote Topik Livestreaming</h1>

<ul>
    <li><div>HTML<button>Vote(10)</button></div></li>
    <li><div>CSS<button>Vote(20)</button></div></li>
    <li><div>Javascript<button>Vote(30)</button></div></li>
</ul>

