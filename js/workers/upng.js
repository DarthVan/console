var upng = (function (exports) {
	'use strict';

	var WorkerMessageType;
	(function (WorkerMessageType) {
	    WorkerMessageType[WorkerMessageType["SET_DATA"] = 0] = "SET_DATA";
	    WorkerMessageType[WorkerMessageType["ON_START"] = 1] = "ON_START";
	    WorkerMessageType[WorkerMessageType["ON_PROGRESS"] = 2] = "ON_PROGRESS";
	    WorkerMessageType[WorkerMessageType["ON_COMPLETE"] = 3] = "ON_COMPLETE";
	    WorkerMessageType[WorkerMessageType["ON_ERROR"] = 4] = "ON_ERROR";
	})(WorkerMessageType || (WorkerMessageType = {}));

	class BasicWorker {
	    constructor() {
	        this.addLibs();
	        self.addEventListener("message", this.onMessageReceived.bind(this));
	    }
	    addLibs() {
	    }
	    onData(taskID, data) {
	    }
	    onMessageReceived(e) {
	        const message = e.data || e;
	        if (message.type != WorkerMessageType.SET_DATA)
	            throw new Error(this.constructor.name + ': unknown message received!');
	        this.onData(message.id, message.data);
	    }
	}
	function startWorker(workerClass) {
	    new workerClass();
	}

	class WorkerMessage {
	    constructor(type, id, data) {
	        this.type = type;
	        this.id = id;
	        this.data = data;
	    }
	    static onData(taskID, data) {
	        return new WorkerMessage(WorkerMessageType.SET_DATA, taskID, data);
	    }
	    static onStart(taskID, data) {
	        return new WorkerMessage(WorkerMessageType.ON_START, taskID, data);
	    }
	    static onProgress(taskID, data) {
	        return new WorkerMessage(WorkerMessageType.ON_PROGRESS, taskID, data);
	    }
	    static onComplete(taskID, data) {
	        return new WorkerMessage(WorkerMessageType.ON_COMPLETE, taskID, data);
	    }
	    static onError(taskID, data) {
	        return new WorkerMessage(WorkerMessageType.ON_ERROR, taskID, data);
	    }
	}

	class UpngWorker extends BasicWorker {
	    addLibs() {
	        self.importScripts('/js/libs/upng.min.js');
	    }
	    onData(taskID, data) {
	        self.postMessage(WorkerMessage.onComplete(taskID, UPNG.toRGBA8(UPNG.decode(data))[0]));
	    }
	}
	startWorker(UpngWorker);

	exports.UpngWorker = UpngWorker;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
