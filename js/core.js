/*! Compiled Sun, 31 Oct 2021 15:17:21 UTC */
var core_pools=function(t,s){"use strict";var i;t.AlignType=void 0,(i=t.AlignType||(t.AlignType={}))[i.CENTER=0]="CENTER",i[i.CENTER_LEFT=1]="CENTER_LEFT",i[i.CENTER_RIGHT=2]="CENTER_RIGHT",i[i.TOP_CENTER=3]="TOP_CENTER",i[i.TOP_LEFT=4]="TOP_LEFT",i[i.TOP_RIGHT=5]="TOP_RIGHT",i[i.BOTTOM_CENTER=6]="BOTTOM_CENTER",i[i.BOTTOM_LEFT=7]="BOTTOM_LEFT",i[i.BOTTOM_RIGHT=8]="BOTTOM_RIGHT";class e{constructor(i,e,h,o){this.id=i,this._views=e,this._rect=h,o||(o={align:t.AlignType.CENTER,offsetX:0,offsetY:0,padX:0,padY:0,shiftX:0,shiftY:0}),o.align||(o.align=t.AlignType.CENTER),o.offsetX||(o.offsetX=0),o.offsetY||(o.offsetY=0),o.padX||(o.padX=0),o.padY||(o.padY=0),o.shiftX||(o.shiftX=0),o.shiftY||(o.shiftY=0),this._options=o,this._backup=new Array,this._views.forEach((t=>{this._backup.push(new s.Point(t.x,t.y))})),this._updatesX=new Map([[t.AlignType.TOP_LEFT,this.updateByLeftX.bind(this)],[t.AlignType.CENTER_LEFT,this.updateByLeftX.bind(this)],[t.AlignType.BOTTOM_LEFT,this.updateByLeftX.bind(this)],[t.AlignType.TOP_CENTER,this.updateByCenterX.bind(this)],[t.AlignType.CENTER,this.updateByCenterX.bind(this)],[t.AlignType.BOTTOM_CENTER,this.updateByCenterX.bind(this)],[t.AlignType.TOP_RIGHT,this.updateByRightX.bind(this)],[t.AlignType.CENTER_RIGHT,this.updateByRightX.bind(this)],[t.AlignType.BOTTOM_RIGHT,this.updateByRightX.bind(this)]]),this._updatesY=new Map([[t.AlignType.TOP_CENTER,this.updateByTopY.bind(this)],[t.AlignType.TOP_LEFT,this.updateByTopY.bind(this)],[t.AlignType.TOP_RIGHT,this.updateByTopY.bind(this)],[t.AlignType.CENTER,this.updateByCenterY.bind(this)],[t.AlignType.CENTER_LEFT,this.updateByCenterY.bind(this)],[t.AlignType.CENTER_RIGHT,this.updateByCenterY.bind(this)],[t.AlignType.BOTTOM_CENTER,this.updateByBottomY.bind(this)],[t.AlignType.BOTTOM_LEFT,this.updateByBottomY.bind(this)],[t.AlignType.BOTTOM_RIGHT,this.updateByBottomY.bind(this)]])}destroy(){for(let t=0;t<this._backup.length;t++)this._views[t].x=this._backup[t].x,this._views[t].y=this._backup[t].y;this._views=null,this._rect=null,this._backup=null,this._options=null}updateX(){this._updatesX.get(this._options.align)()}updateY(){this._updatesY.get(this._options.align)()}updateByLeftX(){}updateByCenterX(){}updateByRightX(){}updateByTopY(){}updateByCenterY(){}updateByBottomY(){}alignX(t){}alignY(t){}}class h extends Map{destroy(){this.forEach((t=>{t.destroy&&t.destroy()})),this.clear()}set(t,s){if(super.has(t))throw new Error(this.constructor.name+": Object "+t+" already exist!");return super.set(t,s)}delete(t){if(!super.has(t))throw new Error(this.constructor.name+": Object "+t+" is undefined!");return super.delete(t)}get(t){if(!super.has(t))throw new Error(this.constructor.name+": Object "+t+" is undefined!");return super.get(t)}}class o{constructor(){this._array=new Array}destroy(){this._array.forEach((t=>{null})),this._array.splice(0,this._array.length),this._array=null}add(t){this._array.push(t)}remove(t){for(let s=0;s<this._array.length;s++)if(this._array[s]==t)return void this._array.splice(s,1)}get length(){return this._array.length}}return t.AlignGroup=e,t.AlignPool=class extends h{updateX(){this.forEach((t=>{t.updateX()}))}updateY(){this.forEach((t=>{t.updateY()}))}update(){this.updateX(),this.updateY()}},t.ArrayPool=o,t.BindPool=class extends h{destroy(){this.clear()}set(t,s){return super.set(t,s),s}},t.LinearAlignGroup=class extends e{updateByLeftX(){this.alignX(this._rect.x+this._options.offsetX)}updateByCenterX(){var t=this._views[0]._bounds.getRectangle().width;for(let s=1;s<this._views.length;s++)t+=(this._options.padX>0?this._views[s]._bounds.getRectangle().width+this._options.padX:0)+this._options.shiftX;this.alignX((this._rect.width-t)/2+this._rect.x+this._options.offsetX)}updateByRightX(){var t=this._views[0]._bounds.getRectangle().width;for(let s=1;s<this._views.length;s++)t+=(this._options.padX>0?this._views[s]._bounds.getRectangle().width+this._options.padX:0)+this._options.shiftX;this.alignX(this._rect.width-t+this._rect.x+this._options.offsetX)}updateByTopY(){this.alignY(this._rect.y+this._options.offsetY)}updateByCenterY(){var t=this._views[0]._bounds.getRectangle().height;for(let s=1;s<this._views.length;s++)t+=(this._options.padY>0?this._views[s]._bounds.getRectangle().height+this._options.padY:0)+this._options.shiftY;this.alignY((this._rect.height-t)/2+this._rect.y+this._options.offsetY)}updateByBottomY(){var t=this._views[0]._bounds.getRectangle().height;for(let s=1;s<this._views.length;s++)t+=(this._options.padY>0?this._views[s]._bounds.getRectangle().height+this._options.padY:0)+this._options.shiftY;this.alignY(this._rect.y+this._rect.height-t-this._options.offsetY)}alignX(t,s=!1){this._views[0].x=t;for(let s=1;s<this._views.length;s++)t=this._views[s].x=t+(this._options.padX>0?this._views[s-1]._bounds.getRectangle().width+this._options.padX:0)+this._options.shiftX}alignY(t){this._views[0].y=t;for(let s=1;s<this._views.length;s++)t=this._views[s].y=t+(this._options.padY>0?this._views[s-1]._bounds.getRectangle().height+this._options.padY:0)+this._options.shiftY}},t.MapPool=h,t.Task=class{constructor(t){this.id=t}destroy(){this._onStart=null,this._onProgress=null,this._onComplete=null,this._onError=null}execute(){this._onStart&&this._onStart()}onStart(t){return this._onStart=t,this}onProgress(t){return this._onProgress=t,this}onComplete(t){return this._onComplete=t,this}onError(t){return this._onError=t,this}success(t){this._onComplete&&this._onComplete(t),this.startNextTask()}failed(t){if(!this._onError)throw new Error(this.constructor.name+": "+t);this._onError(t),this.startNextTask()}startNextTask(){this.nextTask&&this.nextTask(this)}},t.TaskPool=class extends o{constructor(t=!1,s=!1){super(),this._autoExecute=t,this._skipBusyState=s,this._tasksInProgress=0,this._busy=!1}destroy(){for(;this._array.length>0;)this._array.pop().destroy();super.destroy()}add(t){super.add(t),this._autoExecute&&this.execute()}execute(t,s){if(this._onAllComplete=t,this._onAllProgress=s,this._autoExecute&&(this._onAllComplete||this._onAllProgress))throw new Error(this.constructor.name+": can't assign onAllComplete or onAllProgress in auto-execute mode!");if(!this._busy)if(this._total=this._array.length,this._skipBusyState)for(let t=0;t<this._total;t++)this.next();else this._busy=!0,this.next()}next(t){if(t&&(this._onAllProgress&&this._onAllProgress({id:t.id,done:this._total-(this._skipBusyState?this._tasksInProgress-1:this._array.length),total:this._total}),t.destroy(),this._tasksInProgress--),this._array.length>0){let t=this._array.shift();t.nextTask=this.next.bind(this),t.execute(),this._tasksInProgress++}else this._busy=!1,this._onAllComplete&&0==this._tasksInProgress&&this._onAllComplete()}},Object.defineProperty(t,"__esModule",{value:!0}),t}({},PIXI);

/*! Compiled Sun, 31 Oct 2021 15:17:21 UTC */
var core_mvc=function(t,e,s){"use strict";class i extends s.utils.EventEmitter{constructor(){super()}destroy(){}onUpdate(){}onValueUpdate(){this.emit("paramUpdated"),this.on("paramUpdated",(()=>{}),this)}}class h extends s.Container{constructor(){super(),this.name=this.constructor.name}get width(){return this._width??this.scale.x*this.getLocalBounds().width}set width(t){this._width=t}get height(){return this._height??this.scale.y*this.getLocalBounds().height}set height(t){this._height=t}resize(t){t&&(this.width=t.w??this.width,this.height=t.h??this.height)}get tmpBounds(){return this._bounds.getRectangle()}}return t.Controller=class{constructor(t){this._view=t,this._binds=new e.BindPool}destroy(){this.disable(),this._binds.destroy(),this._binds=null,this._view=null}enable(){}disable(){}},t.Model=i,t.View=h,Object.defineProperty(t,"__esModule",{value:!0}),t}({},core_pools,PIXI);

/*! Compiled Fri, 12 Nov 2021 09:08:08 UTC */
var core_workers=function(e){"use strict";var r;e.WorkerMessageType=void 0,(r=e.WorkerMessageType||(e.WorkerMessageType={}))[r.SET_DATA=0]="SET_DATA",r[r.ON_START=1]="ON_START",r[r.ON_PROGRESS=2]="ON_PROGRESS",r[r.ON_COMPLETE=3]="ON_COMPLETE",r[r.ON_ERROR=4]="ON_ERROR";class s{constructor(){}destroy(){this._onStart=null,this._onProgress=null,this._onComplete=null,this._onError=null}onStart(e){return this._onStart=e,this}onProgress(e){return this._onProgress=e,this}onComplete(e){return this._onComplete=e,this}onError(e){return this._onError=e,this}start(){this._onStart&&this._onStart()}progress(e){this._onProgress&&this._onProgress(e)}complete(e){this._onComplete&&this._onComplete(e)}error(e){this._onError&&this._onError(e)}}class t{constructor(e,r,s){this.type=e,this.id=r,this.data=s}static onData(r,s){return new t(e.WorkerMessageType.SET_DATA,r,s)}static onStart(r,s){return new t(e.WorkerMessageType.ON_START,r,s)}static onProgress(r,s){return new t(e.WorkerMessageType.ON_PROGRESS,r,s)}static onComplete(r,s){return new t(e.WorkerMessageType.ON_COMPLETE,r,s)}static onError(r,s){return new t(e.WorkerMessageType.ON_ERROR,r,s)}}class o{}class i{constructor(r,s){this._js=r,this._multithreading=s,this._onResponse=this.onWorkerResponse.bind(this),this._handlers=new Map([[e.WorkerMessageType.ON_START,this.onStart.bind(this)],[e.WorkerMessageType.ON_PROGRESS,this.onProgress.bind(this)],[e.WorkerMessageType.ON_COMPLETE,this.onComplete.bind(this)],[e.WorkerMessageType.ON_ERROR,this.onError.bind(this)]]),this._n=0,this._workers=new Array,this.addWorker(),this._taskArray=new Array}destroy(){this.removeAllWorkers()}addTask(e){const r=new s;return this._taskArray.push({id:this.n,data:e,callBacks:r}),setTimeout(this.executeNextTask.bind(this),0),r}cancel(){this._n=0,this.removeAllWorkers(),this.addWorker()}executeNextTask(){if(!this._taskArray.length)return;let e;for(let r=0;r<this._workers.length;r++)if(!this._workers[r].task){e=this._workers[r];break}if(!e&&this._multithreading&&(e=this.addWorker()),e){let r=this._taskArray.shift();e.task={id:r.id,callBacks:r.callBacks},e.worker.postMessage(t.onData(r.id,r.data))}}onWorkerResponse(e){const r=e.data||e,s=this._handlers.get(r.type);if(!s)throw new Error(this.constructor.name+": unknown message received!");s(r.id,r.data)}onStart(e,r){this.getCallBack(e)?.start()}onProgress(e,r){this.getCallBack(e)?.progress(r)}onComplete(e,r){this.getCallBack(e,!0)?.complete(r),this.executeNextTask(),this.removeFreeWorkers()}onError(e,r){this.getCallBack(e)?.error(r),this.removeFreeWorkers()}addWorker(){if(o.current>=o.max&&this._workers.length>0)return null;o.current++;const e=new Worker(this._js);return e.addEventListener("message",this._onResponse),this._workers[this._workers.push({worker:e,task:null})-1]}removeWorker(e){e.worker.removeEventListener("message",this._onResponse),e.worker.terminate(),e?.task?.callBacks.destroy(),o.current--}removeFreeWorkers(){if(!(this._workers.length<=1)&&this._multithreading)for(let e=this._workers.length-1;e>=0&&(this._workers[e].task||(this.removeWorker(this._workers.splice(e,1)[0]),!(this._workers.length<=1)));e--);}removeAllWorkers(){this._taskArray.splice(0,this._taskArray.length),this._workers.forEach((e=>{this.removeWorker(e)})),this._workers.splice(0,this._workers.length)}getCallBack(e,r=!1){for(let s=0;s<this._workers.length;s++)if(this._workers[s].task&&this._workers[s].task.id==e){const e=this._workers[s].task.callBacks;return r&&(this._workers[s].task=null),e}return null}get n(){return this._n<1e3?this._n+=1:this._n=0}}return e.BasicWorker=class{constructor(){this.addLibs(),self.addEventListener("message",this.onMessageReceived.bind(this))}addLibs(){}onData(e,r){}onMessageReceived(r){const s=r.data||r;if(s.type!=e.WorkerMessageType.SET_DATA)throw new Error(this.constructor.name+": unknown message received!");this.onData(s.id,s.data)}},e.WorkerBox=i,e.WorkerCallBack=s,e.WorkerMessage=t,e.Workers=class{static init(e){o.max=e,o.current=0,this._boxMap=new Map,this.addBox("UPNG","js/workers/upng.js",!0),console.log("Workers system initialized.")}static addBox(e,r,s=!1){if(this.isBoxExist(e))throw new Error(this.constructor.name+": box "+e+" already exists!");this._boxMap.set(e,new i(r,s))}static removeBox(e){if(!this.isBoxExist(e))throw new Error(this.constructor.name+": box "+e+" undefined!");this._boxMap.get(e).destroy(),this._boxMap.delete(e)}static cancelBox(e){if(!this.isBoxExist(e))throw new Error(this.constructor.name+": box "+e+" undefined!");this._boxMap.get(e).cancel()}static addTask(e,r){if(!this.isBoxExist(e))throw new Error(this.constructor.name+": box "+e+" undefined!");return this._boxMap.get(e)?.addTask(r)}static isBoxExist(e){return this._boxMap.has(e)}static terminate(){this._boxMap.forEach((e=>{e.destroy()})),this._boxMap.clear(),this._boxMap=null}},e.WorkersQuantity=o,e.startWorker=function(e){new e},Object.defineProperty(e,"__esModule",{value:!0}),e}({});

