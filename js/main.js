var bookmarkName = document.getElementById('bookmarkName');
var websiteUrl = document.getElementById('websiteUrl');
var websiteData;

console.log(localStorage.getItem('websiteData'));

if(localStorage.getItem('websiteData')== null) {
  websiteData = [];
  
}
 else{
  websiteData = JSON.parse(localStorage.getItem('websiteData'));
  displayData(websiteData);
  console.log(websiteData)
 }

function submit() {
 var website = {
  name: bookmarkName.value,
  url: websiteUrl.value
 }
  

 websiteData.push(website);
 localStorage.setItem('websiteData', JSON.stringify(websiteData))
 clearForm ();
 displayData();
 

}

function displayData (){
  var container = '';
  for (var i=0; i< websiteData.length; i++) {
  container += `<tr class="">
  <td scope="row">${i+1}</td>
  <td>${websiteData[i].name}</td>
  <td><a href = "${websiteData[i].url}"<button onclick="visit(${i})" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
  <td><button onclick="del(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></td>
</tr>`;
 }

 
 document.getElementById('tbody').innerHTML = container;
}

  
function clearForm (){
  bookmarkName.value = '';
  websiteUrl.value = '';
}


function del(index){
websiteData.splice(index,1);
localStorage.setItem('websiteData', JSON.stringify(websiteData))
displayData(websiteData);
 }

 function visit(){

 }