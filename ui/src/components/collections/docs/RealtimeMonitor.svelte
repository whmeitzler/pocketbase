<script>
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
 
    export let collection;
    let events = [];

    ApiClient.collection(collection.id).subscribe("*",function(e){
        console.log(e)
        events = [e,...events]
    })
    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseUrl);
</script>

<h3 class="m-b-sm">Realtime Monitor ({collection.name})</h3>
{#each events as event}
<div class="block m-sm">
<CodeBlock padding=2em content={JSON.stringify(event,0,2)}/>
</div>
{/each}