/*! Compiled Thu, 04 Nov 2021 15:59:03 UTC */
var core_graphics=function(t,e){"use strict";class o{static addColorFilterTo(t,o,r=1){const l=new e.filters.ColorMatrixFilter,a=o>>16&255,i=o>>8&255,c=255&o;l.matrix[0]=a/255,l.matrix[6]=i/255,l.matrix[12]=c/255,l.brightness(r,!0),t.filters=[l]}static mix(t,e=0){if(0==e)return t;e>1?e=1:e<-1&&(e=-1);let o=t>>16,r=t>>8&255,l=255&t;return e>0?(o+=255*e,r+=255*e,l+=255*e,o=o>255?255:o,r=r>255?255:r,l=l>255?255:l):(o*=1+e,r*=1+e,l*=1+e),o<<16|r<<8|l}static colorToString(t,e=1){let o="#"+("000000"+t.toString(16)).substr(-6).toUpperCase();return e<1&&(o+=Math.floor(255*e).toString(16).toUpperCase()),o}static rgbaToString(t){return"#"+(t+4294967296).toString(16).substr(-8).toUpperCase()}}class r extends e.Container{constructor(t,e,o,r=!1){super()}destroy(){}get width(){return super.width}set width(t){this._width=t}}return t.Color=o,t.Draw=class{static roundRectangle(t,e,o,r,l,a,i){t.beginPath(),t.moveTo(l,a+r),t.arcTo(l,a,l+r,a,r),t.lineTo(l+e-r,a),t.arcTo(l+e,a,l+e,a+r,r),t.lineTo(l+e,a+o-r),t.arcTo(l+e,a+o,l+e-r,a+o,r),t.lineTo(l+r,a+o),t.arcTo(l,a+o,l,a+o-r,r),t.lineTo(l,a+r),i&&(i>=r&&(i=r-1),t.lineTo(l+i,a+r),t.lineTo(l+i,a+o-r-i),t.arcTo(l+i,a+o-i,l+i+r,a+o-i,r-i),t.lineTo(l+e-r-i,a+o-i),t.arcTo(l+e-i,a+o-i,l+e-i,a+o-r-i,r-i),t.lineTo(l+e-i,a+r+i),t.arcTo(l+e-i,a+i,l+e-r-i,a+i,r-i),t.lineTo(l+r+i,a+i),t.arcTo(l+i,a+i,l+i,a+r+i,r-i),t.lineTo(l,a+r)),t.closePath(),t.fill()}static glassArcedRoundRectangle(t,e,o,r,l,a,i){i??={c1:"#FFFFFFCC",c2:"#0000004C",c3:"#00000099",c4:"#0000004C",c5:"#FFFFFF2C"};const c=.3,n=.7,d=(e>>1)/(.39999999999999997*o)*(e>>1);t.fillStyle="#00000000",this.roundRectangle(t,e,o,r,l,a),t.clip();let s=t.createLinearGradient(0,a,0,o+a);s.addColorStop(0,i.c1),s.addColorStop(.5,i.c2),t.fillStyle=s,t.beginPath(),t.moveTo(l,a+o*c),t.lineTo(l,a+r),t.arcTo(l,a,l+r,a,r),t.lineTo(l+e-r,a),t.arcTo(l+e,a,l+e,a+r,r),t.lineTo(l+e,a+o*c),t.arcTo(l+e/2,a+o*n,l,a+o*c,d),t.closePath(),t.fill(),s=t.createLinearGradient(0,a,0,o+a),s.addColorStop(c,i.c3),s.addColorStop(.8,i.c4),s.addColorStop(1,i.c5),t.fillStyle=s,t.beginPath(),t.moveTo(l,a+o*c),t.lineTo(l,a+o-r),t.arcTo(l,a+o,l+r,a+o,r),t.lineTo(l+e-r,a+o),t.arcTo(l+e,a+o,l+e,a+o-r,r),t.lineTo(l+e,a+o*c),t.arcTo(l+e/2,a+o*n,l,a+o*c,d),t.closePath(),t.fill(),e>1.2*o?(s=t.createRadialGradient(l+e/2,a+o/2,.6*o,l+e/2,a+o/2,.5*e),s.addColorStop(0,"#00000000"),s.addColorStop(1,i.c3)):(s=t.createLinearGradient(l,0,e+l,0),s.addColorStop(0,i.c3),s.addColorStop(.3,"#00000000"),s.addColorStop(.7,"#00000000"),s.addColorStop(1,i.c3)),t.fillStyle=s,this.roundRectangle(t,e,o,r,l,a)}static glassLinearRoundRectangle(t,e,o,r,l,a,i,c,n){i??=.1,c??=.9,n??={c1:"#FFFFFFCC",c2:"#0000006C",c3:"#0000006C",c4:"#FFFFFF2C"};let d=t.createLinearGradient(0,a,0,o+a);d.addColorStop(0,n.c1),d.addColorStop(i,n.c2),d.addColorStop(c,n.c3),d.addColorStop(1,n.c4),t.fillStyle=d,this.roundRectangle(t,e,o,r,l,a),e>1.2*o?(d=t.createRadialGradient(l+e/2,a+o/2,.6*o,l+e/2,a+o/2,.5*e),d.addColorStop(0,"#00000000"),d.addColorStop(1,"#000000CC")):(d=t.createLinearGradient(l,0,e+l,0),d.addColorStop(0,"#000000CC"),d.addColorStop(.3,"#00000000"),d.addColorStop(.7,"#00000000"),d.addColorStop(1,"#000000CC")),t.fillStyle=d,this.roundRectangle(t,e,o,r,l,a)}static gradientRectBorder(t,e,r,l=1,a=16776960,i=16777215,c=0,n=0){let d=t.createLinearGradient(c,0,e,0);function s(){d.addColorStop(0,o.colorToString(a)),d.addColorStop(.5,o.colorToString(i)),d.addColorStop(1,o.colorToString(a)),t.fillStyle=d}s(),t.fillRect(c,n,e,l),t.fillRect(c,n+r-l,e,l),d=t.createLinearGradient(0,n,0,r),s(),t.fillRect(c,n,l,r),t.fillRect(c+e-l,n,l,r)}static simpleTexture(t,r,l=16711680,a=1){const i=document.createElement("canvas");i.width=t,i.height=r;const c=i.getContext("2d");return c.fillStyle=o.colorToString(l,a),c.fillRect(0,0,t,r),e.Texture.from(i,{scaleMode:e.SCALE_MODES.LINEAR})}static simpleBorderedTexture(t,r,l=16711680,a=1,i=16777215,c=1){const n=document.createElement("canvas");n.width=t,n.height=r;const d=n.getContext("2d");return d.fillStyle=o.colorToString(i),d.fillRect(0,0,t,r),d.clearRect(c,c,t-2*c,r-2*c),d.fillStyle=o.colorToString(l,a),d.fillRect(c,c,t-2*c,r-2*c),e.Texture.from(n,{scaleMode:e.SCALE_MODES.LINEAR})}static gradientBorderedTexture(t,r,l=16711680,a=1,i=16776960,c=16777215,n=1){const d=document.createElement("canvas");d.width=t,d.height=r;const s=d.getContext("2d");return this.gradientRectBorder(s,t,r,n,i,c),s.fillStyle=o.colorToString(l,a),s.fillRect(n,n,t-2*n,r-2*n),e.Texture.from(d,{scaleMode:e.SCALE_MODES.LINEAR})}},t.Tiling2Caps=r,Object.defineProperty(t,"__esModule",{value:!0}),t}({},PIXI);

/*! Compiled Sun, 31 Oct 2021 15:17:21 UTC */
var core_utils=function(e){"use strict";return e.addPixiEnvironment=function(){globalThis.window=self,globalThis.document={createElement:()=>({getContext:()=>({fillRect(){},drawImage(){},getImageData(){}})})}},e.getFileFolder=function(e){return e.indexOf("/")?e.substring(0,e.lastIndexOf("/")+1):""},Object.defineProperty(e,"__esModule",{value:!0}),e}({});

