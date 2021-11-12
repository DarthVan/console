var sample = (function (exports) {
	'use strict';

	function addPixiEnvironment() {
		globalThis.window = self;
		globalThis.document = {
			createElement() {
				return {
					getContext() {
						return {
							fillRect() { },
							drawImage() { },
							getImageData() { },
						};
					},
				};
			},
		};
	}

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
		let worker = new workerClass();
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

	class WorkerThread extends BasicWorker {
		addLibs() {
			addPixiEnvironment();
			self.importScripts('/bin/js/libs/pixi.min.js', '/bin/js/libs/jszip.min.js');
		}
		onData(taskID, data) {
			self.postMessage(WorkerMessage.onStart(taskID, null));
			let sum = 0;
			for (let i = 0; i < data.iterations; i++) {
				sum += 1;
			}
			self.postMessage(WorkerMessage.onComplete(taskID, { taskID: taskID, sum: sum }));
		}
	}
	startWorker(WorkerThread);

	exports.WorkerThread = WorkerThread;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
