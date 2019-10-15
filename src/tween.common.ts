let debug = false;
export function setDebug(value: boolean) {
    debug = value;
}

export enum CLogTypes {
    info,
    warning,
    error
}

export const CLog = (type: CLogTypes = 0, ...args) => {
    if (debug) {
        if (type === 0) {
            // Info
            console.log('[nativescript-tween]', ...args);
        } else if (type === 1) {
            // Warning
            console.warn('[nativescript-tween]', ...args);
        } else if (type === 2) {
            console.error('[nativescript-tween]', ...args);
        }
    }
};

export * from './tween.common';

import REAL_TWEEN from '@tweenjs/tween.js';

export default abstract class TweenBase {
    // _animator: PMTweenUnit;
    // _animatorListener: android.animation.Animator.AnimatorListener;
    // _animatorUpdateListener: android.animation.ValueAnimator.AnimatorUpdateListener;
    _delayTime = 0;
    _repeatDelayTime = 0;
    _yoyo = false;
    _easingFunction = REAL_TWEEN.Easing.Linear.None;
    _interpolationFunction = REAL_TWEEN.Interpolation.Linear;
    _valuesStart = {};
    _valuesEnd = {};
    _valuesStartRepeat = {};
    _duration = 1000;
    _repeat = 0;
    _reversed = false;
    _object;
    _onUpdateCallback = null;
    _onStartCallback = null;
    _onStartCallbackFired = false;
    _onRepeatCallback = null;
    _onCompleteCallback = null;
    _onStopCallback = null;

    constructor(object?: any, group?: Group) {
        this._object = object;
    }
    getId(): number {
        return -1;
    }
    abstract isPlaying(): boolean;
    abstract isPaused(): boolean;
    _onAnimationEnd() {
        // this._animator.removeAllListeners();
        // this._animator = null;
        if (this._repeat > 0) {
            if (isFinite(this._repeat)) {
                this._repeat--;
            }

            // Reassign starting values, restart by making startTime = now
            for (const property in this._valuesStartRepeat) {
                if (typeof this._valuesEnd[property] === 'string') {
                    this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                }

                if (this._yoyo) {
                    const tmp = this._valuesStartRepeat[property];

                    this._valuesStartRepeat[property] = this._valuesEnd[property];
                    this._valuesEnd[property] = tmp;
                }

                this._valuesStart[property] = this._valuesStartRepeat[property];
            }

            if (this._yoyo) {
                this._reversed = !this._reversed;
            }

            // if (this._repeatDelayTime !== undefined) {
            //     this._startTime = time + this._repeatDelayTime;
            // } else {
            //     this._startTime = time + this._delayTime;
            // }

            if (this._onRepeatCallback !== null) {
                this._onRepeatCallback(this._object);
            }
            this.start(this._repeatDelayTime || this._delayTime);

            // return true;
        } else {
            if (this._onCompleteCallback !== null) {
                this._onCompleteCallback(this._object);
            }
        }
    }
    _onAndroidAnimationCancel() {}
    _onAnimationUpdate(delta) {
        this.update(delta);
    }
    to(properties, duration) {
        this._valuesEnd = Object.create(properties);

        if (duration !== undefined) {
            this._duration = duration;
        }

        return this;
    }

    duration(d) {
        this._duration = d;
        return this;
    }
    abstract startAnimator();
    start(time?: number) {
        for (const property in this._valuesEnd) {
            // Check if an Array was provided as property value
            if (this._valuesEnd[property] instanceof Array) {
                if (this._valuesEnd[property].length === 0) {
                    continue;
                }

                // Create a local copy of the Array with the start value at the front
                this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
            }

            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (this._object[property] === undefined) {
                continue;
            }

            // Save the starting value, but only once.
            if (typeof this._valuesStart[property] === 'undefined') {
                this._valuesStart[property] = this._object[property];
            }

            if (this._valuesStart[property] instanceof Array === false) {
                this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
            }

            this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
        }
        this.startAnimator();
        return this;
    }
    abstract stopAnimator();
    stop() {
        this.stopAnimator();
        return this;
    }
    abstract endAnimator();
    end() {
        this.endAnimator();

        return this;
    }
    abstract cancelAnimator();
    cancel() {
        this.cancelAnimator();
        return this;
    }
    abstract pauseAnimator();
    pause() {
        this.pauseAnimator();

        return this;
    }
    abstract resumeAnimator();
    resume() {
        this.resumeAnimator();
        return this;
    }
    // stopChainedTweens() {
    //     return this;
    // }
    // group(group: Group) {
    //     return this;
    // }
    delay(amount) {
        this._delayTime = amount;
        return this;
    }

    repeat(times) {
        this._repeat = times;
        return this;
    }

    repeatDelay(amount) {
        this._repeatDelayTime = amount;
        return this;
    }

    yoyo(yoyo) {
        this._yoyo = yoyo;
        return this;
    }

    easing(easingFunction) {
        this._easingFunction = easingFunction;
        return this;
    }

    interpolation(interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
    }
    chain(...tweens: TweenBase[]) {
        return this;
    }

    onStart(callback) {
        this._onStartCallback = callback;
        return this;
    }

    onUpdate(callback) {
        this._onUpdateCallback = callback;
        return this;
    }

    onRepeat(callback) {
        this._onRepeatCallback = callback;
        return this;
    }

    onComplete(callback) {
        this._onCompleteCallback = callback;
        return this;
    }

    onStop(callback) {
        this._onStopCallback = callback;
        return this;
    }
    update(elapsed: number): boolean {
        let property;
        // var elapsed;
        let value;

        // if (time < this._startTime) {
        //     return true;
        // }

        // if (this._onStartCallbackFired === false) {
        //     if (this._onStartCallback !== null) {
        //         this._onStartCallback(this._object);
        //     }

        //     this._onStartCallbackFired = true;
        // }

        // elapsed = delta*  this._duration;
        // elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;

        value = this._easingFunction(elapsed);

        for (property in this._valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (this._valuesStart[property] === undefined) {
                continue;
            }

            const start = this._valuesStart[property] || 0;
            let end = this._valuesEnd[property];

            if (end instanceof Array) {
                this._object[property] = this._interpolationFunction(end, value);
            } else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                if (typeof end === 'string') {
                    if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                        end = start + parseFloat(end);
                    } else {
                        end = parseFloat(end);
                    }
                }

                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    this._object[property] = start + (end - start) * value;
                }
            }
        }

        if (this._onUpdateCallback !== null) {
            this._onUpdateCallback(this._object, elapsed);
        }

        return true;
    }
}

export class Group {
    _tweens: TweenBase[] = [];
    constructor() {}
    getAll(): TweenBase[] {
        return [];
    }
    removeAll(): void {}
    add(tween: TweenBase): void {}
    remove(tween: TweenBase): void {}
    update(time?: number, preserve?: boolean): boolean {
        return false;
    }
}

export let Easing: Easing = REAL_TWEEN.Easing;
export let Interpolation: Interpolation = REAL_TWEEN.Interpolation;

const _runningTweens: TweenBase[] = [];
export function getAll(): TweenBase[] {
    return this._runningTweens;
}
export function removeAll() {}
export function add(tween: TweenBase) {}
export function remove(tween: TweenBase) {}
export function update(time?: number, preserve?: boolean): boolean {
    return false;
}