/*! Compiled Thu, 04 Nov 2021 11:45:13 UTC */
var core_assets=function(s,t,e,a,i,r){"use strict";class o{constructor(s){this.id=s,this.map=new Map}clear(){this.map.forEach((s=>{s.clear()}))}add(s){if(this.map.has(s.id))throw new Error('AssetList "'+this.id+'" already contains asset "'+s.id+'" !');this.map.set(s.id,s)}get(s){const t=this.map.get(s);if(!t)throw new Error('Asset "'+s+'" not found in "'+this.id+'" !');return t}}class n{constructor(s,t){this.id=s,this._source=t?{url:t}:null,this.init()}clear(){this._data=null}get source(){return this._source}get data(){return this._data}set data(s){this._data=s}init(){this._source&&(this._source.xhr=e.LoaderResource.XHR_RESPONSE_TYPE.DEFAULT)}}class d extends n{init(){this._source.url&&(this._source.xhr=e.LoaderResource.XHR_RESPONSE_TYPE.BUFFER)}}class h extends d{}var l;!function(s){s.JSON="json",s.TEXTURE="texture",s.SPRITESHEET="spritesheet",s.SOUND="sound",s.TEXT="text",s.ZIP="zip"}(l||(l={}));class c extends t.Task{constructor(s,t,e,a){super(s),this._zip=t,this._params=e,this._map=a}destroy(){this._zip=null,this._params=null,this._map=null,super.destroy()}execute(){super.execute(),this.unpack()}unpack(){this._zip.file(this._params.file).async("string").then(this.onUnpacked.bind(this))}onUnpacked(s){const t=new n(this._params.id);t.data=this._params.type==l.JSON?JSON.parse(s):s,this.getList().add(t),this.success()}getList(){let s;return this._params.list?(s=this._map.get(this._params.list),s||(s=new o(this._params.list),this._map.set(s.id,s))):s=this._map.get("Default"),s}}class u extends n{clear(){this._data.destroy(),super.clear()}}class p extends c{destroy(){this._json=null,super.destroy()}unpack(){"json"==this._params.file.split(".")[1]?this._zip.file(this._params.file).async("string").then(this.onUnpacked.bind(this)):this._zip.file(this._params.file).async("arraybuffer").then(this.onUnpacked.bind(this))}onUnpacked(s){s instanceof ArrayBuffer?this.addAssetAndComplete(a.Sound.from(s)):(this._json=JSON.parse(s),this._zip.file(i.getFileFolder(this._params.file)+this._json.sound).async("arraybuffer").then(this.onSound.bind(this)))}onSound(s){const t=a.Sound.from(s);t.addSprites(this._json.sprites),this.addAssetAndComplete(t)}addAssetAndComplete(s){const t=new u(this._params.id);t.data=s,this.getList().add(t),this.success()}}class _ extends n{clear(){this._data.destroy(!0),super.clear()}}class m extends c{destroy(){this._json=null,this._sheet=null,super.destroy()}onUnpacked(s){this._json=JSON.parse(s),this._zip.file(i.getFileFolder(this._params.file)+this._json.meta.image).async("arraybuffer").then(this.onTexture.bind(this))}onTexture(s){r.Workers.isBoxExist("UPNG")?r.Workers.addTask("UPNG",s).onComplete(this.onPNGUncompress.bind(this)):this.onPNGUncompress(UPNG.toRGBA8(UPNG.decode(s))[0])}onPNGUncompress(s){this._sheet=new e.Spritesheet(e.Texture.fromBuffer(new Uint8Array(s),this._json.meta.size.w,this._json.meta.size.h,{scaleMode:e.SCALE_MODES.LINEAR,mipmap:e.MIPMAP_MODES.ON}),this._json),this._sheet.parse(this.onParse.bind(this))}onParse(){const s=new _(this._params.id);s.data=this._sheet,this.getList().add(s),this.success()}}class f extends n{clear(){this._data.destroy(!0),super.clear()}}class A extends c{unpack(){this._zip.file(this._params.file).async("arraybuffer").then(this.onUnpacked.bind(this))}onUnpacked(s){r.Workers.isBoxExist("UPNG")?r.Workers.addTask("UPNG",s).onComplete(this.onPNGUncompress.bind(this)):this.onPNGUncompress(UPNG.toRGBA8(UPNG.decode(s))[0])}onPNGUncompress(s){const t=new f(this._params.id);t.data=e.Texture.fromBuffer(new Uint8Array(s),this._params.data.w,this._params.data.h,{scaleMode:e.SCALE_MODES.LINEAR,mipmap:e.MIPMAP_MODES.ON}),this.getList().add(t),this.success()}}class k extends t.Task{constructor(s,t,e){super(s),this._bundle=t,this._map=e}destroy(){this._bundle=null,this._map=null,this._taskPool=null,this._zip=null,super.destroy()}execute(){super.execute(),(new JSZip).loadAsync(this._bundle.data).then((s=>{(this._zip=s).file("bundle.json").async("string").then(this.onBundleListUnpacked.bind(this))}))}onBundleListUnpacked(s){const e=JSON.parse(s),a=(e.version,e.files);this._taskPool=new t.TaskPool(!1,!0),a.forEach((s=>{switch(s.type){default:this._taskPool.add(new c("Unpack String: "+s.id,this._zip,s,this._map));break;case l.TEXTURE:this._taskPool.add(new A("Unpack Texture: "+s.id,this._zip,s,this._map));break;case l.SPRITESHEET:this._taskPool.add(new m("Unpack Spritesheet: "+s.id,this._zip,s,this._map));break;case l.SOUND:this._taskPool.add(new p("Unpack Sound: "+s.id,this._zip,s,this._map))}})),this._taskPool.execute(this.onAssetsUnpacked.bind(this),this._onProgress)}onAssetsUnpacked(){this.success()}}class g extends t.Task{constructor(s,t){super(s),this._map=t}destroy(){this._map=null,this._loadableArray.forEach((s=>{null})),this._loadableArray=null,this._bundlesArray=null}execute(){super.execute(),this._unpackedBundlesNum=0,this._loadableArray=new Array,this._bundlesArray=new Array,this.findAssets(),this._onLoadCompleteID=e.Loader.shared.onComplete.add(this.onLoadComplete,this),this._onLoadProgressID=e.Loader.shared.onProgress.add(this.onLoadProgress,this),this._onLoadErrorID=e.Loader.shared.onError.add(this.onLoadError,this),e.Loader.shared.load()}findAssets(){this._map.forEach((s=>{s.map.forEach((t=>{!t.data&&t.source&&(this._loadableArray.push({asset:t,listID:s.id}),e.Loader.shared.add(t.id,t.source.url,{xhrType:t.source.xhr}),t instanceof h&&this._bundlesArray.push(t))}))}))}onLoadComplete(){this.deattachListeners(),this._loadableArray.forEach((s=>{this._map.get(s.listID).get(s.asset.id).data=e.Loader.shared.resources[s.asset.id].data})),e.Loader.shared.reset(),this._unpackBundlesTaskPool=new t.TaskPool,this._bundlesArray.forEach((s=>{this._unpackBundlesTaskPool.add(new k("Unpack Bundle "+s.id,s,this._map).onProgress(this.onBundleProgress.bind(this)))})),this._unpackBundlesTaskPool.execute(this.onUnpackComplete.bind(this),this.onUnpackProgress.bind(this))}onLoadProgress(){this._onProgress&&this._onProgress({action:"loading: "+e.Loader.shared.progress+" %",value:e.Loader.shared.progress})}onLoadError(s){this.deattachListeners(),this.failed(s.message)}onUnpackProgress(s){this._unpackedBundlesNum=s.done,this._onProgress&&this._onProgress({taskID:s.id,action:"unpacked bundles: "+s.done+" / "+s.total,value:s.done/s.total*100})}onBundleProgress(s){this._onProgress&&this._onProgress({taskID:s.id,action:"unpacking bundle "+(this._unpackedBundlesNum+1)+"/"+this._bundlesArray.length+": asset "+s.done+"/"+s.total,value:100*(this._unpackedBundlesNum/this._bundlesArray.length+s.done/s.total/this._bundlesArray.length)})}onUnpackComplete(){this._unpackBundlesTaskPool.destroy(),this.success(null)}deattachListeners(){e.Loader.shared.onComplete.detach(this._onLoadCompleteID),e.Loader.shared.onProgress.detach(this._onLoadProgressID),e.Loader.shared.onError.detach(this._onLoadErrorID)}}class P extends g{constructor(s,t,e){super(s,t),this._listID=e}destroy(){this._listID=null,super.destroy()}findAssets(){const s=this._map.get(this._listID);if(!s)throw new Error(this.constructor.name+": AssetList "+this._listID+" undefined!");s.map.forEach((s=>{!s.data&&s.source&&(this._loadableArray.push({asset:s,listID:this._listID}),e.Loader.shared.add(s.id,s.source.url,{xhrType:s.source.xhr}),s instanceof h&&this._bundlesArray.push(s))}))}}class L extends P{constructor(s,t,e,a){super(s,t,e),this._assetID=a}destroy(){this._assetID=null,super.destroy()}findAssets(){const s=this._map.get(this._listID);if(!s)throw new Error(this.constructor.name+": AssetList "+this._listID+" undefined!");const t=s.get(this._assetID);if(!t)throw new Error(this.constructor.name+": Asset "+t.id+" undefined!");!t.data&&t.source&&(this._loadableArray.push({asset:t,listID:this._listID}),e.Loader.shared.add(t.id,t.source.url,{xhrType:t.source.xhr}),t instanceof h&&this._bundlesArray.push(t))}}class E{static init(s=10,t){this.addLists(this.DEFAULT_LIST),e.Loader.shared.concurrency=s,console.log("Assets system initialized.")}static addLists(...s){s.forEach((s=>{if(this._map.has(s.id))throw new Error(this.name+": AssetList "+s.id+" already exist!");this._map.set(s.id,s)}))}static addAssets(s,...t){const e=this.getList(s);if(!e)throw new Error(this.name+": AssetList "+s+" undefined!");t.forEach((s=>{e.add(s)}))}static getList(s){const t=this._map.get(s);if(!t)throw new Error('AssetList "'+s+'" not found!');return t}static getAsset(s,t){return t?this.getList(t).get(s):this.DEFAULT_LIST.get(s)}static clear(...s){let t;s.length||this._map.forEach((s=>{s.clear()})),s.forEach((s=>{if(t=this._map.get(s.listID),!t)throw new Error(this.name+": AssetList "+s.listID+" undefined!");s.assetsID?s.assetsID.forEach((s=>{t.get(s).clear()})):t.clear()}))}static load(...s){let t;return s.length?(s.forEach((s=>{s.assetsID?s.assetsID.forEach((e=>{t=new L("LoadAsset "+e+" from "+s.listID,this._map,s.listID,e),setTimeout(this._taskPool.add.bind(this._taskPool),0,t)})):(t=new P("LoadList "+s.listID,this._map,s.listID),setTimeout(this._taskPool.add.bind(this._taskPool),0,t))})),t):(t=new g("LoadTask",this._map),setTimeout(this._taskPool.add.bind(this._taskPool),0,t),t)}static remove(...s){let t;s.length||this._map.forEach((s=>{this._map.delete(s.id)})),s.forEach((s=>{if(t=this._map.get(s.listID),!t)throw new Error(this.name+": AssetList "+s.listID+" undefined!");s.assetsID?s.assetsID.forEach((s=>{t.map.delete(s)})):this._map.delete(s.listID)}))}static get map(){return this._map}static texture(s,t){return this.getAsset(s,t).data}static spritesheet(s,t){return this.getAsset(s,t).data}static sound(s,t){return this.getAsset(s,t).data}static json(s,t){return JSON.parse(this.getAsset(s,t).data)}static text(s,t){return this.getAsset(s,t).data}static zip(s,t){return this.getAsset(s,t).data}}E.DEFAULT_LIST=new o("Default"),E._map=new Map,E._taskPool=new t.TaskPool(!0);return s.Asset=n,s.AssetBundle=h,s.AssetList=o,s.Assets=E,s.SVGAsset=class extends n{clear(){this._data.destroy(),super.clear()}},s.SoundAsset=u,s.SpriteSheetAsset=_,s.TextureAsset=f,s.ZipAsset=d,Object.defineProperty(s,"__esModule",{value:!0}),s}({},core_pools,PIXI,PIXI.sound,core_utils,core_workers);

/*! Compiled Fri, 12 Nov 2021 09:03:07 UTC */

