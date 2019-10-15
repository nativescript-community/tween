import TweenBase, { add, CLog, CLogTypes, Easing, getAll, Group, Interpolation, remove, removeAll, setDebug, update } from './tween.common';

export { CLog, setDebug };

export const TWEEN = {
    Tween: class Tween extends TweenBase {
        _animator: android.animation.ValueAnimator;
        _animatorListener: android.animation.Animator.AnimatorListener;
        _animatorUpdateListener: android.animation.ValueAnimator.AnimatorUpdateListener;
        constructor(object) {
            super(object);
            this._animatorListener = new android.animation.Animator.AnimatorListener({
                onAnimationStart: (animator: android.animation.Animator) => {
                    CLog(CLogTypes.info, 'onAnimationStart');
                    if (this._onStartCallback !== null) {
                        this._onStartCallback(this._object);
                    }
                },
                onAnimationRepeat: (animator: android.animation.Animator) => {
                    CLog(CLogTypes.info, 'onAnimationRepeat');
                },
                onAnimationEnd: (animator: android.animation.Animator) => {
                    CLog(CLogTypes.info, 'onAnimationEnd');
                    this._onAnimationEnd();
                },
                onAnimationCancel: (animator: android.animation.Animator) => {
                    CLog(CLogTypes.info, 'onAnimationCancel');
                    this._onAnimationCancel();
                }
            });
            // this._animator.addListener(this._animatorListener);
            this._animatorUpdateListener = new android.animation.ValueAnimator.AnimatorUpdateListener({
                onAnimationUpdate: (animator: android.animation.ValueAnimator) => {
                    CLog(CLogTypes.info, 'onAnimationUpdate', animator.getAnimatedValue());
                    this._onAnimationUpdate(animator.getAnimatedValue());
                }
            });
        }
        startAnimator() {
            this.getOrCreateAnimator().start();
        }
        stopAnimator() {
            if (this._animator) {
                this._animator.end();
            }
        }
        endAnimator() {
            if (this._animator) {
                this._animator.end();
            }
        }
        cancelAnimator() {
            if (this._animator) {
                this._animator.cancel();
            }
        }
        pauseAnimator() {
            if (this._animator) {
                this._animator.pause();
            }
        }
        resumeAnimator() {
            if (this._animator) {
                this._animator.resume();
            }
        }

        isPlaying() {
            return this._animator && this._animator.isRunning();
        }
        isPaused() {
            return this._animator && !this._animator.isPaused();
        }
        getOrCreateAnimator() {
            if (!this._animator) {
                const nativeArray = Array.create('float', 2);
                nativeArray[0] = this._reversed ? 1 : 0;
                nativeArray[1] = this._reversed ? 0 : 1;
                this._animator = android.animation.ValueAnimator.ofFloat(nativeArray);
                this._animator.setInterpolator(new android.view.animation.LinearInterpolator());
                this._animator.setDuration(this._duration);
                this._animator.addListener(this._animatorListener);
                this._animator.addUpdateListener(this._animatorUpdateListener);
                // this._animator.setTarget(this);
            }
            return this._animator;
        }
        _onAnimationEnd() {
            this._animator.removeAllListeners();
            this._animator.removeAllUpdateListeners();
            this._animator = null;
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
