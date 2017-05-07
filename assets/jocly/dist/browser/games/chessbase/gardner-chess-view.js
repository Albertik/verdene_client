exports.view=View={Game:{},Board:{},Move:{}},function(){var e,t,a;View.Game.cbTargetMesh="/res/ring-target.js",View.Game.cbTargetSelectColor=16777215,View.Game.cbTargetCancelColor=16746496,View.Game.cbPromoSize=2e3,View.Game.xdInit=function(a){this.g.fullPath=this.mViewOptions.fullPath,this.cbPieceByType={},e=this.cbVar,t=this.cbDefineView(),this.cbView=t,this.cbClearPieces(),this.cbCreateLights(a),this.cbCreateScreens(a),this.cbCreateBoard(a),this.cbCreatePromo(a),this.cbCreatePieces(a),this.cbCreateCells(a)},View.Game.cbMakeDummyMesh=function(e){return"undefined"!=typeof THREE?new THREE.Mesh(new THREE.CubeGeometry(1e-4,1e-4,1e-4),new THREE.MeshLambertMaterial):null},View.Game.cbCurrentGame=function(){return a},View.Game.cbCreatePieces=function(e){for(var t=this.cbMakeDummyMesh(e),a=0;a<this.cbPiecesCount;a++)e.createGadget("piece#"+a,{base:{},"2d":{type:"sprite"},"3d":{type:"custommesh3d",create:function(e,a,i){return t}}})},View.Game.cbCreateBoard=function(e){var t=this.cbMakeDummyMesh(e);e.createGadget("board",{base:{},"2d":{type:"canvas",width:12e3,height:12e3,draw:function(e){console.warn("board draw must be overridden")}},"3d":{type:"custommesh3d",receiveShadow:!0,create:function(e,a,i){return t}}})},View.Game.cbCreateCells=function(e){for(var t=this,a=0;a<this.g.boardSize;a++)!function(a){e.createGadget("cell#"+a,{"2d":{z:101,type:"element",initialClasses:t.cbCellClass(e,a),width:1300,height:1300}}),e.createGadget("clicker#"+a,$.extend(!0,{"2d":{z:103,type:"element",initialClasses:"cb-clicker"},"3d":{type:"meshfile",file:t.g.fullPath+t.cbTargetMesh,flatShading:!0,castShadow:!0,smooth:0,scale:[.9,.9,.9],materials:{square:{transparent:!0,opacity:0},ring:{color:t.cbTargetSelectColor,opacity:1}}}},t.cbView.clicker))}(a)},View.Game.cbCreatePromo=function(e){e.createGadget("promo-board",{base:{type:"element",x:0,y:0,width:2e3,height:2e3,z:108,css:{"background-color":"White"}}}),e.createGadget("promo-cancel",{base:{type:"image",file:this.g.fullPath+"/res/images/cancel.png",x:0,y:0,width:800,height:800,z:109}});for(var t=0;t<this.g.pTypes.length;t++)e.createGadget("promo#"+t,{base:{y:0,z:109,type:"sprite",clipwidth:100,clipheight:100,width:1200,height:1200}})},View.Game.xdBuildScene=function(i){a=this,e=this.cbVar,t=this.cbDefineView(),this.cbView=t;for(var n=0;n<this.cbExtraLights.length;n++)i.updateGadget("extralights#"+n,{"3d":{visible:!0}});i.updateGadget("board",$.extend({base:{visible:!0}},this.cbView.board));for(var r=0;r<this.g.boardSize;r++)!function(e){var t=a.cbMakeDisplaySpec(e,0),n=$.extend(!0,{},t,{base:{visible:!0}},a.cbView.clicker,a.cbView.cell);i.updateGadget("cell#"+e,n),$.extend(!0,t,a.cbView.clicker),i.updateGadget("clicker#"+e,t)}(r);i.updateGadget("videoa",{"3d":{visible:!0,playerSide:1,z:3e3,y:1==this.mViewAs?1e4:-1e4,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[3,3,3]}}),i.updateGadget("videoabis",{"3d":{visible:!0,playerSide:-1,z:1500,x:1==this.mViewAs?-5500:5500,y:1==this.mViewAs?8900:-8900,rotate:1==this.mViewAs?-180:-0,rotateX:1==this.mViewAs?25:-25,scale:[.75,.75,.75]}}),i.updateGadget("videob",{"3d":{visible:!0,playerSide:-1,z:3e3,y:1==this.mViewAs?-1e4:1e4,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[3,3,3]}}),i.updateGadget("videobbis",{"3d":{visible:!0,playerSide:1,z:1500,x:1==this.mViewAs?5500:-5500,y:1==this.mViewAs?-8900:8900,rotate:1==this.mViewAs?-0:-180,rotateX:1==this.mViewAs?-25:25,scale:[.75,.75,.75]}}),i.updateGadget("promo-board",{base:{visible:!1}}),i.updateGadget("promo-cancel",{base:{visible:!1}});for(var n=0;n<this.g.pTypes.length;n++)i.updateGadget("promo#"+n,{base:{visible:!1}})},View.Game.cbDisplayBoardFn=function(e){var t=this;return function(i,n,r){var s=e.style+"_"+e.margins.x+"_"+e.margins.y+"_"+t.mNotation+"_"+t.mViewAs,c=this;s!=this._cbKey&&(this._cbKey=s,e.display.call(a,e,c,function(e){c.replaceMesh(e,n,r)}))}},View.Game.cbDrawBoardFn=function(e){return function(t){e.draw.call(a,e,this,t)}},View.Game.cbMakeDisplaySpec=function(e,t){var a={};for(var i in this.cbView.coords){var n=this.cbView.coords[i],r=n.call(this,e);a[i]={x:r.x||0,y:r.y||0,z:r.z||0,rotateX:r.rx||0,rotateY:(r.ry||0)*("3d"==i?this.mViewAs*t<0?-1:1:0),rotate:(r.rz||0)+("3d"==i&&this.mViewAs*t<0?180:0)}}return a},View.Game.cbMakeDisplaySpecForPiece=function(a,i,n){function r(e,t,a){return t?$.extend(!0,e,t.default,t[a]):{}}var s=this.cbMakeDisplaySpec(i,n.s);if(void 0===e.pieceTypes[n.t])return void console.warn("Piece type",n.t,"not defined in model");var c=e.pieceTypes[n.t].aspect||e.pieceTypes[n.t].name;return c?(t.pieces&&(s=r(s,t.pieces,c),t.pieces[n.s]&&(s=r(s,t.pieces[n.s],c))),s):void console.warn("Piece type",n.t,"has no aspect defined")},View.Board.xdDisplay=function(e,t){for(var a=0;a<this.pieces.length;a++){var i=this.pieces[a];if(i.p<0)e.updateGadget("piece#"+a,{base:{visible:!1}});else{var n=t.cbMakeDisplaySpecForPiece(t,i.p,i);n=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},n),e.updateGadget("piece#"+a,n)}}for(;a<t.cbPiecesCount;a++)e.updateGadget("piece#"+a,{base:{visible:!1}})},View.Game.cbExtraLights=[{color:16777215,intensity:.8,position:[9,14,-9],props:{shadowCameraNear:10,shadowCameraFar:25,castShadow:!0,shadowMapWidth:2048,shadowMapHeight:2048}}],View.Game.cbCreateLights=function(e){for(var t=0;t<this.cbExtraLights.length;t++)!function(t,a){e.createGadget("extralights#"+a,{"3d":{type:"custommesh3d",create:function(e){var a=new THREE.SpotLight(t.color,t.intensity);a.shadow.camera.far=t.props.shadowCameraFar,a.shadow.camera.near=t.props.shadowCameraNear,a.shadow.mapSize.width=t.props.shadowMapWidth,a.shadow.mapSize.height=t.props.shadowMapHeight,a.position.set.apply(a.position,t.position);var i=new THREE.Mesh;i.add(a);var n=new THREE.Object3D;i.add(n),a.target=n,e(i)}}})}(this.cbExtraLights[t],t)},View.Game.cbCreateScreen=function(e){var t=new THREE.PlaneGeometry(4,3,1,1),a=new THREE.MeshPhongMaterial({color:16777215,map:e,shading:THREE.FlatShading,emissive:{r:1,g:1,b:1}}),i=new THREE.Mesh(t,a);return this.objectReady(i),null},View.Game.cbCreateScreens=function(e){var t=this;e.createGadget("videoa",{"3d":{type:"video3d",makeMesh:function(e){return t.cbCreateScreen.call(this,e)}}}),e.createGadget("videoabis",{"3d":{type:"video3d",makeMesh:function(e){return t.cbCreateScreen.call(this,e)}}}),e.createGadget("videob",{"3d":{type:"video3d",makeMesh:function(e){return t.cbCreateScreen.call(this,e)}}}),e.createGadget("videobbis",{"3d":{type:"video3d",makeMesh:function(e){return t.cbCreateScreen.call(this,e)}}})},View.Board.xdInput=function(t,a){function i(){t.updateGadget("promo-board",{base:{visible:!1}}),t.updateGadget("promo-cancel",{base:{visible:!1}})}return{initial:{f:null,t:null,pr:null},getActions:function(n,r){var s={};if(null==r.f)n.forEach(function(e){void 0===s[e.f]&&(s[e.f]={f:e.f,moves:[],click:["piece#"+this.board[e.f],"clicker#"+e.f],view:["clicker#"+e.f],highlight:function(i){t.updateGadget("cell#"+e.f,{"2d":{classes:"select"==i?"cb-cell-select":"cb-cell-cancel",opacity:a.mShowMoves||"cancel"==i?1:0}}),t.updateGadget("clicker#"+e.f,{"3d":{materials:{ring:{color:"select"==i?a.cbTargetSelectColor:a.cbTargetCancelColor,opacity:a.mShowMoves||"cancel"==i?1:0,transparent:!a.mShowMoves&&"cancel"!=i}},castShadow:a.mShowMoves||"cancel"==i}})},unhighlight:function(){t.updateGadget("cell#"+e.f,{"2d":{classes:""}})},validate:{f:e.f}}),s[e.f].moves.push(e)},this);else if(null==r.t)n.forEach(function(n){var r=void 0===n.cg?n.t:n.cg;void 0===s[r]&&(s[r]={t:n.t,moves:[],click:["piece#"+this.board[r],"clicker#"+r],view:["clicker#"+r],highlight:function(e){t.updateGadget("cell#"+r,{"2d":{classes:"select"==e?"cb-cell-select":"cb-cell-cancel",opacity:a.mShowMoves||"cancel"==e?1:0}}),t.updateGadget("clicker#"+r,{"3d":{materials:{ring:{color:"select"==e?a.cbTargetSelectColor:a.cbTargetCancelColor,opacity:a.mShowMoves||"cancel"==e?1:0,transparent:!a.mShowMoves&&"cancel"!=e}},castShadow:a.mShowMoves||"cancel"==e}})},unhighlight:function(e){t.updateGadget("cell#"+r,{"2d":{classes:""}})},validate:{t:n.t},execute:function(i){var r=this;this.cbAnimate(t,a,n,function(){var c=s[n.t].moves;c.length>1&&(t.updateGadget("promo-board",{base:{visible:!0,width:a.cbPromoSize*(c.length+1)}}),t.updateGadget("promo-cancel",{base:{visible:!0,x:c.length*a.cbPromoSize/2}}),c.forEach(function(i,n){var r=e.pieceTypes[i.pr].aspect||e.pieceTypes[i.pr].name,s=$.extend(!0,{},a.cbView.pieces.default,a.cbView.pieces[r]);a.cbView.pieces[this.mWho]&&(s=$.extend(!0,s,a.cbView.pieces[this.mWho].default,a.cbView.pieces[this.mWho][r])),t.updateGadget("promo#"+i.pr,{base:$.extend(s["2d"],{x:(n-c.length/2)*a.cbPromoSize})})},r)),i()})},unexecute:function(){if(null!=n.c){var e=this.pieces[n.c],r=a.cbMakeDisplaySpecForPiece(a,e.p,e);r=$.extend(!0,{base:{visible:!0},"2d":{opacity:1},"3d":{positionEasingUpdate:null}},r),t.updateGadget("piece#"+n.c,r)}var s=this.pieces[this.board[n.f]],c=a.cbMakeDisplaySpecForPiece(a,s.p,s);t.updateGadget("piece#"+s.i,c),i()}}),void 0!==n.cg&&(s[r].validate.cg=n.cg,s[r].execute=function(e){this.cbAnimate(t,a,n,function(){e()})}),s[r].moves.push(n)},this);else if(null==r.pr){var c=[];n.forEach(function(e){void 0!==e.pr&&(void 0===s[e.pr]&&(s[e.pr]={pr:e.pr,moves:[],click:["promo#"+e.pr],validate:{pr:e.pr},cancel:["promo-cancel"],post:i,skipable:!0},c.push(e.pr)),s[e.pr].moves.push(e))},this),c.length>1&&c.forEach(function(e){s[e].view=["promo#"+e]})}return s}}},View.Game.cbCellClass=function(e,t){return"classic-cell "+((t+(t-t%this.g.NBCOLS)/this.g.ROWS)%2?"classic-cell-black":"classic-cell-white")},View.Board.xdPlayedMove=function(e,t,a){t.mOldBoard.cbAnimate(e,t,a,function(){t.MoveShown()})},View.Board.cbAnimate=function(e,t,a,i){function n(){0==--s&&(c&&t.PlaySound("tac"+(1+Math.floor(3*Math.random()))),i())}var r=this,s=1,c=!1,o=this.pieces[this.board[a.f]],l=t.cbMakeDisplaySpec(a.f,o.s),d=t.cbMakeDisplaySpecForPiece(t,a.t,o);for(var h in l){var m=l[h];void 0!==m.z&&function(e){var i=m.z,n=d[e].z,s=r.cbMoveMidZ(t,a,i,n,e),o=i,l=o-s,h=o-n;s!=(i+n)/2&&(c=!0);var u=4*l-2*h,p=-h*h,f=Math.abs(u*u- -4*p),g=(-u-Math.sqrt(f))/-2,b=(-u+Math.sqrt(f))/-2,w=g,v=-w-h;(0==w||-v/(2*w)<0||-v/(2*w)>1)&&(w=b,v=-w-h),d[e].positionEasingUpdate=function(e){var t=(w*e*e+v*e+o)*this.SCALE3D;this.object3d.position.y=t}}(h)}if(c||t.PlaySound("move"+(1+Math.floor(4*Math.random()))),e.updateGadget("piece#"+o.i,d,600,function(){n()}),null!=a.c){s++;var u={positionEasingUpdate:null};switch(t.cbView.captureAnim3d||"movedown"){case"movedown":u.z=-2e3;break;case"scaledown":u.scale=[0,0,0]}var p=this.pieces[a.c];e.updateGadget("piece#"+p.i,{"2d":{opacity:0},"3d":u},600,n)}if(void 0!==a.cg){var m=t.cbVar.castle[a.f+"/"+a.cg],f=m.r[m.r.length-1],o=this.pieces[this.board[a.cg]],d=t.cbMakeDisplaySpecForPiece(t,f,o);s++,e.updateGadget("piece#"+o.i,d,600,function(){n()})}},View.Board.cbMoveMidZ=function(e,t,a,i){return(a+i)/2}}(),function(){View.Game.cbBaseBoard={TEXTURE_CANVAS_CX:1024,TEXTURE_CANVAS_CY:1024,display:function(e,t,a){var i=this;e.getResource=t.getResource,e.createGeometry.call(this,e,function(t){e.createTextureImages.call(i,e,function(n){var r=["diffuse"].concat(e.extraChannels||[]),s={};r.forEach(function(t){var a=document.createElement("canvas");a.width=e.TEXTURE_CANVAS_CX,a.height=e.TEXTURE_CANVAS_CY,s[t]=a}),e.createMaterial.call(i,e,s,function(r){var c=new THREE.Mesh(t,r);e.modifyMesh.call(i,e,c,function(t){e.paint.call(i,e,s,n,function(){a(t)})})})})})},createTextureImages:function(e,t){var a=this,i={},n=0,r=e.texturesImg||{};for(var s in r)n++;if(0==n)t(i);else for(var s in r)!function(s){e.getResource("image|"+a.g.fullPath+r[s],function(e){i[s]=e,0==--n&&t(i)})}(s)},createMaterial:function(e,t,a){var i=new THREE.Texture(t.diffuse);i.needsUpdate=!0;var n={specular:"#050505",shininess:30,map:i};if(t.bump){var r=new THREE.Texture(t.bump);r.needsUpdate=!0,n.bumpMap=r,n.bumpScale=.05}a(new THREE.MeshPhongMaterial(n))},modifyMesh:function(e,t,a){a(t)},prePaint:function(e,t,a,i,n){n()},paint:function(e,t,a,i,n){n()},postPaint:function(e,t,a,i,n){n()},paintChannel:function(e,t,a,i){},draw:function(e,t,a){var i=this;e.getResource=t.getResource,e.createTextureImages.call(this,e,function(t){e.paintChannel.call(i,e,a,t,"diffuse")})}}}(),function(){function e(e){for(var t=JSON.stringify(e),a=0,i=0;i<t.length;i++)a=(a<<5)-a+t.charCodeAt(i),a&=a;return a}var t,a={};View.Game.cbDisplayPieceFn=function(a){var i=this,n=e(a);return function(e,r,s){t=this.getResource;var c=/^piece#([0-9]+)$/.exec(this.gadget.id);if(!c)return null;var o=parseInt(c[1]),l=i.cbCurrentGame();if(o>=l.mBoard.pieces.length)return null;var d=l.mBoard.pieces[o],h=l.cbVar.pieceTypes[d.t].aspect||l.cbVar.pieceTypes[d.t].name,m=h+"_"+n+"_"+d.s,u=this;m!=this._cbKey&&(this._cbKey=m,u.options=r,l.cbMakePiece(a,h,d.s,function(e){u.replaceMesh(e,u.options,s)}))}},View.Game.cbMakePiece=function(t,i,n,r){function s(e,t,a){return t?$.extend(!0,e,t.default,t[a]):{}}if(!t)return void console.error("piece-view: style is not defined");var c=s({},t,i);t[n]&&(c=s(c,t[n],i));var o=e(c),l=a[o];Array.isArray(l)?l.push(r):l?r(new THREE.Mesh(l.geometry,l.material)):(a[o]=[r],c.loadResources.call(this,c,function(e){c.displayPiece.call(this,c,e,function(){var t=a[o];a[o]={geometry:e.geometry,material:e.material},t.forEach(function(t){t(new THREE.Mesh(e.geometry,e.material))})})}))},View.Game.cbClearPieces=function(){a={}},View.Game.cbBasePieceStyle={default:{mesh:{jsFile:function(e,t){t(new THREE.CubeGeometry(1,1,1),new THREE.MeshPhongMaterial({}))},smooth:0,rotateZ:0},loadMesh:function(e,a){"function"==typeof e.mesh.jsFile?e.mesh.jsFile(e,a):t("smoothedfilegeo|"+e.mesh.smooth+"|"+this.g.fullPath+e.mesh.jsFile,a)},loadImages:function(e,a){function i(){0==--r&&a(s)}var n=this,r=1,s={};for(var c in e.materials){var o=e.materials[c].channels;for(var l in o)if(o[l].texturesImg)for(var d in o[l].texturesImg)!function(e,a){r++,t("image|"+n.g.fullPath+a,function(t){s[e]=t,i()})}(d,o[l].texturesImg[d])}i()},loadResources:function(e,t){function a(){0==--s&&t({geometry:n,images:i,textures:{},loadedMaterials:r})}var i,n,r,s=2;e.loadMesh.call(this,e,function(t,i){if(!t._cbZRotated){var s=new THREE.Matrix4;s.makeRotationY(e.mesh.rotateZ*Math.PI/180),t.applyMatrix(s),t._cbZRotated=!0}n=t,r=i,a()}),e.loadImages.call(this,e,function(e){i=e,a()})},displayPiece:function(e,t,a){e.makeMaterials.call(this,e,t),a()},paintTextureImageClip:function(e,t,a,i,n,r,s,c,o){var l=t.canvas.width,d=t.canvas.height;if(n.patternFill&&n.patternFill[r]){var h=n.patternFill[r];t.save();var m=document.createElement("canvas");m.width=l,m.height=d,ctxTmp=m.getContext("2d"),ctxTmp.fillStyle=h,ctxTmp.fillRect(0,0,l,d),ctxTmp.globalCompositeOperation="destination-in",ctxTmp.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),t.drawImage(m,0,0,l,d,0,0,l,d),t.restore()}else t.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d)},paintTextureImage:function(e,t,a,i,n,r,s,c){var o;o=n.clipping&&n.clipping[r]?n.clipping[r]:{x:0,y:0,cx:s.width,cy:s.height},e.paintTextureImageClip.call(this,e,t,a,i,n,r,s,o,c)},paintTexture:function(e,t,a,i,n){var r=e.materials[a].channels[i];for(var s in r.texturesImg){var c=n.images[s];e.paintTextureImage.call(this,e,t,a,i,r,s,c,n)}},makeMaterialTextures:function(e,t,a){for(var i in e.materials[t].channels){var n=e.materials[t].channels[i],r=document.createElement("canvas");r.width=n.size.cx,r.height=n.size.cy;var s=r.getContext("2d");e.paintTexture.call(this,e,s,t,i,a);var c=new THREE.Texture(r);c.needsUpdate=!0,a.textures[t][i]=c}},makeMaterials:function(e,t){t.textures={};for(var a in e.materials)t.textures[a]={},e.makeMaterialTextures.call(this,e,a,t),e.makeMaterial.call(this,e,a,t)}}},View.Game.cbTokenPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterials:function(e,t){t.textures={};for(var a in e.materials)t.textures[a]={},e.makeMaterialTextures.call(this,e,a,t);var i=[];for(var n in t.loadedMaterials){var r=t.loadedMaterials[n].clone(),s=r.name;if(e.materials[s]){$.extend(!0,r,e.materials[s].params);for(var c in e.materials[s].channels)switch(c){case"diffuse":r.map=t.textures[s][c];break;case"bump":r.bumpMap=t.textures[s][c]}}i.push(r)}var o=new THREE.MultiMaterial(i);t.material=o}}}),View.Game.cbUniformPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{makeMaterial:function(e,t,a){var i=e.materials[t].params;i.map=a.textures[t].diffuse,i.normalMap=a.textures[t].normal;var n=e.materials[t].channels.normal.normalScale||1;i.normalScale=new THREE.Vector2(n,n);var r=new THREE.MeshPhongMaterial(i);a.material=r,a.geometry.mergeVertices(),a.geometry.computeVertexNormals()}}}),View.Game.cbPhongPieceStyle3D=$.extend(!0,{},View.Game.cbBasePieceStyle,{default:{phongProperties:{color:"#ffffff",shininess:300,specular:"#ffffff",emissive:"#222222",shading:"undefined"!=typeof THREE?THREE.FlatShading:0},makeMaterials:function(e,t){var a=new THREE.MeshPhongMaterial(e.phongProperties);t.material=a}}})}(),function(){var e=0,t=0,a={};View.Game.cbEnsureConstants=function(){t||(t=this.cbVar.geometry.height,e=this.cbVar.geometry.width)},View.Game.cbCSize=function(i){this.cbEnsureConstants();var n=a[i.margins.x+"_"+i.margins.y];if(!n){var r,s,c,o,l=e+2*i.margins.x,d=t+2*i.margins.y;r=l/d,o=r<1?12e3*r/l:12e3/r/d,s=(e+2*i.margins.x)*o,c=(t+2*i.margins.y)*o,n={cx:o,cy:o,pieceCx:o,pieceCy:o,ratio:r,width:s,height:c},a[i.margins.x+"_"+i.margins.y]=n}return n},View.Game.cbGridBoard=$.extend({},View.Game.cbBaseBoard,{notationMode:"out",coordsFn:function(a){return a=a||{},a.margins=a.margins||{x:0,y:0},function(i){var n=this.cbCSize(a),r=i%e,s=(i-r)/e;return 1==this.mViewAs&&(s=t-1-s),this.mViewAs==-1&&(r=e-1-r),{x:(r-(e-1)/2)*n.cx,y:(s-(t-1)/2)*n.cy,z:0}}},createGeometry:function(e,t){var a=this.cbCSize(e),i=a.width/1e3,n=a.height/1e3,r=new THREE.PlaneGeometry(i,n),s=new THREE.Matrix4;s.makeRotationX(-Math.PI/2),r.applyMatrix(s);for(var c=r.faceVertexUvs[0],o=0;o<c.length;o++)for(var l=0;l<c[o].length;l++)a.ratio<1&&(c[o][l].x=c[o][l].x*a.ratio+(1-a.ratio)/2),a.ratio>1&&(c[o][l].y=c[o][l].y/a.ratio+(1-1/a.ratio)/2);t(r)},paintBackground:function(e,t,a,i,n,r){a.boardBG&&t.drawImage(a.boardBG,-n/2,-r/2,n,r)},paintChannel:function(e,t,a,i){var n=this.cbCSize(e);e.paintBackground.call(this,e,t,a,i,n.width,n.height)},paint:function(e,t,a,i){for(var n in t){var r=t[n].getContext("2d");r.save(),r.scale(e.TEXTURE_CANVAS_CX/12e3,e.TEXTURE_CANVAS_CY/12e3),r.translate(6e3,6e3),e.paintChannel.call(this,e,r,a,n),r.restore()}i()}}),View.Game.cbGridBoardClassic=$.extend({},View.Game.cbGridBoard,{colorFill:{".":"rgba(160,150,150,0.9)","#":"rgba(0,0,0,1)"," ":"rgba(0,0,0,0)"},texturesImg:{boardBG:"/res/images/wood.jpg"},modifyMesh:function(e,t,a){function i(e,t){var a=new THREE.Shape;return a.moveTo(-e/2,-t/2),a.lineTo(e/2,-t/2),a.lineTo(e/2,t/2),a.lineTo(-e/2,t/2),a}var n=this.cbCSize(e),r=n.width/1e3,s=n.height/1e3,c=i(r+.5+.1,s+.5+.1),o=i(r+.1,s+.1);c.holes.push(o);var l={amount:.4,steps:1,bevelSize:.1,bevelThickness:.04,bevelSegments:1},d=new THREE.ExtrudeGeometry(c,l),h=new THREE.Matrix4;h.makeRotationX(-Math.PI/2),d.applyMatrix(h),blackMat=new THREE.MeshPhongMaterial({color:"#000000",shininess:500,specular:"#888888",emissive:"#000000"});var m=new THREE.Mesh(d,blackMat);m.position.y=-l.amount-.01,t.add(m);var u=new THREE.Mesh(new THREE.BoxGeometry(r,s,.1),blackMat);u.rotation.x=Math.PI/2,u.position.y=-.1,t.add(u),a(t)},paintCell:function(e,t,a,i,n,r,s,c,o){t.strokeStyle="rgba(0,0,0,1)",t.lineWidth=15,t.fillStyle="bump"==i?"#ffffff":e.colorFill[n],t.fillRect(r-c/2,s-o/2,c,o),t.rect(r-c/2,s-o/2,c,o)},paintCells:function(a,i,n,r){for(var s=this.cbCSize(a),c=a.coordsFn(a),o=0;o<t;o++)for(var l=0;l<e;l++){var d=1==this.mViewAs?l+o*e:e*t-(1+l+o*e),h=c.call(this,d),m=this.cbView.boardLayout[t-o-1][l],u=h.x,p=h.y,f=s.cx,g=s.cy;a.paintCell.call(this,a,i,n,r,m,u,p,f,g)}},paintLines:function(a,i,n,r){var s=this.cbCSize(a);i.strokeStyle="#000000",i.lineWidth=40,i.strokeRect(-e*s.cx/2,-t*s.cy/2,e*s.cx,t*s.cy)},paintChannel:function(e,t,a,i){var n=this.cbCSize(e);e.paintBackground.call(this,e,t,a,i,n.width,n.height),e.paintCells.call(this,e,t,a,i),e.paintLines.call(this,e,t,a,i),this.mNotation&&e.paintNotation.call(this,e,t,i)},paintNotation:function(e,t,a){var i=this.cbCSize(e);switch(t.textAlign="center",t.textBaseline="middle",t.fillStyle="#000000",t.font=Math.ceil(i.cx/3)+"px Monospace",e.notationMode){case"out":e.paintOutNotation.apply(this,arguments);break;case"in":e.paintInNotation.apply(this,arguments)}},paintOutNotation:function(a,i,n){for(var r=this.cbCSize(a),s=0;s<t;s++){var c=t-s;this.mViewAs<0&&(c=s+1);var o=-(e/2+a.margins.x/2)*r.cx,l=(s-t/2+.5)*r.cy;i.fillText(c,o,l)}for(var d=0;d<e;d++){var h=d;this.mViewAs<0&&(h=e-d-1);var o=(d-e/2+.5)*r.cx,l=(t/2+a.margins.y/2)*r.cy;i.fillText(String.fromCharCode(97+h),o,l)}},paintInNotation:function(a,i,n){var r=this.cbCSize(a),s=a.coordsFn(a),c=a.colorFill;i.font=Math.ceil(r.cx/5)+"px Monospace";for(var o=0;o<t;o++)for(var l=0;l<e;l++){var d=t-o,h=l;this.mViewAs<0?h=e-l-1:d=o+1;var m=1==this.mViewAs?l+o*e:e*t-(1+l+o*e),u=s.call(this,m);switch(i.fillStyle="rgba(0,0,0,0)","bump"==n&&(i.fillStyle=c["."]),this.cbView.boardLayout[t-o-1][l]){case".":i.fillStyle="bump"==n?c["."]:c["#"];break;case"#":i.fillStyle=c["."]}var p=u.x-r.cx/3,f=u.y-r.cy/3;a.notationDebug?i.fillText(m,p,f):i.fillText(String.fromCharCode(97+h)+d,p,f)}}}),View.Board.cbMoveMidZ=function(e,t,a,i){var n=e.cbVar.geometry,r=n.C(t.f),s=n.C(t.t),c=n.R(t.f),o=n.R(t.t);return s-r==0||o-c==0||Math.abs(s-r)==Math.abs(o-c)?(a+i)/2:Math.max(a,i)+1500},View.Game.cbGridBoardClassic2D=$.extend({},View.Game.cbGridBoardClassic,{colorFill:{".":"#F1D9B3","#":"#C7885D"," ":"rgba(0,0,0,0)"}}),View.Game.cbGridBoardClassic3DMargin=$.extend({},View.Game.cbGridBoardClassic,{margins:{x:.67,y:.67},extraChannels:["bump"]}),View.Game.cbGridBoardClassic2DMargin=$.extend({},View.Game.cbGridBoardClassic2D,{margins:{x:.67,y:.67}}),View.Game.cbGridBoardClassic2DNoMargin=$.extend({},View.Game.cbGridBoardClassic2D,{margins:{x:0,y:0},notationMode:"in",texturesImg:{boardBG:"/res/images/whitebg.png"}})}(),function(){var e={cx:512,cy:512};View.Game.cbStauntonWoodenPieceStyle=function(e){return this.cbStauntonPieceStyle($.extend(!0,{default:{"2d":{file:this.mViewOptions.fullPath+"/res/images/woodenpieces2d2.png"}}},e))},View.Game.cbStauntonPieceStyle=function(e){return $.extend(!0,{1:{default:{"2d":{clipy:0}}},"-1":{default:{"2d":{clipy:100}}},default:{"3d":{display:this.cbDisplayPieceFn(this.cbStauntonPieceStyle3D)},"2d":{file:this.mViewOptions.fullPath+"/res/images/wikipedia.png",clipwidth:100,clipheight:100}},pawn:{"2d":{clipx:0}},knight:{"2d":{clipx:100}},bishop:{"2d":{clipx:200}},rook:{"2d":{clipx:300}},queen:{"2d":{clipx:400}},king:{"2d":{clipx:500}}},e)},View.Game.cbStauntonPieceStyle3D=$.extend(!0,{},View.Game.cbUniformPieceStyle3D,{default:{mesh:{normalScale:1,rotateZ:180},materials:{mat0:{channels:{diffuse:{size:e},normal:{size:e}}}}},1:{default:{materials:{mat0:{params:{specular:131586,shininess:150}}}}},"-1":{default:{materials:{mat0:{params:{specular:526344,shininess:100}}},paintTextureImageClip:function(e,t,a,i,n,r,s,c,o){var l=t.canvas.width,d=t.canvas.height;"diffuse"==i?(t.globalCompositeOperation="normal",t.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),t.globalCompositeOperation="multiply",t.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),t.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d),t.globalCompositeOperation="hue",t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,512,512)):t.drawImage(s,c.x,c.y,c.cx,c.cy,0,0,l,d)}}},pawn:{mesh:{jsFile:"/res/staunton/pawn/pawn-classic.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/pawn/pawn-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/pawn/pawn-normalmap.jpg"}}}}}},knight:{mesh:{jsFile:"/res/staunton/knight/knight.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/knight/knight-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/knight/knight-normalmap.jpg"}}}}}},bishop:{mesh:{jsFile:"/res/staunton/bishop/bishop.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/bishop/bishop-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/bishop/bishop-normalmap.jpg"}}}}}},rook:{mesh:{jsFile:"/res/staunton/rook/rook.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/rook/rook-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/rook/rook-normalmap.jpg"}}}}}},queen:{mesh:{jsFile:"/res/staunton/queen/queen.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/queen/queen-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/queen/queen-normalmap.jpg"}}}}}},king:{mesh:{jsFile:"/res/staunton/king/king.js"},materials:{mat0:{channels:{diffuse:{texturesImg:{diffImg:"/res/staunton/king/king-diffusemap.jpg"}},normal:{texturesImg:{normalImg:"/res/staunton/king/king-normalmap.jpg"}}}}}}})}(),function(){View.Game.cbDefineView=function(){return{coords:{"2d":this.cbGridBoard.coordsFn.call(this,this.cbGridBoardClassic2DNoMargin),"3d":this.cbGridBoard.coordsFn.call(this,this.cbGridBoardClassic3DMargin)},boardLayout:["#.#.#",".#.#.","#.#.#",".#.#.","#.#.#"],board:{"2d":{draw:this.cbDrawBoardFn(this.cbGridBoardClassic2DNoMargin)},"3d":{display:this.cbDisplayBoardFn(this.cbGridBoardClassic3DMargin)}},clicker:{"2d":{width:2400,height:2400},"3d":{scale:[1.2,1.2,1.2]}},pieces:this.cbStauntonPieceStyle({default:{"2d":{width:2100,height:2100},"3d":{scale:[.8,.8,.8]}}})}},View.Board.cbMoveMidZ=function(e,t,a,i){return"N"==t.a?Math.max(a,i)+1500:(a+i)/2}}();