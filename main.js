var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var tableContent = document.getElementById("tableContent");

var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(){create();})

// var deleteBtns;
// var visitBtns;
// var closeBtn = document.getElementById("closeBtn");
// var boxModal = document.querySelector(".box-info");
// var bookmarks = [];



if(localStorage.getItem("allData")!=null){var container =JSON.parse (localStorage.getItem("allData"))
showData();}
else{var container=[];}

// create
function create(){
 
if(nameRegex.test(siteName.value)&& urlRegex.test(siteURL.value)){  


var create={
sname:siteName.value,
surl:siteURL.value,}



container.push(create)

localStorage.setItem("allData",JSON.stringify(container) );

clear()
showData();
console.log(container);
}
else{alert("Site Name or Url is not valid, Please follow the rules below :\n \n Site name must contain at least 3 characters \n  Site URL must be a valid one ")}

}

// retrive 
function showData(){
var str="";

for(var i=0;i<container.length;i++)
str+=`<tr>
<td>${i+1}</td>
<td>${container[i].sname }</td>              
<td>
<button   onclick= " visitWebsite(${i})" class="btn btn-visit  bg-success text-light" data-index="0">
<i class="fa-solid fa-eye pe-2 text-white"></i> Visit
</button>
</td>
<td>
<button onclick= "deleteData(${i})" class="btn btn-delete pe-2 bg-danger  text-light" data-index="0">
<i class="fa-solid fa-trash-can  text-light"></i>
Delete
</button>
</td>
</tr>`;


tableContent.innerHTML=str;
}

// clear 
function clear(){
siteName.value="";
siteURL.value="";
}

// delet
function deleteData(index){

container.splice(index,1);
showData();
localStorage.setItem("allData", JSON.stringify(container) )
console.log(container);

}

// visit
function visitWebsite(index) {
  var websiteIndex = e.target.dataset.index;
  var httpsRegex = /^https?:\/\//;
  if (httpsRegex.test(bookmarks[websiteIndex].siteURL)) {
    open(bookmarks[websiteIndex].siteURL);
  } else {
    open(`https://${bookmarks[websiteIndex].siteURL}`);
  }
}

// validation
var nameRegex = /^[a-z0-9_-]{3,15}$/;
var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;


siteName.addEventListener("input", function () {
  validate(siteName, nameRegex);
});

siteURL.addEventListener("input", function () {
  validate(siteURL, urlRegex);
});

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