var core_ui = (function (exports, graphics, pixiFilters, pixi_js, mvc, pixiTweener, workers, pools) {
	'use strict';

	class UiComponent extends mvc.View {
	    constructor(input) {
	        super();
	        this._input = input;
	        this.init();
	    }
	    resize(size) {
	        if (!size)
	            return;
	        this._width = this._input.width = size.w ?? this._width;
	        this._height = this._input.height = size.h ?? this._height;
	    }
	    get width() {
	        return super.width;
	    }
	    set width(value) {
	        this.resize({ w: value });
	    }
	    get height() {
	        return super.height;
	    }
	    set height(value) {
	        this.resize({ h: value });
	    }
	    show() {
	        this.visible = true;
	    }
	    hide() {
	        this.visible = false;
	    }
	    activate() {
	        this.interactive = true;
	    }
	    deactivate() {
	        this.interactive = false;
	    }
	    reset() {
	    }
	    init() {
	        this.defaults();
	    }
	    defaults() {
	        this._width = this._input.width ??= 200;
	        this._height = this._input.height ??= 50;
	        this._input.color ??= 0x7777FF;
	    }
	}

	class Label extends UiComponent {
	    constructor(input) {
	        super(input);
	        this.interactive = this.interactiveChildren = false;
	    }
	    destroy() {
	        super.destroy();
	        this._field.destroy({ texture: true, baseTexture: true });
	        this._style = null;
	    }
	    resize(size) {
	        super.resize(size);
	        this.updateHiddenLine();
	    }
	    reset() {
	        this.text = '';
	    }
	    get text() {
	        return this._text;
	    }
	    set text(value) {
	        this._field.text = this._text = value;
	        if (value.length <= this._line.length && value.indexOf('\n') == -1)
	            this.toSingleline();
	        else
	            this.toMultiline();
	    }
	    get style() {
	        return this._field.style;
	    }
	    set style(value) {
	        this._style = value;
	        this._field.style = this._style;
	        this.updateHiddenLine();
	    }
	    get textWidth() {
	        return this._field.width;
	    }
	    get textHeight() {
	        return this._textHeight;
	    }
	    init() {
	        super.init();
	        this.createDefaultStyle();
	        this._field = new pixi_js.Text(this._text = '', this._style);
	        this.addChild(this._field);
	        this.updateHiddenLine();
	        if (this._input.style)
	            this.style = { ...this.style, ...this._input.style };
	        if (this._input.text)
	            this.text = this._input.text;
	    }
	    updateHiddenLine() {
	        this._field.text = this._line = '';
	        const b = this.style.wordWrap;
	        this.style.wordWrap = this.style.breakWords = false;
	        const dots = 25;
	        this._field.text = '.'.repeat(dots);
	        this._line = '\n' + ' '.repeat(Math.floor(this._input.width / (this._field.width / dots)));
	        this.style.wordWrap = this.style.breakWords = b;
	        this.text = this._text;
	    }
	    createDefaultStyle() {
	        this._style = {
	            fontFamily: "Consolas",
	            fontStyle: "italic",
	            fontSize: 20,
	            align: "center",
	            stroke: graphics.Color.mix(this._input.color, -0.75),
	            strokeThickness: 2,
	            fillGradientType: pixi_js.TEXT_GRADIENT.LINEAR_VERTICAL,
	            fillGradientStops: [0, 1],
	            fill: [0xFFFFFF, this._input.color],
	            lineJoin: "round"
	        };
	    }
	    toMultiline() {
	        this.style.wordWrapWidth = this._input.width;
	        this.style.wordWrap = this.style.breakWords = true;
	        this._textHeight = this._field.height;
	    }
	    toSingleline() {
	        this.style.wordWrap = this.style.breakWords = false;
	        this._field.text += this._line;
	        this._textHeight = this._field.height >> 1;
	    }
	}

	class ProgressBar extends UiComponent {
	    constructor(input) {
	        super(input);
	    }
	    destroy() {
	        this._background.destroy({ texture: true, baseTexture: true });
	        this._tiledFill.destroy({ texture: true, baseTexture: true });
	        this._fillMask.destroy({ texture: true, baseTexture: true });
	        this._info.destroy();
	        this._style = null;
	    }
	    reset() {
	        this._fillMask.scale.x = 0.0;
	    }
	    showProgress(data) {
	        if (data.progress)
	            this._fillMask.scale.x = data.progress;
	        if (data.info)
	            this._info.text = data.info;
	    }
	    showError(message) {
	        if (this._info)
	            this._info.text = message;
	    }
	}

	class CodeProgressBar extends ProgressBar {
	    destroy() {
	        super.destroy();
	        this.deactivate();
	        this._barLight.destroy({ texture: true, baseTexture: true });
	    }
	    show() {
	        super.show();
	        this.activate();
	    }
	    hide() {
	        super.hide();
	        this.deactivate();
	    }
	    showProgress(data) {
	        super.showProgress(data);
	    }
	    showError(message) {
	        this._info.style.fill = [0xFF0000, 0xFFFFFF];
	        this._info.text = message;
	        this._info.filters = [new pixiFilters.GlowFilter({ distance: 20, color: 0xFF0000, quality: 0.25, outerStrength: 1 })];
	    }
	    activate() {
	        super.activate();
	        pixi_js.Ticker.shared.add(this.onTicker, this);
	    }
	    deactivate() {
	        super.deactivate();
	        pixi_js.Ticker.shared.remove(this.onTicker, this);
	        pixi_js.Ticker.shared.remove(this.onLightTicker, this);
	    }
	    reset() {
	        super.reset();
	        this._barLight.x = 5 - this._input.width * 2;
	        this._lightDelay = 9;
	    }
	    init() {
	        let canvas;
	        let context;
	        let gradient;
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width;
	        canvas.height = this._input.height;
	        context = canvas.getContext('2d');
	        context.fillStyle = graphics.Color.colorToString(this._input.color);
	        context.fillRect(0, 0, this._input.width, this._input.height);
	        gradient = context.createLinearGradient(0, 0, 0, this._input.height);
	        gradient.addColorStop(0.0, "#FFFFFF7F");
	        gradient.addColorStop(0.49, "#00000080");
	        gradient.addColorStop(0.5, "#000000CC");
	        gradient.addColorStop(1.0, "#0000007F");
	        context.fillStyle = gradient;
	        context.beginPath();
	        context.moveTo(0, 0);
	        context.lineTo(this._input.width, 0);
	        context.lineTo(this._input.width, this._input.height);
	        context.lineTo(this._input.width - 3, this._input.height - 3);
	        context.lineTo(this._input.width - 3, 3);
	        context.lineTo(3, 3);
	        context.lineTo(0, 0);
	        context.closePath();
	        context.fill();
	        context.beginPath();
	        context.moveTo(0, 0);
	        context.lineTo(0, this._input.height);
	        context.lineTo(this._input.width, this._input.height);
	        context.lineTo(this._input.width - 3, this._input.height - 3);
	        context.lineTo(3, this._input.height - 3);
	        context.lineTo(3, 3);
	        context.lineTo(0, 0);
	        context.closePath();
	        context.fill();
	        gradient = context.createLinearGradient(0, 0, this._input.width, 0);
	        gradient.addColorStop(0.0, "#FFFFFF00");
	        gradient.addColorStop(0.5, "#FFFFFFC8");
	        gradient.addColorStop(1.0, "#FFFFFF00");
	        context.fillStyle = gradient;
	        context.fillRect(0, 0, this._input.width, 3);
	        gradient = context.createLinearGradient(0, 0, this._input.width, 0);
	        gradient.addColorStop(0.0, "#FFFFFF00");
	        gradient.addColorStop(0.5, "#FFFFFF7F");
	        gradient.addColorStop(1.0, "#FFFFFF00");
	        context.fillStyle = gradient;
	        context.fillRect(0, this._input.height - 3, this._input.width, 3);
	        gradient = context.createLinearGradient(0, 0, 0, this._input.height - 6);
	        gradient.addColorStop(0.0, "#000000FF");
	        gradient.addColorStop(1.0, "#000000CC");
	        context.fillStyle = gradient;
	        context.fillRect(3, 3, this._input.width - 6, this._input.height - 6);
	        this._background = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this.addChild(this._background);
	        this.getBounds(true);
	        const w = this._input.width / 10;
	        const h = this._input.height - 10;
	        canvas = document.createElement('canvas');
	        canvas.width = w;
	        canvas.height = h;
	        context = canvas.getContext('2d');
	        context.fillStyle = graphics.Color.colorToString(this._input.color);
	        context.fillRect(0, 0, w, h);
	        gradient = context.createLinearGradient(0, 0, 0, h);
	        gradient.addColorStop(0.0, "#FFFFFFCC");
	        gradient.addColorStop(0.49, "#FFFFFF00");
	        gradient.addColorStop(0.5, "#0000007F");
	        gradient.addColorStop(0.75, "#0000007F");
	        gradient.addColorStop(1.0, "#00000033");
	        context.fillStyle = gradient;
	        context.beginPath();
	        context.moveTo(0, 0);
	        context.lineTo(w / 2, 0);
	        context.lineTo(0, h);
	        context.lineTo(0, 0);
	        context.closePath();
	        context.fill();
	        context.beginPath();
	        context.moveTo(w, 0);
	        context.lineTo(w, h);
	        context.lineTo(w / 2, h);
	        context.lineTo(w, 0);
	        context.closePath();
	        context.fill();
	        gradient = context.createLinearGradient(0, 0, 0, h);
	        gradient.addColorStop(0.0, "#FFFFFFCC");
	        gradient.addColorStop(0.49, "#0000004C");
	        gradient.addColorStop(0.5, "#00000099");
	        gradient.addColorStop(0.75, "#00000099");
	        gradient.addColorStop(1.0, "#0000004C");
	        context.fillStyle = gradient;
	        context.beginPath();
	        context.moveTo(w / 2, 0);
	        context.lineTo(w, 0);
	        context.lineTo(w / 2, h);
	        context.lineTo(0, h);
	        context.lineTo(w / 2, 0);
	        context.closePath();
	        context.fill();
	        this._tiledFill = new pixi_js.TilingSprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }), this._input.width + w, h);
	        this.addChild(this._tiledFill);
	        this._tiledFill.x = -this._input.width / 10;
	        this._tiledFill.y = 5;
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width * 2;
	        canvas.height = this._input.height - 10;
	        context = canvas.getContext('2d');
	        gradient = context.createLinearGradient(0, 0, this._input.width * 2, 0);
	        gradient.addColorStop(0.0, "#FFFFFF00");
	        gradient.addColorStop(0.4, "#FFFFFF44");
	        gradient.addColorStop(0.5, "#FFFFFF22");
	        gradient.addColorStop(0.9, "#FFFFFF88");
	        gradient.addColorStop(1.0, "#FFFFFF00");
	        context.fillStyle = gradient;
	        context.fillRect(0, 0, this._input.width * 2, this._input.height - 10);
	        this._barLight = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this.addChild(this._barLight);
	        this._barLight.x = 5 - this._input.width * 2;
	        this._barLight.y = 5;
	        const fg = new pixiFilters.GlowFilter({ distance: 30, color: graphics.Color.mix(this._input.color, 0.5), quality: 0.05, outerStrength: 1 });
	        this._barLight.filters = [fg];
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width - 10;
	        canvas.height = this._input.height - 10;
	        context = canvas.getContext('2d');
	        context.fillStyle = '#FF0000';
	        context.fillRect(0, 0, this._input.width - 10, this._input.height - 10);
	        this._fillMask = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this.addChild(this._fillMask);
	        this._fillMask.x = 5;
	        this._fillMask.y = 5;
	        this._fillMask.scale.x = 0.0;
	        this._tiledFill.mask = this._fillMask;
	        this._barLight.mask = this._fillMask;
	        this._info = new Label({ color: this._input.color, width: 800 });
	        this.addChild(this._info);
	        this._info.x = (Math.min(this._input.width, this._info._bounds.getRectangle().width) -
	            Math.max(this._input.width, this._info._bounds.getRectangle().width)) / 2;
	        this._info.y = -25;
	        this._info.filters = [new pixiFilters.GlowFilter({ distance: 20, color: this._input.color, quality: 0.25, outerStrength: 1 })];
	    }
	    onTicker() {
	        this._tiledFill.x += 1;
	        if (this._tiledFill.x >= 0) {
	            this._tiledFill.x = -this._input.width / 10;
	            this._lightDelay++;
	        }
	        if (this._lightDelay >= 10) {
	            this._lightDelay = 0;
	            this._barLight.x = 5 - this._input.width * 2;
	            pixi_js.Ticker.shared.add(this.onLightTicker, this);
	        }
	    }
	    onLightTicker() {
	        this._barLight.x += 10;
	        if (this._barLight.x >= 5 + this._input.width * 2)
	            pixi_js.Ticker.shared.remove(this.onLightTicker, this);
	    }
	}

	class Button extends UiComponent {
	    constructor(input) {
	        super(input);
	        this.label = { text: input.text };
	        if (input.icon)
	            this.icon = input.icon;
	    }
	    destroy() {
	        this.off('mouseover', this.onOver)
	            .off('mouseout', this.onOut)
	            .off('mousedown', this.onPress)
	            .off('touchstart', this.onPress)
	            .off('mouseup', this.onRelease)
	            .off('mouseupoutside', this.onRelease)
	            .off('touchend', this.onRelease)
	            .off('touchendoutside', this.onRelease);
	        if (this._normal)
	            this._normal.destroy();
	        this._normal = null;
	        if (this._over)
	            this._over.destroy();
	        this._over = null;
	        if (this._down)
	            this._down.destroy();
	        this._down = null;
	        if (this._label)
	            this._label.destroy();
	        this._label = null;
	        if (this._icon)
	            this._icon.destroy();
	        this._icon = null;
	        if (this._soundOver)
	            this._soundOver.destroy();
	        this._soundOver = null;
	        if (this._soundDown)
	            this._soundDown.destroy();
	        this._soundDown = null;
	    }
	    resize(size) {
	        super.resize(size);
	        this.resizeStates();
	        this.resizeLabelAndIcon();
	    }
	    get label() {
	        if (!this._label)
	            return null;
	        return { text: this._label.text, style: this._label.style };
	    }
	    set label(value) {
	        if (!value.text && !value.style)
	            return;
	        if (!this._label) {
	            this._label = new Label({ color: 0xFFFFFF, width: this._input.width - 10 });
	            this.addChildAt(this._label, this.children.length);
	            this._label.style = {
	                ...this._label.style,
	                fontSize: Math.floor(this._input.height / 2),
	                dropShadow: true,
	                dropShadowAlpha: 0.75,
	                dropShadowAngle: 1.5,
	                dropShadowBlur: 4,
	                dropShadowColor: 0x000000,
	                dropShadowDistance: 4
	            };
	        }
	        if (value.style)
	            this._label.style = { ...this._label.style, ...value.style };
	        if (value.text)
	            this._label.text = value.text;
	        this._label.x = value.x ? value.x : (this._input.width - this._label.textWidth) >> 1;
	        this._label.y = value.y ? value.y : (this._input.height - this._label.textHeight) >> 1;
	    }
	    get icon() {
	        return this._icon;
	    }
	    set icon(value) {
	        if (this._icon)
	            this._icon.destroy();
	        this._icon = value;
	        this.addChildAt(this._icon, this.children.length);
	    }
	    get normal() {
	        return this._normal;
	    }
	    set normal(value) {
	        if (this._normal)
	            this._normal.destroy();
	        this._normal = value;
	        this.addChild(this._normal);
	    }
	    get over() {
	        return this._over;
	    }
	    set over(value) {
	        if (this._over)
	            this._over.destroy();
	        this._over = value;
	        this.addChild(this._over);
	        this._over.visible = false;
	    }
	    get down() {
	        return this._down;
	    }
	    set down(value) {
	        if (this._down)
	            this._down.destroy();
	        this._down = value;
	        this.addChild(this._down);
	        this._down.visible = false;
	    }
	    get soundOver() {
	        return this._soundOver;
	    }
	    set soundOver(value) {
	        if (this._soundOver)
	            this._soundOver.destroy();
	        this._soundOver = value;
	    }
	    get soundDown() {
	        return this._soundDown;
	    }
	    set soundDown(value) {
	        if (this._soundDown)
	            this._soundDown.destroy();
	        this._soundDown = value;
	    }
	    init() {
	        super.init();
	        this.buttonMode = true;
	        this.on('mouseover', this.onOver)
	            .on('mouseout', this.onOut)
	            .on('mousedown', this.onPress)
	            .on('touchstart', this.onPress)
	            .on('mouseup', this.onRelease)
	            .on('mouseupoutside', this.onRelease)
	            .on('touchend', this.onRelease)
	            .on('touchendoutside', this.onRelease);
	        this.activate();
	    }
	    resizeStates() {
	        this._normal.width = this._input.width;
	        this._normal.height = this._input.height;
	        if (this._over) {
	            this._over.width = this._input.width;
	            this._over.height = this._input.height;
	        }
	        if (this._down) {
	            this._down.width = this._input.width;
	            this._down.height = this._input.height;
	        }
	    }
	    resizeLabelAndIcon() {
	        if (this._label && !this._icon) {
	            this._label.resize({ w: this._input.width, h: this._input.height });
	            this._label.x = (this._input.width - this._label.textWidth) >> 1;
	            this._label.y = (this._input.height - this._label.textHeight) >> 1;
	        }
	        if (this._icon && !this._label) {
	        }
	        if (this._label && this._icon) {
	        }
	    }
	    onPress(event) {
	        event.stopPropagation();
	        if (this._down) {
	            this._normal.visible = false;
	            this._down.visible = true;
	        }
	        if (this._over)
	            this._over.visible = false;
	        if (this._soundDown)
	            this._soundDown.play();
	    }
	    onRelease(event) {
	        event.stopPropagation();
	        if (this._isOver) {
	            if (this._over)
	                this._over.visible = true;
	        }
	        else
	            this._normal.visible = true;
	        if (this._down)
	            this._down.visible = false;
	    }
	    onOver(event) {
	        event.stopPropagation();
	        if (this._over) {
	            this._normal.visible = false;
	            this._over.visible = true;
	        }
	        this._isOver = true;
	        if (this._soundOver)
	            this._soundOver.play();
	    }
	    onOut(event) {
	        event.stopPropagation();
	        this._normal.visible = true;
	        if (this._over)
	            this._over.visible = false;
	        this._isOver = false;
	    }
	}

	class CodeButton extends Button {
	    destroy() {
	        this.clear();
	        super.destroy();
	    }
	    init() {
	        super.init();
	        this.draw();
	    }
	    defaults() {
	        super.defaults();
	        this._input.radius ??= 10;
	        this._input.alpha ??= 0.5;
	    }
	    resizeStates() {
	        this.clear();
	        this.draw();
	        if (this._icon)
	            this.setChildIndex(this._icon, this.children.length - 1);
	        if (this._label)
	            this.setChildIndex(this._label, this.children.length - 1);
	    }
	    draw() {
	        let canvas;
	        let context;
	        let gradient;
	        let radius = Math.min(this._input.width >> 1, this._input.height >> 1, this._input.radius);
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width;
	        canvas.height = this._input.height;
	        context = canvas.getContext('2d');
	        gradient = context.createLinearGradient(0, 0, 0, this._input.height);
	        gradient.addColorStop(0.0, "#DDDDDD");
	        gradient.addColorStop(0.4, "#FFFFFF");
	        gradient.addColorStop(0.5, "#000000");
	        gradient.addColorStop(1.0, "#777777");
	        context.fillStyle = gradient;
	        graphics.Draw.roundRectangle(context, this._input.width, this._input.height, radius, 0, 0, 4);
	        gradient = context.createLinearGradient(0, 3, 0, this._input.height - 6);
	        gradient.addColorStop(0.0, "#000000");
	        gradient.addColorStop(0.1, "#FFFFFF");
	        gradient.addColorStop(0.9, "#000000");
	        gradient.addColorStop(1.0, "#FFFFFF");
	        context.fillStyle = gradient;
	        graphics.Draw.roundRectangle(context, this._input.width - 6, this._input.height - 6, radius - 3, 3, 3, 1);
	        context.fillStyle = graphics.Color.colorToString(this._input.color, this._input.alpha);
	        graphics.Draw.roundRectangle(context, this._input.width - 8, this._input.height - 8, radius - 4, 4, 4);
	        this._background = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this.addChild(this._background);
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width;
	        canvas.height = this._input.height;
	        context = canvas.getContext('2d');
	        graphics.Draw.glassArcedRoundRectangle(context, this._input.width - 8, this._input.height - 8, radius - 4, 4, 4);
	        this._normal = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this._normal.x = 0;
	        this._normal.y = 0;
	        this.addChild(this._normal);
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width;
	        canvas.height = this._input.height;
	        context = canvas.getContext('2d');
	        graphics.Draw.glassArcedRoundRectangle(context, this._input.width - 8, this._input.height - 8, radius - 4, 4, 4, { c1: "#FFFFFFCC", c2: "#0000002C", c3: "#00000066", c4: "#0000002C", c5: "#FFFFFF40" });
	        this._over = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this._over.x = 0;
	        this._over.y = 0;
	        this.addChild(this._over);
	        this._over.visible = false;
	        canvas = document.createElement('canvas');
	        canvas.width = this._input.width;
	        canvas.height = this._input.height;
	        context = canvas.getContext('2d');
	        graphics.Draw.glassLinearRoundRectangle(context, this._input.width - 8, this._input.height - 8, radius - 4, 4, 4, 0.1, 0.9);
	        this._down = new pixi_js.Sprite(pixi_js.Texture.from(canvas, { scaleMode: pixi_js.SCALE_MODES.LINEAR }));
	        this._down.x = 0;
	        this._down.y = 0;
	        this.addChild(this._down);
	        this._down.visible = false;
	        canvas = null;
	        context = null;
	        gradient = null;
	    }
	    clear() {
	        this._background.destroy({ texture: true, baseTexture: true });
	        this._background = null;
	        this._normal.destroy({ texture: true, baseTexture: true });
	        this._normal = null;
	        this._over.destroy({ texture: true, baseTexture: true });
	        this._over = null;
	        this._down.destroy({ texture: true, baseTexture: true });
	        this._down = null;
	    }
	}

	class Preloader extends UiComponent {
	    constructor(input) {
	        super(input);
	    }
	    destroy() {
	        super.destroy();
	        this._background.destroy({ texture: true, baseTexture: true });
	        this._bar.destroy();
	    }
	    resize(size) {
	        this._background.width = size?.w;
	        this._background.height = size?.h;
	    }
	    show() {
	        super.show();
	        this._bar.activate();
	    }
	    hide() {
	        super.hide();
	        this._bar.reset();
	        this._bar.deactivate();
	    }
	    showProgress(data) {
	        this._bar.showProgress(data);
	    }
	    showError(message) {
	        this._bar.showError(message);
	    }
	    showTip(text) {
	    }
	    showBackground(texture) {
	        if (this._background)
	            this._background.destroy({ texture: true, baseTexture: true });
	        if (texture) {
	            this._background = new pixi_js.Sprite(texture);
	        }
	        else {
	            const canvas = document.createElement('canvas');
	            const size = 8;
	            canvas.width = size;
	            canvas.height = size;
	            const context = canvas.getContext('2d');
	            context.fillStyle = '#000000CC';
	            context.fillRect(0, 0, size, size);
	            this._background = new pixi_js.Sprite(pixi_js.Texture.from(canvas));
	        }
	        this._background.width = this._input.width;
	        this._background.height = this._input.height;
	        this.addChildAt(this._background, 0);
	    }
	    setSound(sound) {
	    }
	    init() {
	        this.showBackground();
	        this.getBounds(true);
	    }
	}

	class CodePreloader extends Preloader {
	    resize(size) {
	        super.resize(size);
	        this._bar.x = (size.w - this._bar._bounds.getRectangle().width) / 2;
	        this._bar.y = (size.h - this._bar._bounds.getRectangle().height) / 2;
	    }
	    init() {
	        super.init();
	        this._bar = new CodeProgressBar({ color: this._input.color, width: 400, height: 30 });
	        this.addChild(this._bar);
	        this._bar.x = (this._input.width - this._bar._bounds.getRectangle().width) / 2;
	        this._bar.y = (this._input.height - this._bar._bounds.getRectangle().height) / 2;
	    }
	}

	class MapPool extends Map {
	    destroy() {
	        this.forEach(element => {
	            if (element.destroy)
	                element.destroy();
	        });
	        this.clear();
	    }
	    set(id, object) {
	        if (super.has(id))
	            throw new Error(this.constructor.name + ': Object ' + id + ' already exist!');
	        return super.set(id, object);
	    }
	    delete(id) {
	        if (!super.has(id))
	            throw new Error(this.constructor.name + ': Object ' + id + ' is undefined!');
	        return super.delete(id);
	    }
	    get(id) {
	        if (!super.has(id))
	            throw new Error(this.constructor.name + ': Object ' + id + ' is undefined!');
	        return super.get(id);
	    }
	}

	class BindPool extends MapPool {
	    destroy() {
	        this.clear();
	    }
	    set(id, object) {
	        super.set(id, object);
	        return object;
	    }
	}

	class ScrollBar extends UiComponent {
	    constructor(input) {
	        super(input);
	    }
	    destroy() {
	        super.destroy();
	        this._callback = null;
	        this._bar.destroy();
	        this._bar = null;
	        pixiTweener.Tweener.killTweensOf(this._handle);
	        this.removeListenersFromObject(this._handle);
	        this._handle.destroy();
	        this._handle = null;
	        this._eventData = null;
	        this._pickPoint = null;
	    }
	    resize(size) {
	        super.resize(size);
	        this._bar[this._prfx.b] = this._input[this._prfx.b] + this._input.barSizeOffset;
	    }
	    show() {
	        super.show();
	        this.addListenersToObject(this._handle);
	    }
	    hide() {
	        super.hide();
	        this.removeListenersFromObject(this._handle);
	    }
	    moveTo(p, smooth) {
	        const v = (this._input[this._prfx.b] - this._handle[this._prfx.b]) * p;
	        if (smooth) {
	            pixiTweener.Tweener.add({
	                target: this._handle,
	                context: this._handle,
	                duration: 0.25,
	                ease: pixiTweener.Easing.easeOutSine,
	            }, { [this._prfx.a]: v });
	        }
	        else
	            this._handle[this._prfx.a] = v;
	    }
	    update(k) {
	        let newLength = this._input[this._prfx.b] * k;
	        if (newLength < this._input.handleLengthMin)
	            newLength = this._input.handleLengthMin;
	        this._handle[this._prfx.b] = newLength;
	    }
	    init() {
	        super.init();
	        this._callback = this._input.callback;
	        if (this._input.height > this._input.width) {
	            this._vertical = true;
	            this._prfx = { a: 'y', b: 'height' };
	        }
	        else {
	            this._vertical = false;
	            this._prfx = { a: 'x', b: 'width' };
	        }
	        if (this._input.bar) {
	            this._bar = this._input.bar;
	            this.addChild(this._bar);
	            this._bar.width = this._input.width;
	            this._bar.height = this._input.height;
	        }
	        else {
	            this._bar = new pixi_js.Sprite(graphics.Draw.simpleTexture(2, 2, this._input.color, 1));
	            this.addChild(this._bar);
	            if (this._vertical) {
	                this._bar.width = this._input.barThin;
	                this._bar.height = this._input.height + this._input.barSizeOffset;
	                this._bar.x = (this._input.width - this._input.barThin) / 2;
	                this._bar.y = -(this._input.barSizeOffset / 2);
	            }
	            else {
	                this._bar.width = this._input.width + this._input.barSizeOffset;
	                this._bar.height = this._input.barThin;
	                this._bar.x = -(this._input.barSizeOffset / 2);
	                this._bar.y = (this._input.height - this._input.barThin) / 2;
	            }
	        }
	        if (this._input.handle && this._input.handle.normal)
	            this._handle = new Button(this._input.handle);
	        else
	            this._handle = new CodeButton(this._input.handle);
	        this.addChild(this._handle);
	        if (this._vertical) {
	            this._handle.resize({ w: this._input.handle.width, h: this._input.height >> 1 });
	            this._input.barThin > this._input.handle.width ? this._handle.x = (this._input.barThin - this._input.handle.width) / 2 : 0;
	        }
	        else {
	            this._handle.resize({ w: this._input.width >> 1, h: this._input.handle.height });
	            this._input.barThin > this._input.handle.height ? this._handle.y = (this._input.barThin - this._input.handle.height) / 2 : 0;
	        }
	        this.addListenersToObject(this._handle);
	    }
	    defaults() {
	        super.defaults();
	        this._input.handleLengthMin ??= 20;
	        this._input.barSizeOffset ??= 0;
	        this._input.barThin ??= 0;
	    }
	    addListenersToObject(object) {
	        if (this._binds)
	            return;
	        this._binds = new BindPool();
	        object.on('mousedown', this._binds.set('mousedown', this.onDragStart.bind(this)))
	            .on('touchstart', this._binds.set('touchstart', this.onDragStart.bind(this)))
	            .on('mouseup', this._binds.set('mouseup', this.onDragEnd.bind(this)))
	            .on('mouseupoutside', this._binds.set('mouseupoutside', this.onDragEnd.bind(this)))
	            .on('touchend', this._binds.set('touchend', this.onDragEnd.bind(this)))
	            .on('touchendoutside', this._binds.set('touchendoutside', this.onDragEnd.bind(this)))
	            .on('mouseover', this._binds.set('mouseover', this.onMouseOver.bind(this)))
	            .on('mouseout', this._binds.set('mouseout', this.onMouseOut.bind(this)));
	    }
	    removeListenersFromObject(object) {
	        if (!this._binds)
	            return;
	        object.off('mousedown', this._binds.get('mousedown'))
	            .off('touchstart', this._binds.get('touchstart'))
	            .off('mouseup', this._binds.get('mouseup'))
	            .off('mouseupoutside', this._binds.get('mouseupoutside'))
	            .off('touchend', this._binds.get('touchend'))
	            .off('touchendoutside', this._binds.get('touchendoutside'))
	            .off('mouseover', this._binds.get('mouseover'))
	            .off('mouseout', this._binds.get('mouseout'));
	        this._binds.destroy();
	        this._binds = null;
	    }
	    onMouseOver(event) {
	        event.stopPropagation();
	    }
	    onMouseOut(event) {
	        event.stopPropagation();
	    }
	    onDragStart(event) {
	        event.stopPropagation();
	        this._handle.on('mousemove', this._binds.set('mousemove', this.onDragMove.bind(this)))
	            .on('touchmove', this._binds.set('touchmove', this.onDragMove.bind(this)));
	        this._eventData = event.data;
	        this._dragging = true;
	        const newPosition = this._eventData.getLocalPosition(this.parent);
	        this._pickPoint = { x: newPosition.x - this._handle.position.x, y: newPosition.y - this._handle.position.y };
	    }
	    onDragEnd(event) {
	        event.stopPropagation();
	        this._handle.off('mousemove', this._binds.get('mousemove'))
	            .off('touchmove', this._binds.get('touchmove'));
	        this._binds.delete('mousemove');
	        this._binds.delete('touchmove');
	        this._dragging = false;
	        this._eventData = this._pickPoint = null;
	    }
	    onDragMove(event) {
	        if (!this._dragging)
	            return;
	        const newPosition = this._eventData.getLocalPosition(this.parent);
	        const v = newPosition[this._prfx.a] - this._pickPoint[this._prfx.a];
	        this._handle[this._prfx.a] = v;
	        if (v <= 0)
	            this._handle[this._prfx.a] = 0;
	        if (v >= this._input[this._prfx.b] - this._handle[this._prfx.b])
	            this._handle[this._prfx.a] = this._input[this._prfx.b] - this._handle[this._prfx.b];
	        this._callback(this._handle[this._prfx.a] / (this._input[this._prfx.b] - this._handle[this._prfx.b]));
	    }
	}

	class OptimizeController extends mvc.Controller {
	    constructor(view) {
	        super(view);
	    }
	    destroy() {
	        super.destroy();
	    }
	    enable() {
	        const levels = this.generateArray();
	        if (levels.length == 0)
	            return;
	    }
	    disable() {
	    }
	    generateArray() {
	        const container = this._view.container;
	        const mask = { w: this._view.container.mask.width, h: this._view.container.mask.height };
	        const viewsX = container.width / mask.w;
	        const viewsY = container.height / mask.h;
	        const levelsX = this.getLevels(viewsX);
	        const levelsY = this.getLevels(viewsY);
	        console.log('OptimizeController: levelsX =' + levelsX);
	        console.log('OptimizeController: levelsY =' + levelsY);
	        this._tmp = new Map();
	        const referenceMap = new Map();
	        const n = container.children.length;
	        for (let i = 1; i < n; i++) {
	            let ch = container.children[i];
	            ch.oid = "e" + i;
	            this._tmp.set(ch.oid, { id: ch.oid, x: ch.x, y: ch.y, w: ch.width, h: ch.height, enabled: ch.visible });
	            referenceMap.set(ch.oid, container.children[i]);
	        }
	        const sizeFactor = 0.6;
	        const cluster = this.addSubCluster({
	            id: "Cluster_Global",
	            x: 0,
	            y: 0,
	            w: mask.w * Math.pow(levelsX + 1, 2) * sizeFactor,
	            h: mask.h * Math.pow(levelsY + 1, 2) * sizeFactor
	        }, this._tmp, levelsX, levelsY);
	        console.log(cluster);
	        console.log('num of children: ', container.children.length);
	        for (let i = 1; i < n; i++)
	            container.children[i].visible = false;
	        let changes = this.processCluster(cluster, { x: container.x, y: container.y });
	        console.log(changes);
	        changes.forEach((value, id) => {
	            referenceMap.get(id).visible = value;
	        });
	        console.log('-------------------------------------------------');
	        return cluster;
	    }
	    processCluster(cluster, point, changes) {
	        changes ??= new Map();
	        const containerX = point.x;
	        const containerY = point.y;
	        const childsNum = cluster.childs.length;
	        const lastLevel = cluster.childs[0]?.childs ? false : true;
	        let dx;
	        let dy;
	        for (let i = 0; i < childsNum; i++) {
	            let child = cluster.childs[i];
	            dx = Math.abs(child.x - containerX);
	            dy = Math.abs(child.y - containerY);
	            if (dx < cluster.w && dy < cluster.h) {
	                if (lastLevel)
	                    changes.set(child.id, child.enabled = true);
	                else
	                    this.processCluster(child, point, changes);
	            }
	        }
	        return changes;
	    }
	    addSubCluster(cluster, map, levelsX, levelsY) {
	        const sw = levelsX >= levelsY ? cluster.w / 2 : cluster.w;
	        const sh = levelsY >= levelsX ? cluster.h / 2 : cluster.h;
	        const id = "Cluster_L" + Math.max(levelsX, levelsY) + "_N";
	        const nx = levelsX >= levelsY ? 2 : 1;
	        const ny = levelsY >= levelsX ? 2 : 1;
	        let n = 1;
	        cluster.childs = [];
	        for (let j = 0; j < ny; j++) {
	            for (let i = 0; i < nx; i++) {
	                cluster.childs.push({
	                    id: id + n,
	                    x: cluster.x + sw * i,
	                    y: cluster.y + sh * j,
	                    w: sw,
	                    h: sh
	                });
	                n++;
	            }
	        }
	        if (levelsX == levelsY) {
	            levelsX--;
	            levelsY--;
	        }
	        else if (levelsX > levelsY)
	            levelsX--;
	        else if (levelsY > levelsX)
	            levelsY--;
	        if (levelsX > 0 || levelsY > 0) {
	            cluster.childs.forEach((subCluster) => {
	                this.addSubCluster(subCluster, map, levelsX, levelsY);
	            });
	            return cluster;
	        }
	        n = cluster.childs.length;
	        for (let i = 0; i < n; i++) {
	            let subCluster = cluster.childs[i];
	            subCluster.childs = [];
	            map.forEach((value, key) => {
	                if (value.x >= subCluster.x &&
	                    value.x < subCluster.x + subCluster.w &&
	                    value.y >= subCluster.y &&
	                    value.y < subCluster.y + subCluster.h) {
	                    subCluster.childs.push({
	                        id: value.id,
	                        x: value.x,
	                        y: value.y,
	                        w: value.w,
	                        h: value.h,
	                        enabled: value.enabled
	                    });
	                    map.delete(key);
	                }
	            });
	        }
	        return cluster;
	    }
	    getLevels(views) {
	        if (views < 2)
	            return 0;
	        return ~~Math.log2(views);
	    }
	    onContentChanged() {
	    }
	    onTick() {
	    }
	    onDataReceived() {
	    }
	    generateBoxID() {
	        let generated = false;
	        while (!generated) {
	            this._boxID = 'Scroll' + Math.ceil(Math.random() * 100);
	            if (!workers.Workers.isBoxExist(this._boxID))
	                generated = true;
	        }
	    }
	}

	class StuffController extends mvc.Controller {
	    constructor(view) {
	        super(view);
	    }
	    enable() {
	        this._view.container.on("childAdded", this._binds.set("childAdded", this.onSomethingAdded.bind(this)))
	            .on("childRemoved", this._binds.set("childRemoved", this.onSomethingRemoved.bind(this)));
	    }
	    disable() {
	        this._view.container.off("childAdded", this._binds.get("childAdded"))
	            .off("childRemoved", this._binds.get("childRemoved"));
	        this._binds.clear();
	    }
	    onSomethingAdded(event) {
	        this._view.update();
	    }
	    onSomethingRemoved(event) {
	        this._view.update();
	    }
	}

	class TouchController extends mvc.Controller {
	    constructor(view) {
	        super(view);
	        this._mask = view.container.mask;
	    }
	    destroy() {
	        super.destroy();
	        this._mask = null;
	    }
	    enable() {
	        this._view.container.on('mousedown', this._binds.set('mousedown', this.onDragStart.bind(this)))
	            .on('touchstart', this._binds.set('touchstart', this.onDragStart.bind(this)))
	            .on('mouseup', this._binds.set('mouseup', this.onDragEnd.bind(this)))
	            .on('mouseupoutside', this._binds.set('mouseupoutside', this.onDragEnd.bind(this)))
	            .on('touchend', this._binds.set('touchend', this.onDragEnd.bind(this)))
	            .on('touchendoutside', this._binds.set('touchendoutside', this.onDragEnd.bind(this)))
	            .on('mouseover', this._binds.set('mouseover', this.onMouseOver.bind(this)))
	            .on('mouseout', this._binds.set('mouseout', this.onMouseOut.bind(this)));
	    }
	    disable() {
	        this._view.container.off("mousedown", this._binds.get("mousedown"))
	            .off("touchstart", this._binds.get("touchstart"))
	            .off("mouseup", this._binds.get("mouseup"))
	            .off("mouseupoutside", this._binds.get("mouseupoutside"))
	            .off("touchend", this._binds.get("touchend"))
	            .off("touchendoutside", this._binds.get("touchendoutside"))
	            .off("mouseover", this._binds.get("mouseover"))
	            .off("mouseout", this._binds.get("mouseout"));
	        if (this._binds.has("mousemove"))
	            this._view.container.off("mousemove", this._binds.get("mousemove"));
	        if (this._binds.has("touchmove"))
	            this._view.container.off("touchmove", this._binds.get("touchmove"));
	        this._binds.clear();
	    }
	    onMouseOver(event) {
	        event.stopPropagation();
	    }
	    onMouseOut(event) {
	        event.stopPropagation();
	    }
	    onDragStart(event) {
	        event.stopPropagation();
	        this._view.container.cursor = 'grab';
	        if (this._binds.has('mousemove')) {
	            this._view.container.off("mousemove", this._binds.get("mousemove"));
	            this._binds.delete('mousemove');
	        }
	        if (this._binds.has('touchmove')) {
	            this._view.container.off("touchmove", this._binds.get("touchmove"));
	            this._binds.delete('touchmove');
	        }
	        this._view.container.on('mousemove', this._binds.set('mousemove', this.onDragMove.bind(this)))
	            .on('touchmove', this._binds.set('touchmove', this.onDragMove.bind(this)));
	        this._eventData = event.data;
	        this._dragging = true;
	        const newPosition = this._eventData.getLocalPosition(this._view.container);
	        this._pickPoint = { x: newPosition.x - this._view.container.x, y: newPosition.y - this._view.container.y };
	    }
	    onDragEnd(event) {
	        event.stopPropagation();
	        this._view.container.cursor = 'default';
	        this._view.container.off("mousemove", this._binds.get("mousemove"))
	            .off("touchmove", this._binds.get("touchmove"));
	        this._binds.delete("mousemove");
	        this._binds.delete("touchmove");
	        this._dragging = false;
	        this._eventData = this._pickPoint = null;
	    }
	    onDragMove(event) {
	        if (!this._dragging)
	            return;
	        const newPosition = this._eventData.getLocalPosition(this._view.container);
	        const x = newPosition.x - this._pickPoint.x;
	        const y = newPosition.y - this._pickPoint.y;
	        this._view.percentX = -x / (this._view.container.width - this._mask.width);
	        this._view.percentY = -y / (this._view.container.height - this._mask.height);
	    }
	}

	class WheelController extends mvc.Controller {
	    constructor(view) {
	        super(view);
	        this._mask = view.container.mask;
	    }
	    destroy() {
	        super.destroy();
	        this._mask = null;
	    }
	    enable() {
	        this._view.container.on("mouseover", this._binds.set("mouseover", this.onMouseOver.bind(this)))
	            .on("mouseout", this._binds.set("mouseout", this.onMouseOut.bind(this)));
	    }
	    disable() {
	        this._view.container.off("mouseover", this._binds.get("mouseover"))
	            .off("mouseout", this._binds.get("mouseout"));
	        if (this._binds.has("wheel"))
	            window.removeEventListener("wheel", this._binds.get("wheel"));
	        this._binds.clear();
	    }
	    onMouseOver(event) {
	        if (this._binds.has("wheel")) {
	            window.removeEventListener("wheel", this._binds.get("wheel"));
	            this._binds.delete('wheel');
	        }
	        window.addEventListener("wheel", this._binds.set("wheel", this.onMouseWheel.bind(this)));
	    }
	    onMouseOut(event) {
	        if (!this._binds.has("wheel"))
	            return;
	        window.removeEventListener("wheel", this._binds.get("wheel"));
	        this._binds.delete('wheel');
	    }
	    onMouseWheel(event) {
	        event.stopPropagation();
	        this._view.percentY += (this._mask.height / this._view.container.height) * (event.deltaY > 0 ? 1 : -1);
	    }
	}

	class Scroll extends UiComponent {
	    constructor(input) {
	        super(input);
	    }
	    destroy() {
	        super.destroy();
	        this._input.handleY = null;
	        this._input.handleX = null;
	        this._input.barY = null;
	        this._input.barX = null;
	        this._stuffController.destroy();
	        this._stuffController = null;
	        if (this._wheelController)
	            this._wheelController.destroy();
	        this._wheelController = null;
	        if (this._touchController)
	            this._touchController.destroy();
	        this._touchController = null;
	        this._binds.destroy();
	        this._binds = null;
	        this._hitZone.destroy({ texture: true, baseTexture: true, children: true });
	        this._hitZone = null;
	        pixiTweener.Tweener.killTweensOf(this._container, true);
	        this._container.destroy({ children: true });
	        this._container = null;
	        this._containerMask.destroy();
	        this._containerMask = null;
	        this._border.destroy();
	        this._border = null;
	        this._scrollBarY.destroy();
	        this._scrollBarY = null;
	        this._scrollBarX.destroy();
	        this._scrollBarX = null;
	    }
	    resize(size) {
	        super.resize(size);
	        this._scrollBarX.width = size.w;
	        this._scrollBarY.height = size.h;
	        this.update();
	    }
	    update() {
	        this._hitZone.scale.set(1, 1);
	        this._container.getBounds(true);
	        this._hitZone.width = this._container.width;
	        this._hitZone.height = this._container.height;
	        if (this._container.width > this._containerMask.width)
	            this._overfilledX = this._containerMask.width / this._container.width;
	        if (this._container.height > this._containerMask.height)
	            this._overfilledY = this._containerMask.height / this._container.height;
	        if (this._overfilledX < 1 && !this._input.disableX)
	            this.showXBar();
	        else
	            this.hideXBar();
	        if (this._overfilledY < 1 && !this._input.disableY)
	            this.showYBar();
	        else
	            this.hideYBar();
	    }
	    get percentX() {
	        return this._percentX;
	    }
	    set percentX(value) {
	        this._percentX = value = value < 0 ? 0 : (value > 1 ? 1 : value);
	        this.moveContainerX(value);
	        this.moveHandleX(value);
	    }
	    get percentY() {
	        return this._percentY;
	    }
	    set percentY(value) {
	        this._percentY = value = value < 0 ? 0 : (value > 1 ? 1 : value);
	        this.moveContainerY(value);
	        this.moveHandleY(value);
	    }
	    get container() {
	        return this._container;
	    }
	    get smooth() {
	        return this._input.smooth;
	    }
	    set smooth(value) {
	        this._input.smooth = value;
	    }
	    get border() {
	        return this._border.visible;
	    }
	    set border(value) {
	        this._border.visible = value;
	    }
	    get disableX() {
	        return this._input.disableX;
	    }
	    set disableX(value) {
	        this._input.disableX = value;
	    }
	    get disableY() {
	        return this._input.disableY;
	    }
	    set disableY(value) {
	        this._input.disableY = value;
	    }
	    init() {
	        super.init();
	        this._percentX = this._percentY = 0;
	        const maxThin = Math.max(this._input.handleThin, this._input.barThin);
	        const thin2Ss = maxThin + this._input.padding * 2;
	        this._barThin = thin2Ss;
	        this._container = new pixi_js.Container();
	        this._container.interactive = true;
	        this.addChild(this._container);
	        this._hitZone = new pixi_js.Graphics();
	        this._hitZone.beginFill(this._input.color, 0.01);
	        this._hitZone.drawRect(0, 0, 32, 32);
	        this._hitZone.endFill();
	        this._hitZone.interactive = this._hitZone.interactiveChildren = false;
	        this._container.addChild(this._hitZone);
	        this._containerMask = new pixi_js.Graphics();
	        this._containerMask.beginFill(0xFF0000);
	        this._containerMask.drawRect(0, 0, this._input.width, this._input.height);
	        this._containerMask.endFill();
	        this._containerMask.x = this._containerMask.y = 0;
	        this.addChild(this._containerMask);
	        this._container.mask = this._containerMask;
	        this._border = new pixi_js.Graphics();
	        this._border.lineStyle({ width: 1, color: this._input.color });
	        this._border.drawRect(0, 0, this._input.width, this._input.height);
	        this._border.interactive = this._border.visible = false;
	        this.addChild(this._border);
	        if (this._input.border)
	            this._border.visible = true;
	        this._binds = new pools.BindPool();
	        this._scrollBarY = new ScrollBar({
	            callback: this._binds.set("moveY", this.moveContainerY.bind(this)),
	            handle: this._input.handleY,
	            handleLengthMin: this._input.handleLengthMin,
	            width: maxThin,
	            height: this._input.height - thin2Ss,
	            color: this._input.color,
	            barSizeOffset: this._input.barSizeOffset,
	            barThin: this._input.barThin
	        });
	        this._scrollBarY.x = this._input.width - (maxThin + this._input.padding);
	        this._scrollBarY.y = this._input.padding;
	        this.addChild(this._scrollBarY);
	        this._scrollBarX = new ScrollBar({
	            callback: this._binds.set("moveX", this.moveContainerX.bind(this)),
	            handle: this._input.handleX,
	            handleLengthMin: this._input.handleLengthMin,
	            width: this._input.width - thin2Ss,
	            height: maxThin,
	            color: this._input.color,
	            barSizeOffset: this._input.barSizeOffset,
	            barThin: this._input.barThin
	        });
	        this._scrollBarX.x = this._input.padding;
	        this._scrollBarX.y = this._input.height - (maxThin + this._input.padding);
	        this.addChild(this._scrollBarX);
	        this._stuffController = new StuffController(this);
	        this._stuffController.enable();
	        this._wheelController = new WheelController(this);
	        this._wheelController.enable();
	        this._touchController = new TouchController(this);
	        this._touchController.enable();
	        this._optimizeController = new OptimizeController(this);
	        setTimeout(this._optimizeController.enable.bind(this._optimizeController), 5000);
	        this.update();
	    }
	    defaults() {
	        super.defaults();
	        this._input.smooth ??= true;
	        this._input.border ??= true;
	        this._input.backgroundAlpha ??= 0.25;
	        this._input.backgroundScrollFactor ??= 1;
	        this._input.moveDownOnUpdate ??= false;
	        this._input.moveRightOnUpdate ??= false;
	        this._input.disableY ??= false;
	        this._input.disableX ??= false;
	        this._input.padding ??= 2;
	        this._input.handleThin ??= 14;
	        this._input.handleMoveOffset ??= 0;
	        this._input.handleLengthMin ??= 20;
	        if (!this._input.handleY && !this._input.handleX) {
	            this._input.handleY = {
	                width: this._input.handleThin,
	                height: this._input.handleThin * 2,
	                color: this._input.color,
	                radius: this._input.handleThin >> 1,
	                alpha: 0.5
	            };
	            this._input.handleX = {
	                width: this._input.handleThin * 2,
	                height: this._input.handleThin,
	                color: this._input.color,
	                radius: this._input.handleThin >> 1,
	                alpha: 0.5
	            };
	        }
	        else {
	            this._input.handleY ??= { ...this._input.handleX };
	            this._input.handleY.width = this._input.handleThin;
	            this._input.handleY.height = this._input.height >> 1;
	            this._input.handleX ??= { ...this._input.handleY };
	            this._input.handleX.width = this._input.width >> 1;
	            this._input.handleX.height = this._input.handleThin;
	        }
	        this._input.barSizeOffset ??= -20;
	        this._input.barThin ??= 2;
	        if (!this._input.barY && !this._input.barX) {
	            this._input.barY = this._input.barX = null;
	        }
	        else {
	            this._input.barY ??= this._input.barX;
	            this._input.barX ??= this._input.barY;
	        }
	    }
	    moveContainerX(p) {
	        const x = (this._container.width - this._containerMask.width) * -p;
	        if (this._input.smooth) {
	            pixiTweener.Tweener.add({
	                target: this._container,
	                context: this._container,
	                duration: 0.25,
	                ease: pixiTweener.Easing.easeOutSine,
	            }, { x });
	        }
	        else
	            this._container.x = x;
	    }
	    moveContainerY(p) {
	        const y = (this._container.height - this._containerMask.height) * -p;
	        if (this._input.smooth) {
	            pixiTweener.Tweener.add({
	                target: this._container,
	                context: this._container,
	                duration: 0.25,
	                ease: pixiTweener.Easing.easeOutSine,
	            }, { y });
	        }
	        else
	            this._container.y = y;
	    }
	    moveHandleX(p) {
	        this._scrollBarX.moveTo(p, this._input.smooth);
	    }
	    moveHandleY(p) {
	        this._scrollBarY.moveTo(p, this._input.smooth);
	    }
	    showXBar() {
	        this._scrollBarX.show();
	        this._scrollBarX.update(this._overfilledX);
	        this._containerMask.height = this._input.height - this._barThin;
	    }
	    hideXBar() {
	        this._scrollBarX.hide();
	        this._containerMask.height = this._input.height;
	    }
	    showYBar() {
	        this._scrollBarY.show();
	        this._scrollBarY.update(this._overfilledY);
	        this._containerMask.width = this._input.width - this._barThin;
	    }
	    hideYBar() {
	        this._scrollBarY.hide();
	        this._containerMask.width = this._input.width;
	    }
	}

	class UI {
	    static button(input) {
	        if (input.normal)
	            return new Button(input);
	        return new CodeButton(input);
	    }
	    static label(input) {
	        return new Label(input);
	    }
	    static progressBar(input) {
	        return new CodeProgressBar(input);
	    }
	    static preloader(input) {
	        return new CodePreloader(input);
	    }
	    static scroll(input) {
	        return new Scroll(input);
	    }
	}

	exports.Button = Button;
	exports.CodeButton = CodeButton;
	exports.CodePreloader = CodePreloader;
	exports.CodeProgressBar = CodeProgressBar;
	exports.Label = Label;
	exports.OptimizeController = OptimizeController;
	exports.Preloader = Preloader;
	exports.ProgressBar = ProgressBar;
	exports.Scroll = Scroll;
	exports.ScrollBar = ScrollBar;
	exports.StuffController = StuffController;
	exports.TouchController = TouchController;
	exports.UI = UI;
	exports.UiComponent = UiComponent;
	exports.WheelController = WheelController;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, core_graphics, PIXI.filters, PIXI, core_mvc, pixiTweener, core_workers, core_pools);

