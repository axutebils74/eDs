const BITS_PER_CHAR=15,BITS_PER_BYTE=8,pairStrings=["ҠҿԀԟڀڿݠޟ߀ߟကဟႠႿᄀᅟᆀᆟᇠሿበቿዠዿጠጿᎠᏟᐠᙟᚠᛟកសᠠᡟᣀᣟᦀᦟ᧠᧿ᨠᨿᯀᯟᰀᰟᴀᴟ⇠⇿⋀⋟⍀⏟␀␟─❟➀➿⠀⥿⦠⦿⨠⩟⪀⪿⫠⭟ⰀⰟⲀⳟⴀⴟⵀⵟ⺠⻟㇀㇟㐀䶟䷀龿ꀀꑿ꒠꒿ꔀꗿꙀꙟꚠꛟ꜀ꝟꞀꞟꡀꡟ","ƀƟɀʟ"],lookupE={},lookupD={};pairStrings.forEach(((o,r)=>{const t=[];o.match(/../gu).forEach((o=>{const r=o.codePointAt(0),n=o.codePointAt(1);for(let o=r;o<=n;o++)t.push(String.fromCodePoint(o))}));const n=15-8*r;lookupE[n]=t,t.forEach(((o,r)=>{lookupD[o]=[n,r]}))}));const encode=o=>{const r=o.length;let t="",n=0,e=0;for(let c=0;c<r;c++){const r=o[c];for(let o=7;o>=0;o--){n=(n<<1)+(r>>o&1),e++,15===e&&(t+=lookupE[e][n],n=0,e=0)}}if(0!==e){for(;!(e in lookupE);)n=1+(n<<1),e++;t+=lookupE[e][n]}return t},decode=o=>{const r=o.length,t=new Uint8Array(Math.floor(15*r/8));let n=0,e=0,c=0;for(let i=0;i<r;i++){const f=o.charAt(i);if(!(f in lookupD))throw new Error(`Unrecognised Base32768 character: ${f}`);const[a,l]=lookupD[f];if(15!==a&&i!==r-1)throw new Error("Secondary character found before end of input at position "+String(i));for(let o=a-1;o>=0;o--){e=(e<<1)+(l>>o&1),c++,8===c&&(t[n]=e,n++,e=0,c=0)}}if(e!==(1<<c)-1)throw new Error("Padding mismatch");return new Uint8Array(t.buffer,0,n)};
