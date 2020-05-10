"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(mainThread) {
        this.mainThread = '';
        this.mainThread = mainThread;
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log("" + (this.mainThread !== undefined ? '[' + this.mainThread + ']' : '') + message);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
