fetch("http://jsonplaceholder.typicode.com/posts").then((response) => 
{
    return response.json();
}).then((json) =>
{
    let frequencyMap = json.map((post) => 
    {
        return post.body;
    }).join(" ").split(" ")
    .reduce((map, words) => 
    {
        if(!map[words]) 
        {
            map[words]++;
        } 
        else 
        {
            map[words] = 1;
        }

        return map;
    }, {});

    console.log(frequencyMap);
});