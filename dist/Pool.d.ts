/// <reference types="node" />
import { Task } from "./task";
import { TaskWorker } from "./TaskWorker";
interface TaskRunner {
    name: string;
    job?: Function;
    functionName?: string;
    filePath?: string;
    threadCount?: number;
    lockToThreads?: boolean;
}
interface WorkersPoolOptions {
    taskRunners?: Array<TaskRunner>;
    totalThreadCount?: number;
    lockTaskRunnersToThreads?: boolean;
    allowDynamicTaskRunnerAddition?: boolean;
    threadCount: number;
}
export declare class Pool {
    workersPool: Map<string, Array<TaskWorker>>;
    busyWorkers: Map<string, Array<TaskWorker>>;
    taskQueue: Array<Task>;
    activeTasks: Array<Task>;
    processed: Map<number, boolean>;
    dynamicTaskRunnerList: Array<TaskRunner>;
    busyWorkersCount: number;
    options: WorkersPoolOptions;
    processingInterval: NodeJS.Timeout;
    intervalLength: number;
    staticTaskRunnerThreadCount: number;
    poolNo: number;
    /**
     * The constructor of Pool class
     * @param {number} n The number of threads (default is the number of cpu cores - 1)
     * @param {WorkersPoolOptions} options The optional options used in creating workers
     */
    constructor(options: WorkersPoolOptions);
    /**
     * Initiates the workers pool by creating the worker threads
     */
    private initWorkerPool;
    /**
     */
    private validateOptions;
    /**
     *
     * @param param0
     */
    private _addTaskRunner;
    /**
     *
     * @param taskRunner
     */
    addTaskRunner(taskRunner: TaskRunner): void;
    /**
     * Generates an asynchronous promise based function out of a synchronous one
     * @param {string} taskRunnerName
     */
    getAsyncFunc(taskRunnerName: string): (...params: any[]) => Promise<unknown>;
    /**
     * Enqueues a task to be processed when an idle worker thread is available
     * @param {Task} task The task to be run
     */
    private enqueueTask;
    /**
     * Checks if there are any pending tasks and if there are any idle
     * workers to process them, prepares them for processing, and processes
     * them.
     */
    private startTaskProcessing;
    /**
     *
     */
    private stopProcessing;
    /**
     *
     * @param {*} answer
     */
    private updateWorkersQueue;
    /**
     * Terminates all the tasks. If forced is true it will not wait for the
     * active tasks to finish.
     * @param {boolean} forced To terminate immediately
     */
    terminate(forced: boolean): void;
    /**
     * The current status of the pool
     * @param {boolean} detailed If true the information will be detailed
     */
    static status(detailed?: boolean): void;
}
export {};
//# sourceMappingURL=Pool.d.ts.map