/*! Compiled Fri, 12 Nov 2021 10:22:42 UTC */
var core_console=function(t,i,s,e,h,o,r){"use strict";class n extends s.UiComponent{constructor(t){super(t)}destroy(){super.destroy(),this._label.destroy(),this._label=null,this._apply.off("click",this.onApplyClick),this._apply.destroy(),this._apply=null,this._background.destroy(),this._background=null}get background(){return this._background.visible}set background(t){this._background.visible=t}init(){super.init(),this._background=new e.Sprite(i.Assets.getAsset("DarkRect","Console").data),this._background.width=355,this._background.height=40,this._background.visible=!1,this.addChild(this._background),this._label=new s.Label({color:this._input.color,width:300,height:20,style:{align:"left",fontSize:16,fill:[this._input.color,this._input.color]},text:this._input.id+": "+this._input.text}),this._label.x=7,this._label.y=10,this.addChild(this._label),this._apply=new s.CodeButton({color:this._input.color,width:30,height:30,radius:7,text:"►"}),this._apply.x=320,this._apply.y=5,this.addChild(this._apply),this._apply.on("click",this.onApplyClick.bind(this))}onApplyClick(){if(!this._input.fn)throw new Error(this.constructor.name+": Command "+this._input.id+" has no callback function!");this._input.fn()}}class a extends s.UiComponent{constructor(t,i,s){super({color:t,width:20,height:20}),this._minimize=i,this._maximize=s}destroy(){this.off("click",this.onClick),this.off("touchend",this.onClick),this._arrow.destroy(),this._arrow=null,this._minimize=null,this._maximize=null}showAsMaximized(){this._arrow.scale.y=-1}showAsMinimized(){this._arrow.scale.y=1}init(){super.init(),this._arrow=new e.Graphics,this._arrow.beginFill(this._input.color,.01),this._arrow.drawRect(-12,-8,24,16),this._arrow.endFill(),this._arrow.beginFill(this._input.color),this._arrow.moveTo(0,4),this._arrow.lineTo(8,-4),this._arrow.lineTo(-8,-4),this._arrow.lineTo(0,4),this._arrow.endFill(),this.addChild(this._arrow),this.interactive=!0,this.buttonMode=!0,this.on("click",this.onClick),this.on("touchend",this.onClick)}onClick(){1==this._arrow.scale.y?this._maximize():this._minimize()}}class l extends s.UiComponent{constructor(t,i){super(i),this._title.text=t,this.name=t,this.minimize()}destroy(){super.destroy(),this.off("mousedown",this.onPick).off("touchstart",this.onPick),this.removeBlur(),this._bg.destroy(),this._bg=null,this._title.destroy(),this._title=null,this._expandButton.destroy(),this._expandButton=null}resize(t){super.resize(t)}maximize(){this._bg.height=this._input.height,this._expandButton.showAsMaximized(),this._blurMask&&(this._blurMask.height=this._input.height)}minimize(){this._bg.height=30,this._expandButton.showAsMinimized(),this._blurMask&&(this._blurMask.height=30)}get title(){return this._title}addBlur(t){if(this._blurMask)return;this._blurMask=new e.Sprite(i.Assets.getAsset("MaskRect","Console").data),this._blurMask.width=this._input.width,this._blurMask.height=this._bg.height;const s=new o.MaskFilter(t);s.safeFlipY=!0,this._blurMask.filters=[s],this.addChildAt(this._blurMask,0)}removeBlur(){this._blurMask&&(this._blurMask.filters[0].destroy(),this._blurMask.destroy(),this._blurMask=null)}init(){super.init(),this._bg=new e.NineSlicePlane(i.Assets.getAsset("BG","Console").data,2,2,2,2),this._bg.width=this._input.width,this._bg.height=this._input.height,this.addChild(this._bg),this.getBounds(!0),this._title=new s.Label({color:this._input.color,width:this._input.width-30}),this._title.style.align="left",this._title.style.dropShadow=!0,this._title.style.dropShadowAlpha=.5,this._title.style.dropShadowAngle=.9,this._title.style.dropShadowBlur=2,this._title.style.dropShadowColor=0,this._title.style.dropShadowDistance=4,this._title.x=7,this._title.y=5,this.addChild(this._title),this._expandButton=new a(this._input.color,this.minimize.bind(this),this.maximize.bind(this)),this._expandButton.x=this._input.width-18,this._expandButton.y=14,this.addChild(this._expandButton),this.on("mousedown",this.onPick).on("touchstart",this.onPick)}onPick(t){t.stopPropagation(),this.parent.setChildIndex(this,this.parent.children.length-1)}}class d extends l{constructor(t){super("Commands",t)}destroy(){super.destroy(),this._commandPool.destroy(),this._commandPool=null,this._scroll.destroy(),this._scroll=null}maximize(){super.maximize(),this._scroll.visible=!0}minimize(){super.minimize(),this._scroll.visible=!1}get scroll(){return this._scroll}add(t,i,s){const e=new n({id:t,text:i,fn:s,color:this._input.color});return this.scroll.container.addChild(e),this._commandPool.set(t,e),this.refresh(),e}remove(t){this.scroll.container.removeChild(this._commandPool.get(t)),this._commandPool.delete(t),this.refresh()}init(){super.init(),this._scroll=new s.Scroll({color:this._input.color,width:this._input.width-20,height:this._input.height-40}),this._scroll.x=10,this._scroll.y=30,this.addChild(this._scroll),this._commandPool=new h.MapPool;for(let t=0;t<25;t++)this.add(t+"","qwewqeqsdasd qwe qwe",null)}refresh(){let t=0;this._commandPool.forEach((i=>{i.y=40*t,t%2&&(i.background=!0),t++}))}}class c extends l{constructor(t){super("FPS Meter",t)}destroy(){super.destroy(),this._grid.destroy(),this._grid=null,this._graphics.destroy(),this._graphics=null,this._data=null,e.Ticker.shared.remove(this.onTicker,this)}maximize(){super.maximize(),this._grid.visible=!0,this._graphics.visible=!0,this._drawcalls.visible=!0}minimize(){super.minimize(),this._grid.visible=!1,this._graphics.visible=!1,this._drawcalls.visible=!1}showDrawCalls(t){this._renderer=t,this._drawCalls=0;const i=this._renderer.gl.drawElements;this._renderer.gl.drawElements=(...t)=>{i.call(this._renderer.gl,...t),this._drawCalls++}}hideDrawCalls(){this._renderer=null}init(){super.init(),this._data=new Array;this._grid=new e.Graphics,this._grid.lineStyle({color:this._input.color,alpha:.75,width:1});for(let t=0;t<=6;t++)this._grid.moveTo(0,18*t),this._grid.lineTo(this._input.width-20,18*t);this._grid.moveTo(0,0),this._grid.lineTo(0,108),this._grid.moveTo(this._input.width-20,0),this._grid.lineTo(this._input.width-20,108),this._grid.x=10,this._grid.y=30,this.addChild(this._grid),this._gColor=r.Color.mix(this._input.color,.25),this._graphics=new e.Graphics,this._graphics.x=10,this._graphics.y=30,this.addChild(this._graphics),this._drawcalls=new s.Label({color:this._input.color,width:this._input.width-20,style:{align:"left",fontSize:16,fill:[this._input.color,this._input.color]}}),this._drawcalls.x=10,this._drawcalls.y=145,this.addChild(this._drawcalls),e.Ticker.shared.add(this.onTicker,this)}onTicker(){const t=Math.round(e.Ticker.shared.FPS);if(this._title.text="FPS Meter: "+t,this._data.push(t),this._data.length>120&&this._data.shift(),this._data.length<2)return;let i=this._input.width-20,s=i/120,h=i,o=this._data.length-1;for(this._graphics.clear(),this._graphics.beginFill(this._gColor,.25),this._graphics.moveTo(h,1.8*-this._data[o]+108);o>=0;)this._graphics.lineTo(h-=s,1.8*-this._data[o--]+108);this._graphics.lineTo(h,1.8*-this._data[0]+108),this._graphics.lineTo(h,108),this._graphics.lineTo(i,108),this._graphics.lineTo(i,1.8*-this._data[this._data.length-1]+108),this._graphics.endFill(),this._renderer&&(this._drawcalls.text="Draw calls: "+this._drawCalls,this._drawCalls=0)}}class _ extends l{constructor(t){super("Inspector",t),_.me=this}destroy(){super.destroy(),this.fullInfo.destroy(),this.fullInfo=null,this._attaches.forEach((t=>{this.deattach(t)})),this._attaches.clear(),this._attaches=null,this._eventData=null,this._pickPoint=null}maximize(){super.maximize(),this.fullInfo.visible=!0}minimize(){super.minimize(),this.fullInfo.visible=!1}attach(t){if(t.draggerID)throw new Error("DisplayObject "+t.constructor.name+" already attached!");const i=this.generateAttachID();this._attaches.set(i,t),t.draggerID=i,this.addListenersToObject(t)}deattach(t){if(!t.draggerID)throw new Error("DisplayObject "+t.constructor.name+" is not attached!");this._attaches.delete(t.draggerID),delete t.draggerID,this.removeListenersFromObject(t)}init(){super.init(),this.fullInfo=new s.Label({color:this._input.color,width:this._input.width-10,height:this._input.height-35}),this.fullInfo.style.align="left",this.fullInfo.style.fontSize=16,this.fullInfo.style.fill=[this._input.color,this._input.color],this.fullInfo.x=5,this.fullInfo.y=35,this.addChild(this.fullInfo),this._attaches=new Map,this._attachID=0,this.snapping=0}generateAttachID(){return this._attachID++,this._attachID>1e4&&(this._attachID=0),this._attachID}addListenersToObject(t){t.interactive?t.wasInteractived=!0:t.interactive=!0,t.on("mousedown",this.onDragStart).on("touchstart",this.onDragStart).on("mouseup",this.onDragEnd).on("mouseupoutside",this.onDragEnd).on("touchend",this.onDragEnd).on("touchendoutside",this.onDragEnd).on("mousemove",this.onDragMove).on("touchmove",this.onDragMove).on("mouseover",this.onMouseOver).on("mouseout",this.onMouseOut)}removeListenersFromObject(t){t.wasInteractived?(t.interactive=!0,delete t.wasInteractived):t.interactive=!1,t.off("mousedown",this.onDragStart).off("touchstart",this.onDragStart).off("mouseup",this.onDragEnd).off("mouseupoutside",this.onDragEnd).off("touchend",this.onDragEnd).off("touchendoutside",this.onDragEnd).off("mousemove",this.onDragMove).off("touchmove",this.onDragMove).off("mouseover",this.onMouseOver).off("mouseout",this.onMouseOut)}onMouseOver(t){t.stopPropagation();const i=this.name?this.name:this.constructor.name;_.me.title.text=i.substr(0,9)+": X:"+Math.round(this.position.x)+" Y:"+Math.round(this.position.y);let s="",e=this.parent;for(;e;)s=(e.name?e.name:e.constructor.name)+"."+s,e=e.parent;s+=i;const h=this._bounds.getRectangle();_.me.fullInfo.text=s+":\n\nbounds width: "+h.width+"\nbounds height: "+h.height+"\n\nwidth: "+this.width+"\nheight: "+this.height}onMouseOut(t){t.stopPropagation(),_.me.title.text="Inspector"}onDragStart(t){t.stopPropagation(),this._eventData=t.data,this._dragging=!0;const i=this._eventData.getLocalPosition(this.parent);this._pickPoint={x:i.x-this.position.x,y:i.y-this.position.y},this instanceof l||(this.alpha=.5)}onDragEnd(t){t.stopPropagation(),this._dragging=!1,this.alpha=1,this._eventData=null,this._pickPoint=null}onDragMove(t){if(!this._dragging)return;const i=this._eventData.getLocalPosition(this.parent),s=_.me.snapping;s>0?(this.position.x=Math.round((i.x-this._pickPoint.x)/s)*s,this.position.y=Math.round((i.y-this._pickPoint.y)/s)*s):(this.x=i.x-this._pickPoint.x,this.y=i.y-this._pickPoint.y);const e=this.name?this.name:this.constructor.name;_.me.title.text=e.substr(0,9)+": X:"+Math.round(this.position.x)+" Y:"+Math.round(this.position.y)}}class u extends l{constructor(t){super("Messages",t)}destroy(){super.destroy(),this._scroll.destroy(),this._scroll=null}maximize(){super.maximize(),this._scroll.visible=!0}minimize(){super.minimize(),this._scroll.visible=!1}get scroll(){return this._scroll}init(){super.init(),this._scroll=new s.Scroll({color:this._input.color,width:this._input.width-20,height:this._input.height-40}),this._scroll.x=10,this._scroll.y=30,this.addChild(this._scroll)}}return t.Command=n,t.Commands=d,t.Console=class{constructor(){}static init(t,i,s){this._container=t,this.generateAssets(i),this._messages=new u({color:i,width:900,height:500}),this._container.addChild(this._messages),this._messages.x=0,this._messages.y=30,this._fpsMeter=new c({color:i,width:200,height:170}),this._container.addChild(this._fpsMeter),this._fpsMeter.x=0,this._fpsMeter.y=0,this._inspector=new _({color:i,width:300,height:200}),this._container.addChild(this._inspector),this._inspector.x=200,this._inspector.y=0,this._commands=new d({color:i,width:400,height:500}),this._container.addChild(this._commands),this._commands.x=500,this._commands.y=0,this._inspector.attach(this._fpsMeter),this._inspector.attach(this._inspector),this._inspector.attach(this._messages),this._inspector.attach(this._commands),this._inspector.snapping=10,this.addBlur(),console.log("Console initialized.")}static destroy(){this._fpsMeter.destroy(),this._fpsMeter=null,this._inspector.destroy(),this._inspector=null,this._commands.destroy(),this._commands=null,this._messages.destroy(),this._messages=null}static addBlur(){const t=new e.filters.BlurFilter(1,3);t.blur=12,this._messages.addBlur(t),this._fpsMeter.addBlur(t),this._inspector.addBlur(t),this._commands.addBlur(t)}static removeBlur(){this._messages.removeBlur(),this._fpsMeter.removeBlur(),this._inspector.removeBlur(),this._commands.removeBlur()}static get fpsMeter(){return this._fpsMeter}static get inspector(){return this._inspector}static get commands(){return this._commands}static get messages(){return this._messages}static get visible(){return this._container.visible}static set visible(t){this._container.visible=t}static log(t){}static error(t){}static info(t){}static addModule(t){this._container.addChild(t)}static generateAssets(t=16776960){let s;i.Assets.addLists(new i.AssetList("Console")),s=new i.Asset("BG"),s.data=r.Draw.gradientBorderedTexture(32,32,r.Color.mix(t,-.8),.4,t,16777215,1),i.Assets.addAssets("Console",s),s=new i.Asset("DarkRect"),s.data=r.Draw.simpleTexture(4,4,0,.5),i.Assets.addAssets("Console",s),s=new i.Asset("MaskRect"),s.data=r.Draw.simpleTexture(4,4,16711680),i.Assets.addAssets("Console",s)}},t.ConsoleExpandButton=a,t.ConsoleModule=l,t.FPSMeter=c,t.Inspector=_,t.Messages=u,Object.defineProperty(t,"__esModule",{value:!0}),t}({},core_assets,core_ui,PIXI,core_pools,PIXI.picture,core_graphics);

