export class Fan{
    private _speed : number;
    private _on : boolean;
    private _radius : number;
    private _color : string;
    private slow : number;
    private medium : number;
    private fast : number;


    constructor() {
        const Slow = 1;
        const Medium = 2;
        const Fast = 3;
        this.slow = Slow;
        this.medium = Medium;
        this.fast = Fast;
        this._speed = this.slow;
        this._on = false;
        this._radius = 5;
        this._color = 'blue';
    }


    getSpeed(): number {
        return this._speed;
    }

    setSpeed(value: number) {
        this._speed = value;
    }

    geton(): boolean {
        return this._on;
    }

    seton(value: boolean) {
        this._on = value;
    }

    getradius(): number {
        return this._radius;
    }

    setradius(value: number) {
        this._radius = value;
    }

    getcolor(): string {
        return this._color;
    }

    setcolor(value: string) {
        this._color = value;
    }
}