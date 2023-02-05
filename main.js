function script_el({src = null, body = null}){
  let script = document.createElement("script");
  script.type = "text/javascript";
  if (src != null) script.src = src;
  if (src == null && body != null) script.append(body);
  return script;
}
function insert(src, init){
  let loader = script_el({src});
  document.body.appendChild(loader);
  loader.onload = function(){
    document.body.appendChild(script_el({body: init}));
  }
}
function eruda(){
  insert("//cdn.jsdelivr.net/npm/eruda", "eruda.init();");
}
function vConsole(){
  insert("//unpkg.com/vconsole@latest/dist/vconsole.min.js", "let vconsole = new window.VConsole();");
}
