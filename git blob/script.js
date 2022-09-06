console.log("Blob")

const array = ['<div>hellow world</div>'];
const blob = new Blob(array, {type : 'text/html'});
let files = URL.createObjectURL(blob)
console.log(blob)
console.log(files)
let a = document.getElementsByTagName("a")[0];
a.href =  files;

 
 
 
 