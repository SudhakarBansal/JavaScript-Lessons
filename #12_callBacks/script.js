function loadScript(src,callBack){
    var script = document.createElement('script')
    script.src = src;
    script.onload= function() {
        console.log("Script has been loaded with : "+src);
        callBack(null,src);
    }
    script.onerror=function(){
        console.log("Problem loading script : "+ src);
        callBack(new Error("Src Got some error..."));
    }
    document.body.appendChild(script);
}
function hello(error,src){
    if(error) {
        console.log(error);
        return;
    }
    alert("Hello World " + src);
}

loadScript("https://cdn.jsdeliv.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello);