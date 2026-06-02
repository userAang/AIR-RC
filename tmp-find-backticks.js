const fs=require('fs');
const files=['d:/Projets/air-pole-rc/src/data/months/octobre-2026.ts','d:/Projets/air-pole-rc/src/data/months/novembre-2026.ts','d:/Projets/air-pole-rc/src/data/months/decembre-2026.ts'];
for(const file of files){
  const lines=fs.readFileSync(file,'utf8').split(/\r?\n/);
  console.log('FILE', file);
  let inContent=false;
  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    if(!inContent && line.trimStart().startsWith('content: `')){ inContent=true; continue; }
    if(inContent){
      if(line.endsWith('`,') || line.trim()==='`,' || line.trim()==='`'){ inContent=false; continue; }
      if(line.includes('`')){ console.log(i+1, JSON.stringify(line)); }
    }
  }
}