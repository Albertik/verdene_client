exports.view=View={Game:{},Board:{},Move:{}},function(){var e,a,t;View.Game.cbTargetMesh="/res/ring-target.js",View.Game.cbTargetSelectColor=16777215,View.Game.cbTargetCancelColor=16746496,View.Game.cbPromoSize=2e3,View.Game.xdInit=function(t){this.g.fullPath=this.mViewOptions.fullPath,this.cbPieceByType={},e=this.cbVar,a=this.cbDefineView(),this.cbView=a,this.cbClearPieces(),this.cbCreateLights(t),this.cbCreateScreens(t),this.cbCreateBoard(t),this.cbCreatePromo(t),this.cbCreatePieces(t),this.cbCreateCells(t)},View.Game.cbMakeDummyMesh=function(e){return"undefined"!=typeof THREE?new THREE.Mesh(new THREE.CubeGeometry(1e-4,1e-4,1e-4),new THREE.MeshLambertMaterial):null},View.Game.cbCurrentGame=function(){return t},View.Game.cbCreatePieces=function(e){for(var a=this.cbMakeDummyMesh(e),t=0;t<this.cbPiecesCount;t++)e.createGadget("piece#"+t,{base:{},"2d":{type:"sprite"},"3d":{type:"custommesh3d",create:function(e,t,i){return a}}})},View.Game.cbCreateBoard=function(e){var a=this.cbMakeDummyMesh(e);e.createGadget("board",{base:{},"2d":{type:"canvas",width:12e3,height:12e3,draw:function(e){console.warn("board draw must be overridden")}},"3d":{type:"custommesh3d",receiveShadow:!0,create:function(e,t,i){return a}}})},View.Game.cbCreateCells=function(e){for(var a=this,t=0;t<this.g.boardSize;t++)!function(t){e.createGadget("cell#"+t,{"2d":{z:101,type:"element",initialClasses:a.cbCellClass(e,t),width:1300,height:1300}}),e.createGadget("clicker#"+t,$.extend(!0,{"2d":{z:103,type:"element",initialClasses:"cb-clicker"},"3d":{type:"meshfile",file:a.g.fullPath+a.cbTargetMesh,flatShading:!0,castShadow:!0,smooth:0,scale:[.9,.9,.9],materials:{square:{transparent:!0,opacity:0},ring:{color:a.cbTargetSelectColor,opacity:1}}}},a.cbView.clicker))}(t)},View.Game.cbCreatePromo=function(e){e.createGadget("promo-board",{base:{type:"element",x:0,y:0,width:2e3,height:2e3,z:108,css:{"background-color":"White"}}}),e.createGadget("promo-cancel",{base:{type:"image",file:this.g.fullPath+"/res/images/cancel.png",x:0,y:0,width:800,height:800,z:109}});for(var a=0;a<this.g.pTypes.length;a++)e.createGadget("promo#"+a,{base:{y:0,z:109,type:"sprite",clipwidth:100,clipheight:100,width:1200,height:1200}})},View.Game.xdBuildScene=function(i){t=this,e=this.cbVar,a=this.cbDefineView(),this.cbView=a;for(var n=0;n<this.cbExtraLights.length;n++)i.updateGadget("extralights#"+n,{"3d":{visible:!0}});i.updateGadget("board",$.extend({base:{visible:!0}},this.cbView.board));for(var s=0;s<this.g.boardSize;s++)!function(e){var a=t.cbMakeDisplaySpec(e,0),n=$.extend(!0,{},a,{base:{visible:!0}},t.cbView.clicker,t.cbView.cell);i.updateGadget("cell#"+e,n),$.extend(!0,a,t.cbView.clicker),i.updateGadget("clicker#"+e,a)}(s);i.updateGadget("videoa",{"3d":{visible:!0,playerSide:1,z:3e3,y:1==this.mViewAs?1e4:-1e4,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[3,3,3]}}),i.updateGadget("videoabis",{"3d":{visible:!0,playerSide:-1,z:1500,x:1==this.mViewAs?-5500:5500,y:1==this.mViewAs?8900:-8900,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[.75,.75,.75]}}),i.updateGadget("videob",{"3d":{visible:!0,playerSide:-1,z:3e3,y:1==this.mViewAs?-1e4:1e4,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[3,3,3]}}),i.updateGadget("videobbis",{"3d":{visible:!0,playerSide:1,z:1500,x:1==this.mViewAs?5500:-5500,y:1==this.mViewAs?-8900:8900,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[.75,.75,.75]}}),i.updateGadget("promo-board",{base:{visible:!1}}),i.updateGadget("promo-cancel",{base:{visible:!1}});for(var n=0;n<this.g.pTypes.length;n++)i.updateGadget("promo#"+n,{base:{visible:!1}})},View.Game.cbDisplayBoardFn=function(e){var a=this;return function(i,n,s){var r=e.style+"_"+e.margins.x+"_"+e.margins.y+"_"+a.mNotation+"_"+a.mViewAs,c=this;r!=this._cbKey&&(this._cbKey=r,e.display.call(t,e,c,function(e){c.replaceMesh(e,n,s)}))}},View.Game.cbDrawBoardFn=function(e){return function(a){e.draw.call(t,e,this,a)}},View.Game.cbMakeDisplaySpec=function(e,a){var t={};for(var i in this.cbView.coords){var n=this.cbView.coords[i],s=n.call(this,e);t[i]={x:s.x||0,y:s.y||0,z:s.z||0,rotateX:s.rx||0,rotateY:(s.ry||0)*("3d"==i?this.mViewAs*a<0?-1:1:0),rotate:(s.rz||0)+("3d"==i&&this.mViewAs*a<0?180:0)}}return t},View.Game.cbMakeDisplaySpecForPiece=function(t,i,n){function s(e,a,t){return a?$.extend(!0,e,a.default,a[t]):{}}var r=this.cbMakeDisplaySpec(i,n.s);if(void 0===e.pieceTypes[n.t])return void console.warn("Piece type",n.t,"not defined in model");var c=e.pieceTypes[n.t].aspect||e.pieceTypes[n.t].name;return c?(a.pieces&&(r=s(r,a.pieces,c),a.pieces[n.s]&&(r=s(r,a.pieces[n.s],c))),r):void console.warn("Piece type",n.t,"has no aspect defined")},View.Board.xdDisplay=function(e,a){for(var t=0;t<this.pieces.length;t++){var i=this.pieces[t];if(i.p<0)e.updateGadget("piece#"+t,{base:{visible:!1}});else{var n=a.cbMakeDisplaySpecForPiece(a,i.p,i);n=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},n),e.updateGadget("piece#"+t,n)}}for(;t<a.cbPiecesCount;t++)e.updateGadget("piece#"+t,{base:{visible:!1}})},View.Game.cbExtraLights=[{color:16777215,intensity:.8,position:[9,14,-9],props:{shadowCameraNear:10,shadowCameraFar:25,castShadow:!0,shadowMapWidth:2048,shadowMapHeight:2048}}],View.Game.cbCreateLights=function(e){for(var a=0;a<this.cbExtraLights.length;a++)!function(a,t){e.createGadget("extralights#"+t,{"3d":{type:"custommesh3d",create:function(e){var t=new THREE.SpotLight(a.color,a.intensity);t.shadow.camera.far=a.props.shadowCameraFar,t.shadow.camera.near=a.props.shadowCameraNear,t.shadow.mapSize.width=a.props.shadowMapWidth,t.shadow.mapSize.height=a.props.shadowMapHeight,t.position.set.apply(t.position,a.position);var i=new THREE.Mesh;i.add(t);var n=new THREE.Object3D;i.add(n),t.target=n,e(i)}}})}(this.cbExtraLights[a],a)},View.Game.cbCreateScreen=function(e){var a=new THREE.PlaneGeometry(4,3,1,1),t=new THREE.MeshPhongMaterial({color:16777215,map:e,shading:THREE.FlatShading,emissive:{r:1,g:1,b:1}}),i=new THREE.Mesh(a,t);return this.objectReady(i),null},View.Game.cbCreateScreens=function(e){var a=this;e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videoabis",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}}),e.createGadget("videobbis",{"3d":{type:"video3d",makeMesh:function(e){return a.cbCreateScreen.call(this,e)}}})},View.Board.xdInput=function(a,t){function i(){a.updateGadget("promo-board",{base:{visible:!1}}),a.updateGadget("promo-cancel",{base:{visible:!1}})}return{initial:{f:null,t:null,pr:null},getActions:function(n,s){var r={};if(null==s.f)n.forEach(function(e){void 0===r[e.f]&&(r[e.f]={f:e.f,moves:[],click:["piece#"+this.board[e.f],"clicker#"+e.f],view:["clicker#"+e.f],highlight:function(i){a.updateGadget("cell#"+e.f,{"2d":{classes:"select"==i?"cb-cell-select":"cb-cell-cancel",opacity:t.mShowMoves||"cancel"==i?1:0}}),a.updateGadget("clicker#"+e.f,{"3d":{materials:{ring:{color:"select"==i?t.cbTargetSelectColor:t.cbTargetCancelColor,opacity:t.mShowMoves||"cancel"==i?1:0,transparent:!t.mShowMoves&&"cancel"!=i}},castShadow:t.mShowMoves||"cancel"==i}})},unhighlight:function(){a.updateGadget("cell#"+e.f,{"2d":{classes:""}})},validate:{f:e.f}}),r[e.f].moves.push(e)},this);else if(null==s.t)n.forEach(function(n){var s=void 0===n.cg?n.t:n.cg;void 0===r[s]&&(r[s]={t:n.t,moves:[],click:["piece#"+this.board[s],"clicker#"+s],view:["clicker#"+s],highlight:function(e){a.updateGadget("cell#"+s,{"2d":{classes:"select"==e?"cb-cell-select":"cb-cell-cancel",opacity:t.mShowMoves||"cancel"==e?1:0}}),a.updateGadget("clicker#"+s,{"3d":{materials:{ring:{color:"select"==e?t.cbTargetSelectColor:t.cbTargetCancelColor,opacity:t.mShowMoves||"cancel"==e?1:0,transparent:!t.mShowMoves&&"cancel"!=e}},castShadow:t.mShowMoves||"cancel"==e}})},unhighlight:function(e){a.updateGadget("cell#"+s,{"2d":{classes:""}})},validate:{t:n.t},execute:function(i){var s=this;this.cbAnimate(a,t,n,function(){var c=r[n.t].moves;c.length>1&&(a.updateGadget("promo-board",{base:{visible:!0,width:t.cbPromoSize*(c.length+1)}}),a.updateGadget("promo-cancel",{base:{visible:!0,x:c.length*t.cbPromoSize/2}}),c.forEach(function(i,n){var s=e.pieceTypes[i.pr].aspect||e.pieceTypes[i.pr].name,r=$.extend(!0,{},t.cbView.pieces.default,t.cbView.pieces[s]);t.cbView.pieces[this.mWho]&&(r=$.extend(!0,r,t.cbView.pieces[this.mWho].default,t.cbView.pieces[this.mWho][s])),a.updateGadget("promo#"+i.pr,{base:$.extend(r["2d"],{x:(n-c.length/2)*t.cbPromoSize})})},s)),i()})},unexecute:function(){if(null!=n.c){var e=this.pieces[n.c],s=t.cbMakeDisplaySpecForPiece(t,e.p,e);s=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},s),a.updateGadget("piece#"+n.c,s)}var r=this.pieces[this.board[n.f]],c=t.cbMakeDisplaySpecForPiece(t,r.p,r);a.updateGadget("piece#"+r.i,c),i()}}),void 0!==n.cg&&(r[s].validate.cg=n.cg,r[s].execute=function(e){this.cbAnimate(a,t,n,function(){e()})}),r[s].moves.push(n)},this);else if(null==s.pr){var c=[];n.forEach(function(e){void 0!==e.pr&&(void 0===r[e.pr]&&(r[e.pr]={pr:e.pr,moves:[],click:["promo#"+e.pr],validate:{pr:e.pr},cancel:["promo-cancel"],post:i,skipable:!0},c.push(e.pr)),r[e.pr].moves.push(e))},this),c.length>1&&c.forEach(function(e){r[e].view=["promo#"+e]})}return r}}},View.Game.cbCellClass=function(e,a){return"classic-cell "+((a+(a-a%this.g.NBCOLS)/this.g.ROWS)%2?"classic-cell-black":"classic-cell-white")},View.Board.xdPlayedMove=function(e,a,t){a.mOldBoard.cbAnimate(e,a,t,function(){a.MoveShown()})},View.Board.cbAnimate=function(e,a,t,i){function n(){0==--r&&(c&&a.PlaySound("tac"+(1+Math.floor(3*Math.random()))),i())}var s=this,r=1,c=!1,o=this.pieces[this.board[t.f]],l=a.cbMakeDisplaySpec(t.f,o.s),h=a.cbMakeDisplaySpecForPiece(a,t.t,o);for(var d in l){var m=l[d];void 0!==m.z&&function(e){var i=m.z,n=h[e].z,r=s.cbMoveMidZ(a,t,i,n,e),o=i,l=o-r,d=o-n;r!=(i+n)/2&&(c=!0);var p=4*l-2*d,u=-d*d,f=Math.abs(p*p- -4*u),g=(-p-Math.sqrt(f))/-2,b=(-p+Math.sqrt(f))/-2,w=g,v=-w-d;(0==w||-v/(2*w)<0||-v/(2*w)>1)&&(w=b,v=-w-d),h[e].positionEasingUpdate=function(e){var a=(w*e*e+v*e+o)*this.SCALE3D;this.object3d.position.y=a}}(d)}if(c||a.PlaySound("move"+(1+Math.floor(4*Math.random()))),e.updateGadget("piece#"+o.i,h,600,function(){n()}),null!=t.c){r++;var p={positionEasingUpdate:null};switch(a.cbView.captureAnim3d||"movedown"){case"movedown":p.z=-2e3;break;case"scaledown":p.scale=[0,0,0]}var u=this.pieces[t.c];e.updateGadget("piece#"+u.i,{"2d":{opacity:0},"3d":p},600,n)}if(void 0!==t.cg){var m=a.cbVar.castle[t.f+"/"+t.cg],f=m.r[m.r.length-1],o=this.pieces[this.board[t.cg]],h=a.cbMakeDisplaySpecForPiece(a,f,o);r++,e.updateGadget("piece#"+o.i,h,600,function(){n()})}},View.Board.cbMoveMidZ=function(e,a,t,i){return(t+i)/2}}(),function(){View.Game.cbBaseBoard={TEXTURE_CANVAS_CX:1024,TEXTURE_CANVAS_CY:1024,display:function(e,a,t){var i=this;e.getResource=a.getResource,e.createGeometry.call(this,e,function(a){e.createTextureImages.call(i,e,function(n){var s=["diffuse"].concat(e.extraChannels||[]),r={};s.forEach(function(a){var t=document.createElement("canvas");t.width=e.TEXTURE_CANVAS_CX,t.height=e.TEXTURE_CANVAS_CY,r[a]=t}),e.createMaterial.call(i,e,r,function(s){var c=new THREE.Mesh(a,s);e.modifyMesh.call(i,e,c,function(a){e.paint.call(i,e,r,n,function(){t(a)})})})})})},createTextureImages:function(e,a){var t=this,i={},n=0,s=e.texturesImg||{};for(var r in s)n++;if(0==n)a(i);else for(var r in s)!function(r){e.getResource("image|"+t.g.fullPath+s[r],function(e){i[r]=e,0==--n&&a(i)})}(r)},createMaterial:function(e,a,t){var i=new THREE.Texture(a.diffuse);i.needsUpdate=!0;var n={specular:"#050505",shininess:30,map:i};if(a.bump){var s=new THREE.Texture(a.bump);s.needsUpdate=!0,n.bumpMap=s,n.bumpScale=.05}t(new THREE.MeshPhongMaterial(n))},modifyMesh:function(e,a,t){t(a)},prePaint:function(e,a,t,i,n){n()},paint:function(e,a,t,i,n){n()},postPaint:function(e,a,t,i,n){n()},paintChannel:function(e,a,t,i){},draw:function(e,a,t){var i=this;e.getResource=a.getResource,e.createTextureImages.call(this,e,function(a){e.paintChannel.call(i,e,t,a,"diffuse")})}}}(),function(){function e(e){for(var a=JSON.stringify(e),t=0,i=0;i<a.length;i++)t=(t<<5)-t+a.charCodeAt(i),t&=t;return t}var a,t={};View.Game.cbDisplayPieceFn=function(t){var i=this,n=e(t);return function(e,s,r){a=this.getResource;var c=/^piece#([0-9]+)$/.exec(this.gadget.id);if(!c)return null;var o=parseInt(c[1]),l=i.cbCurrentGame();if(o>=l.mBoard.pieces.length)return null;var h=l.mBoard.pieces[o],d=l.cbVar.pieceTypes[h.t].aspect||l.cbVar.pieceTypes[h.t].name,m=d+"_"+n+"_"+h.s,p=this;m!=this._cbKey&&(this._cbKey=m,p.options=s,l.cbMakePiece(t,d,h.s,function(e){p.replaceMesh(e,p.options,r)}))}},View.Game.cbMakePiece=function(a,i,n,s){function r(e,a,t){return a?$.extend(!0,e,a.default,a[t]):{}}if(!a)return void console.error("piece-view: style is not defined");var c=r({},a,i);a[n]&&(c=r(c,a[n],i));var o=e(c),l=t[o];Array.isArray(l)?l.push(s):l?s(new THREE.Mesh(l.geometry,l.material)):(t[o]=[s],c.loadResources.call(this,c,function(e){c.displayPiece.call(this,c,e,function(){var a=t[o];t[o]={geometry:e.geometry,material:e.material},a.forEach(function(a){a(new THREE.Mesh(e.geometry,e.material))})})}))},View.Game.cbClearPieces=function(){t={}},View.Game.cbBasePieceStyle={default:{mesh:{jsFile:function(e,a){a(new THREE.CubeGeometry(1,1,1),new THREE.MeshPhongMaterial({}))},smooth:0,rotateZ:0},loadMesh:function(e,t){"function"==typeof e.mesh.jsFile?e.mesh.jsFile(e,t):a("smoothedfilegeo|"+e.mesh.smooth+"|"+this.g.fullPath+e.mesh.jsFile,t)},loadImages:function(e,t){function i(){0==--s&&t(r)}var n=this,s=1,r={};for(var c in e.materials){var o=e.materials[c].channels;for(var l in o)if(o[l].texturesImg)for(var h in o[l].texturesImg)!function(e,t){s++,a("image|"+n.g.fullPath+t,function(a){r[e]=a,i()})}(h,o[l].texturesImg[h])}i()},loadResources:function(e,a){function t(){0==--r&&a({geometry:n,images:i,textures:{},loadedMaterials:s})}var i,n,s,r=2;e.loadMesh.call(this,e,function(a,i){if(!a._cbZRotated){var r=new THREE.Matrix4;r.makeRotationY(e.mesh.rotateZ*Math.PI/180),a.applyMatrix(r),a._cbZRotated=!0}n=a,s=i,t()}),e.loadImages.call(this,e,function(e){i=e,t()})},displayPiece:function(e,a,t){e.makeMaterials.call(this,e,a),t()},paintTextureImageClip:function(e,a,t,i,n,s,r,c,o){var l=a.canvas.width,h=a.canvas.height;if(n.patternFill&&n.patternFill[s]){var d=n.patternFill[s];a.save();var m=document.createElement("canvas");m.width=l,m.height=h,ctxTmp=m.getContext("2d"),ctxTmp.fillStyle=d,ctxTmp.fillRect(0,0,l,h),ctxTmp.globalCompositeOperation="destination-in",ctxTmp.drawImage(r,c.x,c.y,c.cx,c.cy,0,0,l,h),a.drawImage(m,0,0,l,h,0,0,l,h),a.restore()}else a.drawImage(r,c.x,c.y,c.cx,c.cy,0,0,l,h)},paintTextureImage:function(e,a,t,i,n,s,r,c){var o;o=n.clipping&&n.clipping[s]?n.clipping[s]:{x:0,y:0,cx:r.width,cy:r.height},e.paintTextureImageClip.call(this,e,a,t,i,n,s,r,o,c)},paintTexture:function(e,a,t,i,n){var s=e.materials[t].channels[i];for(var r in s.texturesImg){var c=n.images[r];e.paintTextureImage.call(this,e,a,t,i,s,r,c,n)}},makeMaterialTextures:function(e,a,t){for(var i in e.materials[a].channels){var n=e.materials[a].channels[i],s=document.createElement("canvas");s.width=n.size.cx,s.height=n.size.cy;var r=s.getContext("2d");e.paintTexture.call(this,e,r,a,i,t);var c=new THREE.Texture(s);c.needsUpdate=!0,t.textures[a][i]=c}},makeMaterials:function(e,a){a.textures={};for(var t in e.materials)a.textures[t]={},e.makeMaterialTextures.call(this,e,t,a),e.makeMaterial.call(this,e,t,a)}}},View.Game.cbTokenPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterials:function(e,a){a.textures={};for(var t in e.materials)a.textures[t]={},e.makeMaterialTextures.call(this,e,t,a);var i=[];for(var n in a.loadedMaterials){var s=a.loadedMaterials[n].clone(),r=s.name;if(e.materials[r]){$.extend(!0,s,e.materials[r].params);for(var c in e.materials[r].channels)switch(c){case"diffuse":s.map=a.textures[r][c];break;case"bump":s.bumpMap=a.textures[r][c]}}i.push(s)}var o=new THREE.MultiMaterial(i);a.material=o}}}),View.Game.cbUniformPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterial:function(e,a,t){var i=e.materials[a].params;i.map=t.textures[a].diffuse,i.normalMap=t.textures[a].normal;var n=e.materials[a].channels.normal.normalScale||1;i.normalScale=new THREE.Vector2(n,n);var s=new THREE.MeshPhongMaterial(i);t.material=s,t.geometry.mergeVertices(),t.geometry.computeVertexNormals()}}}),View.Game.cbPhongPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{phongProperties:{color:"#ffffff",shininess:300,specular:"#ffffff",emissive:"#222222",shading:"undefined"!=typeof THREE?THREE.FlatShading:0},makeMaterials:function(e,a){var t=new THREE.MeshPhongMaterial(e.phongProperties);a.material=t}}})}(),function(){var e,a,t=0,i=0,n={},s=Math.cos(Math.PI/6);View.Game.cbTargetMesh="/res/ring-target-hexagon.js",View.Game.cbTargetSelectColor=3377152,View.Game.cbTargetCancelColor=16746496,View.Game.cbEnsureConstants=function(){i||(i=this.cbVar.geometry.height,t=this.cbVar.geometry.width,e=this.cbVar.geometry.SHIFTMOD2,a=this.cbVar.geometry.SHIFTRIGHT?1:0)},View.Game.cbCSize=function(e){this.cbEnsureConstants();var r=n[e.margins.x+"_"+e.margins.y];if(!r){var c,o,l,h,d;if(e.vertical){var m=1.5*(i+2*e.margins.x+.5),p=2*(t+2*e.margins.y-a/2)*s;c=m/p,c<1?(o=12e3*c/m,l=o*s):(l=12e3/c/p,o=l/s),h=1.5*(i+2*e.margins.x+.5)*o,d=2*(t+2*e.margins.y-a/2)*l}else{var m=2*(t+2*e.margins.x+a/2-.5)*s,p=1.5*(i+2*e.margins.y+.5);c=m/p,c<1?(l=12e3*c/m,o=l/s):(o=12e3/c/p,l=o*s),h=2*(t+2*e.margins.x+a/2-.5)*l,d=1.5*(i+2*e.margins.y+.5)*o}r={s:l,r:o,pieceCx:2*l*.9,pieceCy:2*l*.9,ratio:c,width:h,height:d},n[e.margins.x+"_"+e.margins.y]=r}return r},View.Game.cbHexBoard=$.extend({},View.Game.cbBaseBoard,{notationMode:"out",coordsFn:function(n){return n=n||{},n.margins=n.margins||{x:0,y:0},function(s){var r,c=this.cbCSize(n),o=s%t,l=(s-o)/t;return r=n.vertical?{x:(l-(i-1)/2)*(3*c.r/2),y:2*-(o-(t-1)/2+a/4)*c.s-(l%2==e?0:c.s),z:0}:{x:2*(o-(t-1)/2-a/4+.25)*c.s+(l%2==e?0:c.s),y:(l-(i-1)/2)*(3*c.r/2),z:0},this.mViewAs==-1&&(r.y=-r.y,r.x=-r.x),r}},createGeometry:function(e,a){var t=this.cbCSize(e),i=new THREE.PlaneGeometry(t.width/1e3,t.height/1e3),n=new THREE.Matrix4;n.makeRotationX(-Math.PI/2),i.applyMatrix(n);for(var s=i.faceVertexUvs[0],r=0;r<s.length;r++)for(var c=0;c<s[r].length;c++)t.ratio<1&&(s[r][c].x=s[r][c].x*t.ratio+(1-t.ratio)/2),t.ratio>1&&(s[r][c].y=s[r][c].y/t.ratio+(1-1/t.ratio)/2);a(i)},paintBackground:function(e,a,t,i,n,s){t.boardBG&&a.drawImage(t.boardBG,-n/2,-s/2,n,s)},paintChannel:function(e,a,t,i){var n=this.cbCSize(e);e.paintBackground.call(this,e,a,t,i,n.width,n.height)},paint:function(e,a,t,i){for(var n in a){var s=a[n].getContext("2d");s.scale(e.TEXTURE_CANVAS_CX/12e3,e.TEXTURE_CANVAS_CY/12e3),s.translate(6e3,6e3),e.paintChannel.call(this,e,s,t,n)}i()}}),View.Game.cbHexBoardClassic=$.extend({},View.Game.cbHexBoard,{colorFill:{"+":"rgba(100,100,100,.9)","#":"rgba(0,0,0,1)",".":"rgba(210,200,200,.9)"," ":"rgba(0,0,0,0)"},texturesImg:{boardBG:"/res/images/wood.jpg"},notationMode:"in",modifyMesh:function(e,a,t){function i(e,a){var t=new THREE.Shape;return t.moveTo(-e/2,-a/2),t.lineTo(e/2,-a/2),t.lineTo(e/2,a/2),t.lineTo(-e/2,a/2),t}var n=this.cbCSize(e),s=n.width/1e3,r=n.height/1e3,c=i(s+.5+.1,r+.5+.1),o=i(s+.1,r+.1);c.holes.push(o);var l={amount:.4,steps:1,bevelSize:.1,bevelThickness:.04,bevelSegments:1},h=new THREE.ExtrudeGeometry(c,l),d=new THREE.Matrix4;d.makeRotationX(-Math.PI/2),h.applyMatrix(d),blackMat=new THREE.MeshPhongMaterial({color:"#000000",shininess:500,specular:"#888888",emissive:"#000000"});var m=new THREE.Mesh(h,blackMat);m.position.y=-l.amount-.01,a.add(m);var p=new THREE.Mesh(new THREE.BoxGeometry(s,r,.1),blackMat);p.rotation.x=Math.PI/2,p.position.y=-.1,a.add(p),t(a)},paintCell:function(e,a,t,i,n,s,r,c,o){a.strokeStyle="rgba(0,0,0,1)",a.lineWidth=15,a.fillStyle="bump"==i?"#ffffff":e.colorFill[n],a.beginPath(),e.vertical?(a.moveTo(s-c,r+0),a.lineTo(s-c/2,r-o),a.lineTo(s+c/2,r-o),a.lineTo(s+c,r-0),a.lineTo(s+c/2,r+o),a.lineTo(s-c/2,r+o)):(a.moveTo(s+0,r+c),a.lineTo(s+o,r+c/2),a.lineTo(s+o,r-c/2),a.lineTo(s+0,r-c),a.lineTo(s-o,r-c/2),a.lineTo(s-o,r+c/2)),a.closePath(),a.stroke(),a.fill()},paintCells:function(e,a,n,s){for(var r=this.cbCSize(e),c=e.coordsFn(e),o=0;o<i;o++)for(var l=0;l<t;l++){var h=l+o*t,d=c.call(this,h),m=this.cbVar.geometry.CellType(l,i-o-1);if(" "!=m){var p=d.x,u=d.y;e.paintCell.call(this,e,a,n,s,m,p,u,r.r,r.s)}}},paintLines:function(e,a,t,i){},paintChannel:function(e,a,t,i){var n=this.cbCSize(e);e.paintBackground.call(this,e,a,t,i,n.width,n.height),e.paintCells.call(this,e,a,t,i),e.paintLines.call(this,e,a,t,i),this.mNotation&&e.paintNotation.call(this,e,a,i)},paintNotation:function(e,a,t){var i=this.cbCSize(e);switch(a.textAlign="center",a.textBaseline="middle",a.fillStyle="#000000",a.font=Math.ceil(2*i.s/3)+"px Monospace",e.notationMode){case"out":e.paintOutNotation.apply(this,arguments);break;case"in":e.paintInNotation.apply(this,arguments)}},paintOutNotation:function(e,a,t){},paintInNotation:function(e,a,n){var s=this.cbCSize(e),r=e.coordsFn(e),c=e.colorFill;a.font=Math.ceil(2*s.s/5)+"px Monospace";for(var o=this.cbVar.geometry,l=0;l<i;l++)for(var h=0;h<t;h++){var d=h+l*t,m=r.call(this,d),p=this.cbVar.geometry.CellType(h,i-l-1);if(" "!=p){switch(a.fillStyle="rgba(0,0,0,0)","bump"==n&&(a.fillStyle=c["."]),p){case".":a.fillStyle="bump"==n?c["."]:c["#"];break;case"#":a.fillStyle=c["."];break;case"+":a.fillStyle=c["#"]}var u=m.x,f=m.y+s.s*(e.vertical,.8);e.notationDebug?a.fillText(d+"/"+h+"/"+l,u,f):a.fillText(o.PosName(d),u,f)}}}}),View.Game.cbHexBoardClassic2D=$.extend({},View.Game.cbHexBoardClassic,{colorFill:{".":"rgba(255,206,158,1)","#":"rgba(209,139,71,1)","+":"rgba(232,171,111,1)"," ":"rgba(0,0,0,0)"},texturesImg:{boardBG:"/res/images/whitebg.png"}}),View.Game.cbHexBoardClassic3DMargin=$.extend({},View.Game.cbHexBoardClassic,{margins:{x:.5,y:.5},extraChannels:["bump"]}),View.Game.cbHexBoardClassic2DMargin=$.extend({},View.Game.cbHexBoardClassic2D,{margins:{x:.5,y:.5}}),View.Game.cbHexBoardClassic2DNoMargin=$.extend({},View.Game.cbHexBoardClassic2D,{margins:{x:0,y:0}})}(),function(){var e={cx:512,cy:512};View.Game.cbStauntonWoodenPieceStyle=function(e){return this.cbStauntonPieceStyle($.extend(!0,{default:{"2d":{file:this.mViewOptions.fullPath+"/res/images/woodenpieces2d2.png"}}},e))},View.Game.cbStauntonPieceStyle=function(e){return $.extend(!0,{1:{default:{"2d":{clipy:0}}},"-1":{default:{"2d":{clipy:100}}},default:{"3d":{display:this.cbDisplayPieceFn(this.cbStauntonPieceStyle3D)},"2d":{file:this.mViewOptions.fullPath+"/res/images/wikipedia.png",clipwidth:100,clipheight:100}},pawn:{"2d":{clipx:0}},knight:{"2d":{clipx:100}},bishop:{"2d":{clipx:200}},rook:{"2d":{clipx:300}},queen:{"2d":{clipx:400}},king:{"2d":{clipx:500}}},e)},View.Game.cbStauntonPieceStyle3D=$.extend(!0,{},View.Game.cbUniformPieceStyle3D,{default:{mesh:{normalScale:1,rotateZ:180},materials:{mat0:{channels:{diffuse:{size:e},normal:{size:e}}}}},1:{default:{materials:{mat0:{params:{specular:131586,shininess:150}}}}},"-1":{default:{materials:{mat0:{params:{specular:526344,shininess:100}}},paintTextureImageClip:function(e,a,t,i,n,s,r,c,o){var l=a.canvas.width,h=a.canvas.height;"diffuse"==i?(a.globalCompositeOperation="normal",a.drawImage(r,c.x,c.y,c.cx,c.cy,0,0,l,h),a.globalCompositeOperation="multiply",a.drawImage(r,c.x,c.y,c.cx,c.cy,0,0,l,h),a.drawImage(r,c.x,c.y,c.cx,c.cy,0,0,l,h),a.globalCompositeOperation="hue",a.fillStyle="rgba(0,0,0,0.7)",a.fillRect(0,0,512,512)):a.drawImage(r,c.x,c.y,c.cx,c.cy,0,0,l,h)}}},pawn:{mesh:{jsFile:"/res/staunton/pawn/pawn-classic.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/pawn/pawn-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/pawn/pawn-normalmap.jpg"}}}}}},knight:{mesh:{jsFile:"/res/staunton/knight/knight.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/knight/knight-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/knight/knight-normalmap.jpg"}}}}}},bishop:{mesh:{jsFile:"/res/staunton/bishop/bishop.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/bishop/bishop-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/bishop/bishop-normalmap.jpg"}}}}}},rook:{mesh:{jsFile:"/res/staunton/rook/rook.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/rook/rook-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/rook/rook-normalmap.jpg"}}}}}},queen:{mesh:{jsFile:"/res/staunton/queen/queen.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/queen/queen-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/queen/queen-normalmap.jpg"}}}}}},king:{mesh:{jsFile:"/res/staunton/king/king.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/king/king-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/king/king-normalmap.jpg"}}}}}}})}(),function(){View.Game.cbExtraLights=[{color:16777215,intensity:1,position:[-9,14,-15],props:{shadowCameraNear:10,shadowCameraFar:30,castShadow:!0,shadowDarkness:.25,shadowMapWidth:2048,shadowMapHeight:2048}}],View.Game.cbDefineView=function(){var e=$.extend(!0,{},this.cbHexBoardClassic3DMargin,{}),a=$.extend(!0,{},this.cbHexBoardClassic2DMargin,{margins:{x:.1,y:.1}});return{coords:{"2d":this.cbHexBoard.coordsFn.call(this,a),"3d":this.cbHexBoard.coordsFn.call(this,e)},board:{"2d":{draw:this.cbDrawBoardFn(a)},"3d":{display:this.cbDisplayBoardFn(e)}},clicker:{"2d":{width:1e3,height:1e3},"3d":{scale:[.5,.5,.5]}},pieces:this.cbStauntonPieceStyle({default:{"2d":{width:700,height:700},"3d":{scale:[.4,.4,.4]}}})}},View.Board.cbMoveMidZ=function(e,a,t,i){return"N"==a.a?Math.max(t,i)+1500:(t+i)/2}}();