const selectElement = document.getElementById('mySelect');

selectElement.addEventListener('change', function(content) {
   document.getElementById("parent-box").style.display="flex";
   document.getElementById("parent-box").style.justifyContent=`${content.target.value}`;
   
});

