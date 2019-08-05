;(function(){'use strict';var Um=MugineRequire("Utils/Module"),Vm=MugineRequire("Display/Shape"),Wm=MugineRequire("Utils/Plugin");MugineRequire("Utils/mugedaAPIAObject");MugineRequire("Utils/Browser");var Xm=MugineRequire("Action/Action");function Ym(){Ym.j.constructor.apply(this,arguments);this.ki=!1;this.ie=[]}Um.extend(Ym,Vm);var Zm=Ym.prototype;Zm.I="Dragger";Zm.Ib=function(a){return(this.ie[a||0]||{}).Z||""};
Zm.sl=function(a,b,c){var d=this,e=d.w.param;c=c&&a;var f=!1,f=(e.dragObjects||[]).indexOf(a.Z);if(c)f=d.ie.indexOf(a),0<=f&&d.ie.splice(f,1);else if(0<=f)if(b&&b.$p==a)e.multipleDraggers?-1==d.ie.indexOf(a)&&d.ie.push(a):(d.ie.map(function(b){b.o!=a.o&&b.pd()}),d.ie=[a]);else{f=!0;for(b=0;b<d.ie.length;b++)if(d.ie[b].Z==a.Z){d.ie.splice(b,1);break}f&&e.draggerReset&&a.pd()}else e.draggerReset&&a.pd();e.showActive&&setTimeout(function(){d.J(d.va)},1);d.ki=!1};
Zm.Ue=function(a,b,c){var d=this.w.param,e={Jd:this},f=this.Ij();if(0<=(d.dragObjects||[]).indexOf(a.Z)){e.candidate=!0;d=this.w.param;a=(f.left+f.right)/2;var g=(f.top+f.bottom)/2;b=a-b;c=g-c;var h=Math.max(32,(f.right-f.left)/2),f=Math.max(32,(f.bottom-f.top)/2);e.be=Math.abs(b)<h&&Math.abs(c)<f;d.draggerPosition&&(e.x=a,e.y=g);e.be!=this.ki&&(this.ki=e.be,d.showActive&&this.J(this.va))}return e};
Zm.pd=function(){var a=this,b=a.w.param;a.ie.map(function(a){a.pd()});a.ie=[];b.showActive&&setTimeout(function(){a.J(a.va)},1);a.ki=!1};Ym.Eb=function(a){function b(c){b.j.constructor.apply(this,arguments);c&&c.Ub(this);this.w=a}Um.extend(b,Ym);return b};Zm.nn=function(){function a(c,d){a.j.constructor.apply(this,arguments);this.tg=b}var b=this;Um.extend(a,Xm);a.prototype.L=function(b){this.Za()&&(this.tg&&this.tg.pd(),a.j.L.apply(this,arguments))};return a};Um.G("Shape.DisplayObjectDragger",Ym);
Wm.Vd(2050,Ym);var $m=MugineRequire("Utils/Module");MugineRequire("Utils/Browser");var an=MugineRequire("Render/RenderObjectShape"),bn=MugineRequire("Render/StyleSheet"),cn=MugineRequire("Utils/Plugin");function dn(){dn.j.constructor.apply(this,arguments)}$m.extend(dn,an);var en=dn.prototype;
en.La=function(){var a=this.c,b=a.w.param;this.constructor.j.La.apply(this,arguments);var c=this.ba.lastIndexOf("</div>");if(0<c){var c=0<c?this.ba.substr(0,c):this.ba,d='<div class="dragger_'+a.o+'"></div>',b="position: absolute;overflow:visible; margin:0; opacity: 0;background-color: "+(b.draggerColor||"rgba(255,0,0,255)")+";width: 100%;height: 100%;left: 0px; top: 0px; ";0==a.Pe&&(b+="visibility: hidden;");bn.T("dragger_"+a.o,b);this.ba=c=c+d+"</div>"}a.Ua().R.$g.push({Jd:a})};
en.ja=function(a,b,c){var d=this.c;dn.j.ja.apply(this,arguments);var e=this.V().querySelector(".dragger_"+d.o);e&&(e.style.opacity=d.ki?.5:0)};cn.Wd(2050,dn);
})();