const fs=require('fs');const h=fs.readFileSync(__dirname+'/index.html','utf8');
const vm=require('vm');vm.runInThisContext(h.split('//CORE-START')[1].split('//CORE-END')[0]);
let ok=true;
for(const m of ["hola, ¿cómo estás?","te quiero mucho! 123","¡ñandú güero."])for(const s of ["sine","square","bell"])for(const v of [1,3,5]){
 const r=render(m,v,s,44100);const ab=toWav(r.buf,44100);const w=parseWav(ab);const d=decode(w.buf,w.sr);
 if(d!==m){ok=false;console.log("FAIL",s,v,JSON.stringify(d));}
 if(m.startsWith("hola")&&s=="sine"&&v==3)fs.writeFileSync(__dirname+'/hola_como_estas.wav',Buffer.from(ab));}
console.log(ok?"ALL OK (27 casos)":"fallos");
