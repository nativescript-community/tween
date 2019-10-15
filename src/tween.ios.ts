import TweenBase, { add, CLog, CLogTypes, Easing, getAll, Group, Interpolation, remove, removeAll, setDebug, update } from './tween.common';

export { CLog, setDebug };

export const TWEEN = {
    Tween: class Tween extends TweenBase {
        _animator: PMTweenUnit;
        _paused = false;
        _playing = false;
        startAnimator() {
            this.getOrCreateAnimator().startTween();
        }
        stopAnimator() {
            if (this._animator) {
                this._animator.stopTween();
            }
        }
        endAnimator() {
            if (this._animator) {
                this._animator.stopTween();
            }
        }
        cancelAnimator() {
            if (this._animator) {
                this._animator.stopTween();
            }
        }
        pauseAnimator() {
            if (this._animator) {
                this._animator.pauseTween();
            }
        }
        resumeAnimator() {
            if (this._animator) {
                this._animator.resumeTween();
            }
        }

        isPlaying() {
            return this._animator && this._playing;
        }
        isPaused() {
            return this._animator && this._paused;
        }
        getOrCreateAnimator() {
            if (!this._animator) {
                const options = 0;
                this._animator = PMTweenUnit.alloc().initWithPropertyStartingValueEndingValueDurationOptionsEasingBlock(null, 0, 1, this._duration / 1000, options, null);
                this._animator.completeBlock = () => {
                    CLog(CLogTypes.info, 'completeBlock');
                    this._onAnimationEnd();
                    if (this._onCompleteCallback !== null) {
                        this._onCompleteCallback(this._object);
                    }
                };
                this._animator.updateBlock = () => {
                    CLog(CLogTypes.info, 'updateBlock', this._animator.currentValue);
                    this.update(this._animator.currentValue);
                };
                this._animator.startBlock = () => {
                    CLog(CLogTypes.info, 'startBlock');
                    this._playing = true;
                    this._paused = false;
                    if (this._onStartCallback !== null) {
                        this._onStartCallback(this._object);
                    }
                };
                this._animator.stopBlock = () => {
                    CLog(CLogTypes.info, 'stopBlock');
                    this._playing = false;
                    this._paused = false;
                    if (this._onStopCallback !== null) {
                        this._onStopCallback(this._object);
                    }
                };
                this._animator.pauseBlock = () => {
                    CLog(CLogTypes.info, 'pauseBlock');
                    this._playing = false;
                    this._paused = true;
                };
                this._animator.resumeBlock = () => {
                    CLog(CLogTypes.info, 'resumeBlock');
                    this._playing = true;
                    this._paused = false;
                };
                // this._animator.setTarget(this);
            }
            return this._animator;
        }
        _onAnimationEnd() {
            this._animator = null;
            super._onAnimationEnd();
        }
        _onAnimationCancel() {}
        _onAnimationUpdate(delta) {
            this.update(delta);
        }
    },
    Group,
    Easing,
    Interpolation,
    getAll,
    removeAll,
    add,
    remove,
    update
};
export default TWEEN;
// module.exports = TWEEN;
