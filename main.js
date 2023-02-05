function script_el({src = null, body = null}){
  let script = document.createElement("script");
  script.type = "text/javascript";
  if (src != null) script.src = src;
  if (src == null && body != null) script.append(body);
  return script;
}
function insert(src, init){
  document.body.appendChild(script_el(src));
  document.body.appendChild(script_el({body: init}));
}
