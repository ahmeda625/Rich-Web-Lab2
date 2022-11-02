fetch("http://jsonplaceholder.typicode.com/posts").then((response) => 
{
    return response.json();
}).then((json) =>
{
    let postTitlesWithMoreThan6Words = json.filter((post) => 
    {
        return post.title.split(" ").length > 6;
    }).map((post) => 
    {
        console.log(post.title)
    });

    let wordFrequencyMap = json.map((post) => 
    {
        return post.body;
    }).join(" ").split(" ")
    .reduce((map, word) => 
    {
        if (map[word]) 
        {
            map[word]++;
        } 
        else 
        {
            map[word] = 1;
        }
        
        return map;
    }, {});

    console.log(wordFrequencyMap);
});