/*! Compiled Fri, 05 Nov 2021 21:47:12 UTC */
var core_app=function(e,t,i,r,o,a,s,n){"use strict";class l{static init(){this._language=navigator.language,this._cores=navigator.hardwareConcurrency,this._isMobile=this.checkMobile()}static get language(){return this._language}static get cores(){return this._cores}static get isMobile(){return this._isMobile}static checkMobile(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((e=>navigator.userAgent.match(e)))}}var h,d;e.AppLanguage=void 0,(h=e.AppLanguage||(e.AppLanguage={}))[h.ENGLISH=0]="ENGLISH",h[h.RUSSIAN=1]="RUSSIAN",h[h.GERMAN=2]="GERMAN",h[h.FRENCH=3]="FRENCH",h[h.ITALIAN=4]="ITALIAN",h[h.SPANISH=5]="SPANISH",h[h.CHINESE=6]="CHINESE",e.AppQuality=void 0,(d=e.AppQuality||(e.AppQuality={}))[d.CONFIGURED=0]="CONFIGURED",d[d.LOW=1]="LOW",d[d.NORMAL=2]="NORMAL",d[d.HIGH=3]="HIGH",d[d.BEST=4]="BEST";class c{static init(){this._options=new Map}static get options(){return this._options}}class g{static none(e){let t=this.initScaleData(e);t.sameRatios=t.fullScreen=!0,t.scaleFactor=1,t.rWidth=Math.min(t.nWidth,t.iWidth),t.rHeight=Math.min(t.nHeight,t.iHeight),e.view.style.left=e.view.style.top="0px",document.getElementById("title").hidden=!0,this.resize(e,t)}static fixed(e){let t=this.initScaleData(e);t.sameRatios=!0,t.scaleFactor=1,this.getViewportFixed(t),this.alignAppView(e,t),this.resize(e,t)}static float(e){let t=this.initScaleData(e);this.getSameRatios(t),this.getScaleFactor(t),this.getViewportFloat(t),this.alignAppView(e,t),this.resize(e,t)}static initScaleData(e){return{nWidth:c.resolution.width,nHeight:c.resolution.height,adaptivity:c.scale.adaptivity,title:!!c.title,iWidth:window.innerWidth,iHeight:window.innerHeight,fullScreen:document.fullscreenElement==document.getElementById("app")}}static getSameRatios(e){const t=e.iWidth/e.iHeight;if(e.adaptivity>1){const i=e.nWidth*e.adaptivity/e.nHeight,r=e.nWidth/(e.nHeight*e.adaptivity);e.sameRatios=r<=t&&t<=i}else e.sameRatios=e.nWidth/e.nHeight==t}static getScaleFactor(e){c.border?(e.w=e.iWidth-(e.fullScreen?e.sameRatios?0:20:40),e.h=e.iHeight-(e.fullScreen?e.sameRatios?0:20:e.title?70:40)):(e.w=e.iWidth,e.h=e.iHeight),e.scaleFactor=Math.min(e.w/e.nWidth,e.h/e.nHeight)}static getViewportFixed(e){e.fullScreen||!c.border?(e.rWidth=e.iWidth,e.rHeight=e.iHeight):(e.rWidth=e.iWidth-40,e.rHeight=e.iHeight-(e.title?70:40)),e.adaptivity<=1||(e.rWidth=Math.min(e.rWidth,e.nWidth*e.adaptivity),e.rHeight=Math.min(e.rHeight,e.nHeight*e.adaptivity),e.fullScreen&&(e.rWidth<e.iWidth||e.rHeight<e.iHeight)&&(e.rWidth=Math.min(e.rWidth,e.iWidth-20),e.rHeight=Math.min(e.rHeight,e.iHeight-20),e.sameRatios=!1))}static getViewportFloat(e){e.rWidth=e.nWidth*e.scaleFactor,e.rHeight=e.nHeight*e.scaleFactor,e.adaptivity<=1||(e.rWidth=Math.min(e.w,e.rWidth*e.adaptivity),e.rHeight=Math.min(e.h,e.rHeight*e.adaptivity))}static alignAppView(e,t){if(t.fullScreen&&t.sameRatios||!c.border?(e.view.style.left=(t.iWidth-t.rWidth)/2+"px",e.view.style.top=(t.iHeight-t.rHeight)/2+"px",e.view.style.border="none"):(e.view.style.left=(t.iWidth-t.rWidth)/2-4+"px",e.view.style.top=(t.iHeight-t.rHeight)/2+(t.fullScreen||!t.title?-4:10)+"px",e.view.style.border="3px double "+r.Color.colorToString(c.color)),t.fullScreen)return;const i=document.getElementById("title");t.title&&c.border?(i.hidden=!1,i.style.paddingTop=(t.iHeight-t.rHeight)/2-30+"px"):i.hidden=!0}static resize(e,t){e.renderer.resize(e.view.width=t.rWidth,e.view.height=t.rHeight),c.scale.factor=e.stage.scale.x=e.stage.scale.y=t.scaleFactor}}class p extends n.Application{constructor(e){super({antialias:!1}),p._current=this,l.init(),c.init(),this.applySettings(e),this.stage.name="stage",this._contentLayer=new n.Container,this._contentLayer.name="content",this.stage.addChild(this._contentLayer),this._preloaderLayer=new n.Container,this._preloaderLayer.name="preloader",this.stage.addChild(this._preloaderLayer),this._consoleLayer=new n.Container,this._consoleLayer.name="console",this.stage.addChild(this._consoleLayer),s.Tweener.init(n.Ticker.shared),console.log("Tweener initialized."),i.Console.init(this._consoleLayer,c.color,l.isMobile),i.Console.fpsMeter.showDrawCalls(this.renderer),this.configureHTML5(),window.addEventListener("resize",this.onResize.bind(this)),this.onResize(),t.Assets.init(),a.Workers.init(l.cores),console.log("App starting...")}destroy(e,r){t.Assets.clear(),a.Workers.terminate(),i.Console.destroy(),s.Tweener.dispose(),this._preloader&&this._preloader.destroy(),this._preloader=null,this._preloaderLayer.destroy(),this._consoleLayer.destroy(),this._contentLayer.destroy(),window.removeEventListener("contextmenu",this.onRightClick),super.destroy(e,r),console.log("App terminated.")}static get current(){return this._current}get preloader(){return this._preloader}get content(){return this._contentLayer}applySettings(t){c.resolution=t?.resolution?t.resolution:{width:1920,height:1080},c.scale=t?.scale?t.scale:{method:g.none.bind(g),adaptivity:1},c.title=t?.title?t.title:"My App",c.language=t?.language?t.language:e.AppLanguage.ENGLISH,c.quality=t?.quality?t.quality:e.AppQuality.NORMAL,c.color=t?.color?t.color:7829503,c.border=!t?.border||t.border}addPreloader(e){this._preloader&&this._preloader.destroy(),this._preloader=e||new o.CodePreloader({color:c.color,width:c.resolution.width,height:c.resolution.height}),this._preloaderLayer.addChild(this._preloader),this._preloader.hide(),setTimeout(this.onResize.bind(this),0)}onResize(){c.scale.method(this),this._preloader&&this._preloader.resize({w:this.renderer.width/c.scale.factor,h:this.renderer.height/c.scale.factor})}onLoadingStart(){this._preloader&&this._preloader.show()}onLoadingProgress(e){if(!this._preloader)return;let t;t=e.taskID?(50+e.value/2)/100:e.value/2/100,this._preloader.showProgress({progress:t,info:e.action})}onLoadingComplete(){this._preloader&&this._preloader.hide()}onLoadingError(e){this._preloader&&this._preloader.showError(e),console.log("Error:",e)}configureHTML5(){this.view.style.position="absolute";const e=document.getElementById("title");e.textContent=c.title,e.style.color=r.Color.colorToString(c.color);const t=document.getElementsByTagName("head")[0];t.firstChild.nextSibling.firstChild.nodeValue=c.title,t.lastChild.previousSibling.lastChild.textContent="html, body {margin: 0; padding: 0; width: 100%; height: 100%; background: "+r.Color.colorToString(c.border?r.Color.mix(c.color,-.9):0)+"; overflow: hidden;}",window.addEventListener("contextmenu",this.onRightClick)}onRightClick(e){e.preventDefault()}}return e.App=p,e.AppDevice=l,e.AppScale=g,e.AppSettings=c,e.startApp=function(e){let t;window.onload=()=>{t=new e,t.start(),document.getElementById("app").appendChild(t.view)},window.onbeforeunload=()=>{t.destroy(!0,{children:!0})},window.onunload=()=>{t.destroy(!0,{children:!0})}},Object.defineProperty(e,"__esModule",{value:!0}),e}({},core_assets,core_console,core_graphics,core_ui,core_workers,pixiTweener,PIXI);

/*! Compiled Sun, 31 Oct 2021 15:17:21 UTC */
var CORE=function(e,r,t,n,o,c,u,f,a,i){"use strict";return Object.keys(r).forEach((function(t){"default"===t||e.hasOwnProperty(t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})})),Object.keys(t).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})})),Object.keys(n).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[r]}})})),Object.keys(o).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return o[r]}})})),Object.keys(c).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return c[r]}})})),Object.keys(u).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return u[r]}})})),Object.keys(f).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return f[r]}})})),Object.keys(a).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return a[r]}})})),Object.keys(i).forEach((function(r){"default"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return i[r]}})})),Object.defineProperty(e,"__esModule",{value:!0}),e}({},core_app,core_assets,core_console,core_graphics,core_mvc,core_pools,core_ui,core_utils,core_workers);
