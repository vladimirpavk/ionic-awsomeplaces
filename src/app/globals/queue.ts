export class Queue<T>{
    private _store : T[] = [];

    public push(value:T):void{
        this._store.push(value);
    }

    public pop(): T | undefined{
        return this._store.shift();
    }
}