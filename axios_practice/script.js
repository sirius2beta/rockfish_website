let api_url = 'http://43.198.100.233:1337/api'
let params = {

}
var mission_list = document.getElementById('mission_list');
let mission_count=0;
axios.get(api_url+'/missions', params)
    .then(function(response){
        mission_count = response.data.data.length
        for(let i = 0; i < mission_count; i++){
            var title = response.data.data[i].attributes.title;
            var content = response.data.data[i].attributes.content;
            console.log(title);
            const li = document.createElement("li");
            li.textContent = `${title}: ${content}`;
            mission_list.appendChild(li);
        }
        
    })
    .catch(function(error){
        console.log(error)
    })
    .then(function(){

    });