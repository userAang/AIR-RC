const ts=require('typescript');
const fs=require('fs');
const path='d:/Projets/air-pole-rc/src/data/months/octobre-2026.ts';
const source=fs.readFileSync(path,'utf8');
const sf=ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
console.log('diagnostics', sf.parseDiagnostics.map(d=>({line:d.start!=null?sf.getLineAndCharacterOfPosition(d.start).line+1:null,col:d.start!=null?sf.getLineAndCharacterOfPosition(d.start).character+1:null,message:ts.flattenDiagnosticMessageText(d.messageText,' ')})));