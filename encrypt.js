function enc(){
function grow(e){
    var k = new Uint8Array(e.a0.length * 2);
    k.set(e.a0);e.i2 = k.length;
    e.a0 = k;
}
function init(){
"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var aN=Math.imul;var aO=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function aD(){var d=0,b=0,a=0;a=-2047;b=0;while(1){d=N(a)|0;if((b|0)<=(d|0))while(1){q[b]=a;if((b|0)!==(d|0)){b=b+1|0;continue;}break;}a=a+1|0;if((a|0)===2048){q[4095]=2047;return;}b=d+1|0;continue;}}function N(a){var d=0,b=0;if((a|0)>2047)return 4095|0;if((a|0)<-2047)return 0|0;d=a>>7;b=a&127;return ((aN(an[d+16|0]|0,128-b|0)|0)+64|0)+(aN(an[d+17|0]|0,b)|0)>>7|0;}function Q(b,a){var d=0;if((a.i1|0)>=(a.i2|0))grow(a);d=a.i1|0;a.i1=d+1|0;a.a0[d]=b;}function aE(h,i,e,d){var l=0,j=0,b=0,a=0;if(((d.i1|0)+e|0)>(d.i2|0))grow(d);if((e|0)>=1){l=(e|0)>0?e|0:0|0;a=0;while(1){j=h[i+a|0]|0;b=d.i1|0;d.i1=b+1|0;d.a0[b]=j;a=a+1|0;if((a|0)!==(l|0))continue;break;}}}function aC(){var d=0,b=0,a=0;d=p.i2|0;b=0;while(1){a=p.i1|0;if((a|0)===(d|0)){a=-1;}else{p.i1=a+1|0;a=p.a0[a]|0;a=a;}b=(a&127)+(b<<7)|0;if((a&128|0)!==0)continue;break;}return b|0;}function au(e,d){var a=0,b=0;a=9;while(1){b=aN(a,7)|0;if(((b>>>0>31?0|0:127<<b|0)&e|0)!==0){if((a|0)!==0){b=0;while(1){Q(e>>>(aN(a-b|0,7)|0)&127|128,d);b=b+1|0;if((a|0)!==(b|0))continue;break;}}}else{a=a-1|0;if((a|0)!==0)continue;}break;}Q(e&127,d);}function M(h,e){var b=null,a=0,d=0;h.i0=e;h.i1=0;b=new Int32Array((e<<2)/4|0);a=e&1073741823;if((a|0)!==0){d=0;while(1){b[d]=0;d=d+1|0;if(b!==b||(0+a|0)!==(0+d|0))continue;break;}}h.a2=b;if((h.i0|0)>0){a=0;while(1){b[a]=-2147483648;a=a+1|0;if((a|0)<(h.i0|0))continue;break;}}if((E[0]|0)===0){a=0;while(1){E[a]=16384/((a<<1)+3&65535)&65535;a=a+1|0;if((a|0)!==1024)continue;break;}}}function Z(d,b){var e=null,a=0;M(d,aN(b,24)|0);if((d.i0|0)>0){e=d.a2;a=0;while(1){e[a]=((N(((((a>>>0)%24<<13)+4096>>>0)/48|0)-2048|0)|0)<<20)+6|0;a=a+1|0;if((a|0)<(d.i0|0))continue;break;}}}function av(){var b=null,a=0;S=1;o=nullArray;G=nullArray;F=0;k=0;R=2048;b=new Int32Array(7);a=0;while(1){b[a]=0;a=a+1|0;if((a|0)!==7)continue;break;}o=b;b=new Int32Array(560);a=0;while(1){b[a]=0;a=a+1|0;if((a|0)!==560)continue;break;}G=b;}function az(){var d=0,b=null,a=0;g.i0=67108863;g.i1=16777215;g.a2=nullArray;g.a3=nullArray;g.i4=0;g.i5=0;g.i6=0;g.i7=0;g.i8=0;g.i9=1;g.i10=0;M(g.a11,14336);d=(g.i0|0)+1|0;b=new Uint8Array(d/1|0);if((d|0)!==0){a=0;while(1){b[a]=0;a=a+1|0;if(b!==b||(0+d|0)!==(0+a|0))continue;break;}}g.a2=b;d=(g.i1<<2)+4|0;b=new Int32Array(d/4|0);if((d|0)!==0){a=0;while(1){b[a]=0;a=a+1|0;if(b!==b||(0+(d>>>2)|0)!==(0+a|0))continue;break;}}g.a3=b;}function ay(z){var b=0,a=0,h=null,e=0,d=0,l=0,j=0;b=(g.i9<<1)+z|0;g.i9=b;a=(g.i10|0)+1|0;g.i10=a;if((a|0)===8){g.i10=0;a=g.i1|0;g.i7=(aN(g.i7|0,24)|0)+b&a;g.i8=(aN(g.i8|0,160)|0)+b&a;h=g.a2;a=g.i4|0;g.i4=a+1|0;h[a]=b;g.i9=1;b=g.i0|0;a=g.i4&b;g.i4=a;e=g.i6|0;if((e|0)>0){g.i5=(g.i5|0)+1&b;if(e>>>0<62)g.i6=e+1|0;}else{h=g.a3;e=g.i7|0;e=h[e]|0;g.i5=e;if((e|0)!==(a|0)){h=g.a2;d=g.i6|0;if((d|0)<62)while(1){l=d^ -1;j=e+l&b;if((j|0)!==(a|0))if((h[j]&255)===(h[a+l&b]&255)){d=d+1|0;g.i6=d;if((d|0)!==62)continue;}break;}}}if((g.i6|0)<2){g.i6=0;h=g.a3;e=g.i8|0;e=h[e]|0;g.i5=e;if((e|0)!==(a|0)){h=g.a2;d=g.i6|0;if((d|0)<62)while(1){l=d^ -1;j=e+l&b;if((j|0)!==(a|0))if((h[j]&255)===(h[a+l&b]&255)){d=d+1|0;g.i6=d;if((d|0)!==62)continue;}break;}}}}b=g.i9|0;a=g.i6|0;a:{if((a|0)>0){h=g.a2;e=g.i5|0;e=h[e]&255;d=g.i10|0;if((e+256>>>(8-d|0)|0)===(b|0)){b=e>>>(7-d|0)&1;if(a>>>0<16){b=b+(a<<1)|0;}else{b=((a>>>1&2147483646)+24|0)+b|0;}a=g.i4|0;e=g.i0|0;a=h[e&a-1]|0;b=(b<<8)+(a&255)|0;break a;}}g.i6=0;}b=s(g.a11,z,b)|0;b=q[b]|0;h=o;a=k|0;k=a+1|0;h[a]=b<<16>>16;if((g.i10|0)===0){h=g.a3;b=g.i7|0;h[b]=g.i4|0;b=g.i8|0;h[b]=g.i4|0;}return g.i6|0;}function s(d,b,a){var e=null;Y(d,b,1023);e=d.a2;d.i1=a;return e[a]>>>20|0;}function Y(e,d,b){var l=null,a=0,j=0,z=0,h=0;l=e.a2;h=e.i1|0;a=l[h]|0;j=a&1023;if((j|0)<(b|0)){z=a+1|0;}else{z=a& -1024|b;}l[h]=z;h=e.i1|0;l[h]=(l[h]|0)+(aN(E[j]|0,(d<<22)-(a>>>10)>>3)& -1024)|0;}function ax(j){var z=0,l=0,b=null,c=0,a=0,d=0,e=0,h=0;if(!(ao|0)){I=nullObj;aj=1;b=new Uint8Array(268435584);a=0;while(1){b[a]=0;a=a+1|0;if((a|0)!==268435584)continue;break;}I={d:b,o:0+(64-((0)&63)|0)|0};ao=1;}if(!(ad|0)){a=0;while(1){M(m[a],256);a=a+1|0;if(m[a]!==m[6])continue;break;}ad=1;}if(!(al|0)){Z(ak,256);al=1;}if(!(am|0)){Z(ah,16384);am=1;}if(!(ai|0)){av();ai=1;}if(!(ag|0)){az();ag=1;}b=ae;a=b.d[b.o]|0;b.d[b.o]=x[((a&255)<<1)+j|0]|0;b=v;a=b.d[b.o]|0;b.d[b.o]=x[((a&255)<<1)+j|0]|0;b=u;a=b.d[b.o]|0;b.d[b.o]=x[((a&255)<<1)+j|0]|0;b=t;a=b.d[b.o]|0;b.d[b.o]=x[((a&255)<<1)+j|0]|0;b=w;a=b.d[b.o]|0;b.d[b.o]=x[((a&255)<<1)+j|0]|0;b=y;a=b.d[b.o]|0;b.d[b.o]=x[((a&255)<<1)+j|0]|0;aw(j);H=(H|0)+1|0;a=(n<<1)+j|0;n=a;if((a|0)>255){d=a-256|0;n=d;e=ab<<8|d;ab=e;D=d<<8;h=e<<5&2097120|1459617792;ac=h;P=aN(e,768)|0;O=aN(e,5)|0;B=(aN(B|0,352)|0)+(aN(d,13)|0)&1073741823;if(a-321>>>0<26)n=a-224|0;a=n|0;if(a-97>>>0<26){d=C|0;a=aN(d+a|0,56)|0;}else{a=0;}C=a;b=r(h);c=oSlot;v={d:b,o:c+1|0};a=P|0;b=r(a);c=oSlot;u={d:b,o:c+1|0};a=O|0;b=r(a);c=oSlot;t={d:b,o:c+1|0};a=B|0;b=r(a);c=oSlot;w={d:b,o:c+1|0};a=C|0;b=r(a);c=oSlot;y={d:b,o:c+1|0};n=1;H=0;}a=H|0;a:{if((a|0)===4){a=ac|0;d=n|0;b=r(d+a|0);c=oSlot;v={d:b,o:c+1|0};a=P|0;d=n|0;b=r(d+a|0);c=oSlot;u={d:b,o:c+1|0};a=O|0;d=n|0;b=r(d+a|0);c=oSlot;t={d:b,o:c+1|0};a=B|0;d=n|0;b=r(d+a|0);c=oSlot;w={d:b,o:c+1|0};a=C|0;d=n|0;b=r(d+a|0);c=oSlot;b={d:b,o:c+1|0};}else{if((a|0)<=0)break a;b=v;a=j+1<<((a&3)-1|0);v={d:b.d,o:b.o+a|0};b=u;u={d:b.d,o:b.o+a|0};b=t;t={d:b.d,o:b.o+a|0};b=w;w={d:b.d,o:b.o+a|0};b=y;b={d:b.d,o:b.o+a|0};}y=b;}a=D|0;d=n|0;ae={d:af,o:a+d|0};e=ay(j)|0;if((e|0)!==0){h=(((e|0)>7?6|0:5|0)+((e|0)>11?1:0)|0)+((e|0)>15?1:0)|0;e=(e|0)>31?1:0;}else{b=w;e=b.d[b.o]|0;b=t;h=b.d[b.o]|0;b=u;z=b.d[b.o]|0;b=v;l=b.d[b.o]|0;h=((h&255)!==0?((e&255)!==0?2|0:1|0)|0:((e&255)!==0?1:0)|0)+((z&255)!==0?1:0)|0;e=(l&255)!==0?1:0;}a=s(m[0],j,af[a+d|0]&255)|0;a=q[a]|0;b=o;d=k|0;k=d+1|0;b[d]=a<<16>>16;b=v;a=s(m[1],j,b.d[b.o]&255)|0;a=q[a]|0;b=o;d=k|0;k=d+1|0;b[d]=a<<16>>16;b=u;a=s(m[2],j,b.d[b.o]&255)|0;a=q[a]|0;b=o;d=k|0;k=d+1|0;b[d]=a<<16>>16;b=t;a=s(m[3],j,b.d[b.o]&255)|0;a=q[a]|0;b=o;d=k|0;k=d+1|0;b[d]=a<<16>>16;b=w;a=s(m[4],j,b.d[b.o]&255)|0;a=q[a]|0;b=o;d=k|0;k=d+1|0;b[d]=a<<16>>16;b=y;a=s(m[5],j,b.d[b.o]&255)|0;a=q[a]|0;b=o;d=k|0;k=d+1|0;b[d]=a<<16>>16;F=(h+(e?1:0)|0)+(aN(D>>>13,10)|0)|0;a=at()|0;K=a;d=n|0;a=(aN(aa(ak,j,a,d)|0,3)|0)+a>>2;K=a;K=(aN(aa(ah,j,a,D>>>2^d)|0,3)|0)+a>>2;}function aw(b){var h=null,e=null,d=0,a=0;h=o;e=G;d=F|0;a=S|0?7|0:0|0;aB(h,0,e,0+(aN(a,d)|0)|0,a,aN((b<<12)-(R|0)|0,7)|0);k=0;}function r(a){var h=0,j=0,l=0,d=null,e=0,b=0;d=I;e=(aN(a,123456791)>>>16)+(aN(a,-854130688)|0)|0;h=(aj|0?268435440|0: -16|0)&aN(e,-541881040);j=aN(e,234567891)>>>24;if((j|0)===(d.d[d.o+h|0]&255|0)){oSlot=d.o+h|0;return d.d;}e=h^16;if((j|0)===(d.d[d.o+e|0]&255|0)){oSlot=d.o+e|0;return d.d;}if((j|0)===(d.d[d.o+(h^32)|0]&255|0)){oSlot=d.o+(h^32)|0;return d.d;}b=h+1|0;l=d.d[d.o+b|0]|0;a:{if((l&255)<=(d.d[d.o+(b^16)|0]&255))if((l&255)<=(d.d[d.o+(b^32)|0]&255)){e=h;break a;}b=e+1|0;}e=(d.d[d.o+b|0]&255)>(d.d[d.o+(b^48)|0]&255)?e^48|0:e|0;b=0;while(1){d.d[(d.o+e|0)+b|0]=0;b=b+1|0;if((b|0)!==16)continue;break;}d.d[d.o+e|0]=j;d=I;oSlot=d.o+e|0;return d.d;}function at(){var e=null,d=null,b=0,a=0;e=o;d=G;a=F|0;b=S|0?7|0:0|0;a=N((aA(e,0,d,0+(aN(b,a)|0)|0,b)|0)>>8)|0;R=a;return a|0;}function aa(j,h,e,d){var l=null,b=0,aF=0,z=0,a=0;Y(j,h,255);l=j.a2;a=(aN(q[e]<<16>>16,23)|0)+47104|0;b=(a>>12)+(aN(d,24)|0)|0;aF=l[b]|0;a&=4095;z=l[b+1|0]|0;j.i1=b+(a>>>11)|0;return (aN(z>>>13,a)|0)+(aN(aF>>>13,4096-a|0)|0)>>>19|0;}function aA(h,i,e,f,d){var j=0,a=0,b=0;if((d|0)<1)return 0|0;j=(d|0)>0?d|0:0|0;b=0;a=0;while(1){b=(aN(e[f+a|0]|0,h[i+a|0]|0)|0)+b|0;a=a+1|0;if((a|0)!==(j|0))continue;break;}return b>>8|0;}function aB(h,i,e,f,d,b){var j=0,a=0;if((d|0)>=1){j=(d|0)>0?d|0:0|0;a=0;while(1){e[f+a|0]=((aN(h[i+a|0]|0,b)|0)+32768>>16)+(e[f+a|0]|0)|0;a=a+1|0;if((a|0)!==(j|0))continue;break;}}}function $(l,j,h){var z=0,b=0,e=0,a=0,d=null;l.i0=j;l.a1=h;l.i2=0;l.i3=-1;l.i4=0;l.i5=0;l.i6=0;if((j|0)===1){b=h.i2|0;e=0;while(1){z=l.i4|0;a=h.i1|0;if((a|0)===(b|0)){a=-1;}else{h.i1=a+1|0;a=h.a0[a]|0;a=a;}l.i4=(a&255)+(z<<8)|0;e=e+1|0;if((e|0)!==4)continue;break;}l.i6=4;}else{d=J;if(d===nullArray&&0===0){d=new Uint8Array(131072);b=0;while(1){d[b]=0;b=b+1|0;if((b|0)!==131072)continue;break;}J=d;}}}function T(d){var b=null,e=0,a=0;if((d.i0|0)===0){a=d.i2|0;b=J;e=d.i6|0;d.i6=e+1|0;b[e]=a>>>24;a=d.i6|0;d.i6=a+1|0;b[a]=255;a=d.i6|0;d.i6=a+1|0;b[a]=255;a=d.i6|0;d.i6=a+1|0;b[a]=255;au(d.i5|0,d.a1);aE(b,0,d.i6|0,d.a1);d.i6=0;d.i5=0;d.i4=0;d.i2=0;d.i3=-1;}}function X(d){var b=null,a=0;b={i0:0,a1:null,i2:0,i3:0,i4:0,i5:0,i6:0};if((d|0)!==0){a=aC()|0;$(b,1,p);if((a|0)!==0)while(1){Q(as(b)|0,ap);a=a-1|0;if((a|0)!==0)continue;break;}}else{$(b,0,ap);a=p.i1|0;if((a|0)!==(p.i2|0))while(1){p.i1=a+1|0;ar(b,p.a0[a]|0);a=p.i1|0;if((a|0)!==(p.i2|0))continue;break;}T(b);}}function ar(d,b){var a=0;d.i5=(d.i5|0)+1|0;a=7;while(1){U(d,b>>>a&1)|0;if((a|0)!==0){a=a-1|0;continue;}break;}if((d.i6|0)>130816)T(d);}function as(d){var b=0,a=0;d.i5=(d.i5|0)+1|0;a=0;b=0;while(1){b=b+1|0;a=(U(d,0)|0)+(a<<1)|0;if((b|0)!==8)continue;break;}return a|0;}function U(j,h){var l=null,e=null,d=0,a=0,b=0;d=K|0;d=d+((d|0)<2048?1:0)|0;a=j.i2|0;b=(j.i3|0)-a|0;a=((aN(b>>>12,d)|0)+a|0)+(aN(b&4095,d)>>>12)|0;if((j.i0|0)===1){d=j.i4|0;d=d>>>0<=a>>>0?1:0;}else{d=h;}if((d|0)!==0)j.i3=a;else j.i2=a+1|0;ax(d);a=j.i3|0;if((a^(j.i2|0))>>>0<16777216){l=J;while(1){if((j.i0|0)===0){b=j.i6|0;j.i6=b+1|0;l[b]=a>>>24;}j.i2=j.i2<<8;j.i3=(j.i3<<8)+255|0;if((j.i0|0)===1){a=j.i4|0;e=j.a1;b=e.i1|0;if((b|0)===(e.i2|0)){b=-1;}else{e.i1=b+1|0;b=e.a0[b]|0;b=b;}j.i4=b+(a<<8)|0;}a=j.i3|0;if((a^(j.i2|0))>>>0<16777216)continue;break;}}return d|0;}function aL(){X(0);}function aM(){if(((p.i1|0)+1|0)<(p.i2|0))while(1){X(1);if(((p.i1|0)+1|0)<(p.i2|0))continue;break;}}function aq(){aD();}var q=new Uint16Array(4096);var an=new Int32Array([1,2,3,6,10,16,27,45,73,120,194,310,488,747,1101,1546,2047,2549,2994,3348,3607,3785,3901,3975,4022,4050,4068,4079,4085,4089,4092,4093,4094]);var p={a0:new Uint8Array(1),i1:0,i2:0};var ap={a0:new Uint8Array(131072),i1:0,i2:131072};var K=2048;var J=nullArray;var ao=0;var I=nullObj;var aj=0;var ad=0;var m=[{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray},{i0:0,i1:0,a2:nullArray}];var al=0;var ak={i0:0,i1:0,a2:nullArray};var am=0;var ah={i0:0,i1:0,a2:nullArray};var ai=0;var ag=0;var af=new Uint8Array(65536);var ae={d:af,o:0};var x=new Uint8Array([1,2,3,5,4,6,7,10,8,12,9,13,11,14,15,19,16,23,17,24,18,25,20,27,21,28,22,29,26,30,31,33,32,35,32,35,32,35,32,35,34,37,34,37,34,37,34,37,34,37,34,37,36,39,36,39,36,39,36,39,38,40,41,43,42,45,42,45,44,47,44,47,46,49,46,49,48,51,48,51,50,52,53,43,54,57,54,57,56,59,56,59,58,61,58,61,60,63,60,63,62,65,62,65,50,66,67,55,68,57,68,57,70,73,70,73,72,75,72,75,74,77,74,77,76,79,76,79,62,81,62,81,64,82,83,69,84,71,84,71,86,73,86,73,44,59,44,59,58,61,58,61,60,49,60,49,76,89,76,89,78,91,78,91,80,92,93,69,94,87,94,87,96,45,96,45,48,99,48,99,88,101,88,101,80,102,103,69,104,87,104,87,106,57,106,57,62,109,62,109,88,111,88,111,80,112,113,85,114,87,114,87,116,57,116,57,62,119,62,119,88,121,88,121,90,122,123,85,124,97,124,97,126,57,126,57,62,129,62,129,98,131,98,131,90,132,133,85,134,97,134,97,136,57,136,57,62,139,62,139,98,141,98,141,90,142,143,95,144,97,144,97,68,57,68,57,62,81,62,81,98,147,98,147,100,148,149,95,150,107,150,107,108,151,108,151,100,152,153,95,154,107,108,155,100,156,157,95,158,107,108,159,100,160,161,105,162,107,108,163,110,164,165,105,166,117,118,167,110,168,169,105,170,117,118,171,110,172,173,105,174,117,118,175,110,176,177,105,178,117,118,179,110,180,181,115,182,117,118,183,120,184,185,115,186,127,128,187,120,188,189,115,190,127,128,191,120,192,193,115,194,127,128,195,120,196,197,115,198,127,128,199,120,200,201,115,202,127,128,203,120,204,205,115,206,127,128,207,120,208,209,125,210,127,128,211,130,212,213,125,214,137,138,215,130,216,217,125,218,137,138,219,130,220,221,125,222,137,138,223,130,224,225,125,226,137,138,227,130,228,229,125,230,137,138,231,130,232,233,125,234,137,138,235,130,236,237,125,238,137,138,239,130,240,241,125,242,137,138,243,130,244,245,135,246,137,138,247,140,248,249,135,250,69,80,251,140,252,249,135,250,69,80,251,140,252,0,0,0,0,0,0]);var v={d:af,o:0};var u={d:af,o:0};var t={d:af,o:0};var w={d:af,o:0};var y={d:af,o:0};var H=0;var n=1;var ab=0;var D=0;var ac=0;var P=0;var O=0;var B=0;var C=0;var o=nullArray;var k=0;var F=0;var E=new Int32Array(1024);var G=nullArray;var S=0;var R=0;var g=new aH();function aH(){this.i0=0;this.i1=0;this.a2=nullArray;this.a3=nullArray;this.i4=0;this.i5=0;this.i6=0;this.i7=0;this.i8=0;this.i9=0;this.i10=0;this.a11={i0:0,i1:0,a2:nullArray};}compress=aL;extract=aM;encP=p;decP=ap;aq();}
var encP,decP,compress,extract; 
function enc(buf){
    if(!(buf instanceof Uint8Array)) return;
    init();
    encP.a0 = buf;
    encP.i1 = 0;encP.i2 = buf.length;decP.i1 = 0;
    compress();
    return new Uint8Array(decP.a0.subarray(0,decP.i1-3));
}
function dec(buf1){
    if(!(buf1 instanceof Uint8Array)) return;
    init();
    var buf = new Uint8Array(buf1.length + 3);
    buf.set(buf1);
    buf.set([255,255,255],buf1.length);
    encP.a0 = buf;
    encP.i1 = 0;encP.i2 = buf.length;decP.i1 = 0;
    extract();
    return new Uint8Array(decP.a0.subarray(0,decP.i1));
}
return {e:enc,d:dec};
}
