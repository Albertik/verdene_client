exports.view=View={Game:{},Board:{},Move:{}},function(){function e(){if(2==arguments.length)return[(arguments[0]-a/2+.5)*t,(arguments[1]-a/2+.5)*t];var i=arguments[0]%a;return e(i%a,(arguments[0]-i)/a)}var a,t,i;View.Game.xdInit=function(n){function s(e,t,n,s){function o(){if(0==--S){var e=t.getContext("2d");e.drawImage(r,0,0,m,m);for(var a=g/b,i=f/w,o=0,T=0;T<w;T++)for(var M=0;M<b;M++)n&&p.mOptions.exclude.indexOf(o)<0&&(e.textAlign="left",e.textBaseline="top",e.fillStyle="#000000",e.font=Math.ceil(a/4)+"px Monospace",e.fillText(o,v+(M+.05)*a,E+(T+.05)*i)),oldBlendingMode=e.globalCompositeOperation,oldAlpha=e.globalAlpha,p.mOptions.initial.defenders.king==o&&(e.globalCompositeOperation="multiply",e.drawImage(d,v+M*a,E+T*i,a,i)),p.mOptions.exclude.indexOf(o)>=0&&(e.globalCompositeOperation="multiply",e.drawImage(c,v+M*a,E+T*i,a,i)),p.mOptions.initial.attackers.indexOf(o)>=0&&(e.globalCompositeOperation="multiply",e.globalAlpha=.8,e.drawImage(u,v+M*a,E+T*i,a,i)),p.mOptions.initial.defenders.soldiers.indexOf(o)>=0&&(e.globalCompositeOperation="multiply",e.globalAlpha=.5,e.drawImage(h,v+M*a,E+T*i,a,i)),e.globalCompositeOperation=oldBlendingMode,e.globalAlpha=oldAlpha,e.drawImage(l,v+M*a,E+T*i,a,i),o++;s()}}var r,l,c,d,u,h,m=1024,g=872,f=872,v=76,E=76,w=a,b=a,S=6;e.getResource("image|"+i+"/res/images/ardriboard_bgx1024.jpg",function(e){r=e,o()}),e.getResource("image|"+i+"/res/images/ardricellborders.png",function(e){l=e,o()}),e.getResource("image|"+i+"/res/images/ardriblackcell.png",function(e){c=e,o()}),e.getResource("image|"+i+"/res/images/ardrikingcell.png",function(e){d=e,o()}),e.getResource("image|"+i+"/res/images/blackcell.png",function(e){u=e,o()}),e.getResource("image|"+i+"/res/images/whitecell.png",function(e){h=e,o()})}function o(e,a){var t="smoothedfilegeo|0|"+i+"/res/xd-view/meshes/taflboard.js",n=this;this.getResource(t,function(t,i){r(n,e,function(o){s(n,o,e,function(){var e=new THREE.Texture(o);e.needsUpdate=!0;for(var n=[],s=0;s<i.length;s++){var r=i[s].clone();"boardsquare"==r.name&&(r=new THREE.MeshPhongMaterial({specular:"#050505",emissive:"#000000",shininess:250,map:e,bumpMap:e,bumpScale:.01,name:"boardsquare"})),"board"==r.name&&(r=new THREE.MeshPhongMaterial({color:"#000000",shininess:500,specular:"#888888",emissive:"#000000",name:"board"})),n.push(r)}var l=new THREE.Mesh(t,new THREE.MultiMaterial(n));a(l)})})})}function r(e,a,t){var i=a?"notation":"plain";if(v[i])t(v[i]);else{var n=document.createElement("canvas");v[i]=n,n.width=1024,n.height=1024,s(e,n,a,function(){t(n)})}}function l(e,a,t,n){var s="image|"+i+"/res/xd-view/meshes/woodtoken-diffuse"+(t?".jpg":"-black.jpg");e.getResource(s,function(e){a.getContext("2d").drawImage(e,0,0,b,b),n()})}function c(e,a,t,i){var n=a?"white":"plain";if(Array.isArray(S[n]))S[n].push(i);else if(null===S[n]){var s=document.createElement("canvas");s.width=b,s.height=b,S[n]=[i],l(e,s,a,function(){var e=new THREE.Texture(s);for(e.needsUpdate=!0;S[n].length>0;)S[n].shift()(e);S[n]=e})}else i(S[n])}function d(e,a,t){var n="smoothedfilegeo|0|"+i+"/res/xd-view/meshes/woodtoken.js",s=this;this.getResource(n,function(i,n){c(s,e,a,function(e){for(var s=[],o=0;o<n.length;o++){var r=n[o].clone();"wood"==r.name&&(r=new THREE.MeshPhongMaterial({specular:"#222222",color:"#dddddd",shininess:30,map:e,bumpMap:e,bumpScale:.03,name:"wood"})),"redstar"==r.name&&(r=new THREE.MeshPhongMaterial({color:"#aa0000",shininess:150,specular:"#666666",emissive:"#000000",name:"redstar",transparent:!a,opacity:a?1:0,shading:THREE.FlatShading})),s.push(r)}var l=new THREE.Mesh(i,new THREE.MultiMaterial(s));t(l)})})}function u(e,a,s){var o;o=a==p.mOptions.attackers?0:"k"==s?310:155,n.createGadget("piece#"+e,{base:{},"2d":{z:4,type:"sprite",file:i+"/res/xd-view/meshes/ardri-sprites.png",clipwidth:155,clipheight:155,clipx:o,clipy:0,width:.85*t,height:.85*t},"3d":{type:"custommesh3d",castShadow:!0,receiveShadow:!1,scale:[m,m,"k"==s?1.5*m:m],create:function(e){return d.call(this,a!=p.mOptions.attackers,"k"==s,e),null}}})}function h(e){var a=this,t=new THREE.PlaneGeometry(4,3,1,1),i=new THREE.MeshPhongMaterial({color:16777215,map:e,shading:THREE.FlatShading}),n=new THREE.Mesh(t,i);return a.objectReady(n),null}var p=this;a=2*this.mOptions.centerDistance+1,t=Math.ceil(11500/(a+1)),i=this.mViewOptions.fullPath;var m=t/3e3,g=t/1400,f=.129*a*t/1e3;n.createGadget("extralights",{"3d":{type:"custommesh3d",create:function(e){var a=new THREE.SpotLight(16777215,.5);a.shadow.camera.near=10,a.shadow.camera.far=25,a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.position.set(-6,8,-6);var t=new THREE.SpotLight(16777215,.5);t.position.set(7,7,7),t.shadow.camera.near=10,t.shadow.camera.far=25,t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048;var i=new THREE.Mesh;i.add(a),i.add(t);var n=new THREE.Object3D;i.add(n),a.target=n,t.target=n,e(i)}}});var v={plain:null,notation:null},E=a*t*1.18;n.createGadget("board",{base:{},"2d":{type:"canvas",width:E,height:E,draw:function(e){e.save(),r(this,!1,function(a){e.drawImage(a,-E/2,-E/2,E,E),e.restore()})}},"3d":{type:"custommesh3d",scale:[f,f,f],z:150,receiveShadow:!0,create:function(e){return o.call(this,!1,e),null}}}),n.createGadget("boardnotations",{base:{},"2d":{type:"canvas",width:a*t*1.18,height:a*t*1.18,draw:function(e,a){e.save(),r(this,!0,function(a){e.drawImage(a,-E/2,-E/2,E,E),e.restore()})}},"3d":{type:"custommesh3d",scale:[f,f,f],z:150,receiveShadow:!0,create:function(e){return o.call(this,!0,e),null}}});for(var w=0;w<a*a;w++)!function(a){var s,o=e(a);s=p.g.excludeMap[a]?"cell-exclude":a%2?"cell-white":"cell-black",a==p.g.home&&(s+=" cell-home"),n.createGadget("cell#"+a,{base:{x:o[0],y:o[1]},"2d":{z:1,type:"element",initialClasses:"cell",width:1.01*t,height:1.01*t}}),n.createGadget("clicker#"+a,{base:{x:o[0],y:o[1]},"2d":{z:3,type:"element",initialClasses:"clicker",width:t,height:t},"3d":{z:0,type:"meshfile",file:i+"/res/xd-view/meshes/ring-target.js",flatShading:!0,castShadow:!0,smooth:0,scale:[g,g,g],materials:{square:{transparent:!0,opacity:0},ring:{color:16777215,opacity:1}}}})}(w);var b=512,S={white:null,plain:null},T=0;u(T++,-this.mOptions.attackers,"k");for(var M=0;M<this.mOptions.initial.defenders.soldiers.length;M++)u(T++,-this.mOptions.attackers,"s");for(var M=0;M<this.mOptions.initial.attackers.length;M++)u(T++,this.mOptions.attackers,"s");n.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){return h.call(this,e)},z:2e3,scale:[2,2,2]}}),n.createGadget("videoabis",{"3d":{type:"video3d",makeMesh:function(e){return h.call(this,e)},z:1e3,scale:[.5,.5,.5]}}),n.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){return h.call(this,e)},z:2e3,scale:[2,2,2]}}),n.createGadget("videobbis",{"3d":{type:"video3d",makeMesh:function(e){return h.call(this,e)},z:1e3,scale:[.5,.5,.5]}})};View.Game.xdBuildScene=function(t){t.updateGadget("extralights",{"3d":{visible:!0}}),t.updateGadget("board",{base:{visible:!this.mNotation}}),t.updateGadget("boardnotations",{base:{visible:this.mNotation}});for(var i=0;i<a*a;i++){e(i);t.updateGadget("cell#"+i,{base:{visible:!0}})}t.updateGadget("videoa",{"3d":{visible:!0,playerSide:1,x:0,y:1==this.mViewAs?9e3:-9e3,rotate:1==this.mViewAs?180:0}}),t.updateGadget("videoabis",{"3d":{visible:!0,playerSide:-1,x:1==this.mViewAs?-4e3:4e3,y:1==this.mViewAs?8910:-8910,rotate:1==this.mViewAs?180:0}}),t.updateGadget("videob",{"3d":{visible:!0,playerSide:-1,x:-0,y:1==this.mViewAs?-9e3:9e3,rotate:1==this.mViewAs?0:180}}),t.updateGadget("videobbis",{"3d":{visible:!0,playerSide:1,x:1==this.mViewAs?4e3:-4e3,y:1==this.mViewAs?-8910:8910,rotate:1==this.mViewAs?0:180}})},View.Board.xdDisplay=function(a,t){for(var i=0;i<this.pieces.length;i++){var n=this.pieces[i];if(n.p<0)a.updateGadget("piece#"+i,{base:{visible:!1}});else{var s=e(n.p);a.updateGadget("piece#"+i,{base:{visible:!0,x:s[0],y:s[1]},"2d":{opacity:1},"3d":{z:0}})}}},View.Board.xdBuildHTStateMachine=function(e,t,i){function n(t){for(var i=0;i<a*a;i++)e.updateGadget("clicker#"+i,{base:{visible:!1,click:null}}),e.updateGadget("cell#"+i,{base:{},"2d":{classes:""}});h.pieces.forEach(function(a){e.updateGadget("piece#"+a.i,{base:{click:null}})})}function s(a){function i(e){t.smQueueEvent("E_CLICK",{pos:e})}var n={};h.mMoves.forEach(function(e){n[e.f]=!0});for(var s in n)!function(a){var t=h.board[a];e.updateGadget("piece#"+t,{base:{click:function(){i(a)}}}),e.updateGadget("clicker#"+a,{base:{visible:!0,click:function(){i(a)}},"3d":{materials:{ring:{color:16777215,opacity:1}}}}),e.updateGadget("cell#"+a,{base:{},"2d":{classes:"cell-select"}})}(s)}function o(e){p.f=parseInt(e.pos)}function r(a){function i(e){t.smQueueEvent("E_CLICK",{move:n[e]})}var n={};e.updateGadget("piece#"+h.board[p.f],{base:{click:function(){t.smQueueEvent("E_CANCEL",{})}}}),e.updateGadget("clicker#"+p.f,{base:{visible:!0,click:function(){t.smQueueEvent("E_CANCEL",{})}},"3d":{materials:{ring:{color:16746496,opacity:1}}}}),e.updateGadget("cell#"+p.f,{"2d":{classes:"cell-cancel"}}),h.mMoves.forEach(function(e){e.f==p.f&&(n[e.t]=e)});for(var s in n)!function(a){e.updateGadget("clicker#"+a,{base:{visible:!0,click:function(){i(a)}},"3d":{materials:{ring:{color:16777215,opacity:1}}}}),e.updateGadget("cell#"+a,{base:{},"2d":{classes:"cell-select"}})}(s)}function l(e){p.t=parseInt(e.move.t),p.c=e.move.c}function c(a){h.taflAnimate(e,i,p,function(){t.smQueueEvent("E_ANIMATED",{})})}function d(e){i.MakeMove(p)}function u(e){p={}}var h=this,p={};t.smTransition("S_INIT","E_INIT","S_SELECT_FROM",[]),t.smEntering("S_SELECT_FROM",[s]),t.smLeaving("S_SELECT_FROM",[n]),t.smTransition("S_SELECT_FROM","E_CLICK","S_SELECT_TO",[o,r]),t.smLeaving("S_SELECT_TO",[n]),t.smTransition("S_SELECT_TO","E_CLICK","S_ANIMATE",[l,c]),t.smTransition("S_SELECT_TO","E_CANCEL","S_SELECT_FROM",[u]),t.smTransition("S_ANIMATE","E_ANIMATED","S_DONE",[d]),t.smTransition(["S_SELECT_FROM","S_SELECT_TO","S_ANIMATE"],"E_END","S_DONE",[]),t.smEntering("S_DONE",[n]),t.smTransition("S_DONE","E_END",null,[])},View.Board.xdPlayedMove=function(e,a,t){a.mOldBoard.taflAnimate(e,a,t,function(){a.MoveShown()})},View.Board.taflAnimate=function(a,t,i,n){function s(){0==--r&&n()}var o=this,r=0,l=this.pieces[this.board[i.f]],c=this.mWho==t.mOptions.attackers?"move1":"move3";"thanksgiving"==t.mSkin&&(c="k"==l.t?"move3":"move1"),t.PlaySound(c);var d=e(i.t);a.updateGadget("piece#"+l.i,{base:{x:d[0],y:d[1]}},600,function(){if(i.c.length>0){var e="death"+(Math.floor(3*Math.random())+1);t.PlaySound(e),i.c.forEach(function(e){r++;var t=o.pieces[o.board[e]];a.updateGadget("piece#"+t.i,{base:{},"2d":{opacity:0},"3d":{z:-1e3}},600,s)})}else n()})}}();