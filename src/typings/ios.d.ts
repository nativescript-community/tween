
declare class PMTweenBeat extends NSObject implements PMTweenTempoDelegate {

	static alloc(): PMTweenBeat; // inherited from NSObject

	static new(): PMTweenBeat; // inherited from NSObject

	paused: boolean;

	readonly tweens: NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { tempo: PMTweenTempo; });

	addTween(tween: NSObject): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithTempo(tempo: PMTweenTempo): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeTween(tween: NSObject): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	tempoBeatWithTimestamp(timestamp: number): void;
}

declare class PMTweenCATempo extends PMTweenTempo {

	static alloc(): PMTweenCATempo; // inherited from NSObject

	static new(): PMTweenCATempo; // inherited from NSObject

	static tempo(): PMTweenCATempo;

	displayLink: CADisplayLink;
}

declare var PMTweenDidCompleteNotification: string;

declare var PMTweenDidPauseNotification: string;

declare var PMTweenDidRepeatNotification: string;

declare var PMTweenDidResumeNotification: string;

declare var PMTweenDidReverseNotification: string;

declare var PMTweenDidStartNotification: string;

declare var PMTweenDidStepNotification: string;

declare var PMTweenDidStopNotification: string;

declare const enum PMTweenDirection {

	Forward = 0,

	Reverse = 1
}

declare class PMTweenEasingBack extends NSObject {

	static alloc(): PMTweenEasingBack; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingBack; // inherited from NSObject
}

declare class PMTweenEasingBounce extends NSObject {

	static alloc(): PMTweenEasingBounce; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingBounce; // inherited from NSObject
}

declare class PMTweenEasingCircular extends NSObject {

	static alloc(): PMTweenEasingCircular; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingCircular; // inherited from NSObject
}

declare class PMTweenEasingCubic extends NSObject {

	static alloc(): PMTweenEasingCubic; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingCubic; // inherited from NSObject
}

declare class PMTweenEasingElastic extends NSObject {

	static alloc(): PMTweenEasingElastic; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingElastic; // inherited from NSObject
}

declare class PMTweenEasingExpo extends NSObject {

	static alloc(): PMTweenEasingExpo; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingExpo; // inherited from NSObject
}

declare class PMTweenEasingLinear extends NSObject {

	static alloc(): PMTweenEasingLinear; // inherited from NSObject

	static easingNone(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingLinear; // inherited from NSObject
}

declare class PMTweenEasingQuadratic extends NSObject {

	static alloc(): PMTweenEasingQuadratic; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingQuadratic; // inherited from NSObject
}

declare class PMTweenEasingQuartic extends NSObject {

	static alloc(): PMTweenEasingQuartic; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingQuartic; // inherited from NSObject
}

declare class PMTweenEasingQuintic extends NSObject {

	static alloc(): PMTweenEasingQuintic; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingQuintic; // inherited from NSObject
}

declare class PMTweenEasingSine extends NSObject {

	static alloc(): PMTweenEasingSine; // inherited from NSObject

	static easingIn(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingInOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static easingOut(): (p1: number, p2: number, p3: number, p4: number) => number;

	static new(): PMTweenEasingSine; // inherited from NSObject
}

declare class PMTweenGroup extends NSObject implements PMTweenTempoDelegate, PMTweening {

	static alloc(): PMTweenGroup; // inherited from NSObject

	static new(): PMTweenGroup; // inherited from NSObject

	completeBlock: (p1: NSObject) => void;

	readonly cyclesCompletedCount: number;

	delay: number;

	numberOfRepeats: number;

	pauseBlock: (p1: NSObject) => void;

	repeatCycleBlock: (p1: NSObject) => void;

	repeating: boolean;

	resumeBlock: (p1: NSObject) => void;

	reverseBlock: (p1: NSObject) => void;

	startBlock: (p1: NSObject) => void;

	stopBlock: (p1: NSObject) => void;

	syncTweensWhenReversing: boolean;

	readonly tweenDirection: PMTweenDirection;

	readonly tweenState: PMTweenState;

	readonly tweens: NSArray<any>;

	updateBlock: (p1: NSObject) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	reversing: boolean; // inherited from PMTweening

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	tempo: PMTweenTempo; // inherited from PMTweening

	readonly  // inherited from NSObjectProtocol

	constructor(o: { tweens: NSArray<any> | any[]; options: PMTweenOptions; });

	addTween(tween: NSObject): void;

	addTweenUseTweenTempo(tween: NSObject, useTweenTempo: boolean): void;

	addTweens(tweens: NSArray<any> | any[]): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithTweensOptions(tweens: NSArray<any> | any[], options: PMTweenOptions): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseTween(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeTween(tween: NSObject): void;

	respondsToSelector(aSelector: string): boolean;

	resumeTween(): void;

	retainCount(): number;

	self(): this;

	startTween(): void;

	stopTween(): void;

	tempoBeatWithTimestamp(timestamp: number): void;

	updateWithTimeInterval(currentTime: number): void;
}

declare var PMTweenHalfCompletedNotification: string;

declare class PMTweenObjectUpdater extends NSObject implements PMTweenObjectUpdating {

	static alloc(): PMTweenObjectUpdater; // inherited from NSObject

	static new(): PMTweenObjectUpdater; // inherited from NSObject

	static updater(): PMTweenObjectUpdater;

	additiveUpdates: boolean; // inherited from PMTweenObjectUpdating

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	replaceObjectNewPropertyValuePropertyKeyPath(objectToUpdate: NSObject, propertyValue: number, propertyKeyPath: string): NSObject;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	supportsObject(object: NSObject): boolean;
}

interface PMTweenObjectUpdating extends NSObjectProtocol {

	additiveUpdates: boolean;

	replaceObjectNewPropertyValuePropertyKeyPath(objectToUpdate: NSObject, propertyValue: number, propertyKeyPath: string): NSObject;

	supportsObject(object: NSObject): boolean;
}
declare var PMTweenObjectUpdating: {

	prototype: PMTweenObjectUpdating;
};

declare const enum PMTweenOptions {

	None = 0,

	Repeat = 1,

	Reverse = 2,

	ResetStateOnRepeat = 4
}

interface PMTweenPhysicsSolving extends NSObjectProtocol {

	friction: number;

	velocity: number;

	pauseSystem(): void;

	resetSystem(): void;

	resumeSystem(): void;

	reverseDirection(): void;

	solveForPositionCurrentTime(position: number, currentTime: number): number;
}
declare var PMTweenPhysicsSolving: {

	prototype: PMTweenPhysicsSolving;
};

declare class PMTweenPhysicsSystem extends NSObject implements PMTweenPhysicsSolving {

	static alloc(): PMTweenPhysicsSystem; // inherited from NSObject

	static new(): PMTweenPhysicsSystem; // inherited from NSObject

	static system(): PMTweenPhysicsSystem;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	friction: number; // inherited from PMTweenPhysicsSolving

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	velocity: number; // inherited from PMTweenPhysicsSolving

	readonly  // inherited from NSObjectProtocol

	constructor(o: { velocity: number; friction: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithVelocityFriction(velocity: number, friction: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseSystem(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetSystem(): void;

	respondsToSelector(aSelector: string): boolean;

	resumeSystem(): void;

	retainCount(): number;

	reverseDirection(): void;

	self(): this;

	solveForPositionCurrentTime(position: number, currentTime: number): number;
}

declare class PMTweenPhysicsUnit extends NSObject implements PMTweenTempoDelegate, PMTweening {

	static alloc(): PMTweenPhysicsUnit; // inherited from NSObject

	static new(): PMTweenPhysicsUnit; // inherited from NSObject

	completeBlock: (p1: NSObject) => void;

	readonly currentValue: number;

	readonly cycleProgress: number;

	readonly cyclesCompletedCount: number;

	delay: number;

	friction: number;

	numberOfRepeats: number;

	pauseBlock: (p1: NSObject) => void;

	physicsSystem: NSObject;

	physicsTimerInterval: number;

	repeatCycleBlock: (p1: NSObject) => void;

	repeating: boolean;

	resumeBlock: (p1: NSObject) => void;

	reverseBlock: (p1: NSObject) => void;

	startBlock: (p1: NSObject) => void;

	startingValue: number;

	stopBlock: (p1: NSObject) => void;

	structValueUpdater: NSObject;

	readonly targetObject: NSObject;

	readonly targetProperty: NSObject;

	readonly tweenDirection: PMTweenDirection;

	readonly tweenProgress: number;

	readonly tweenState: PMTweenState;

	updateBlock: (p1: NSObject) => void;

	velocity: number;

	velocityDecayLimit: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	reversing: boolean; // inherited from PMTweening

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	tempo: PMTweenTempo; // inherited from PMTweening

	readonly  // inherited from NSObjectProtocol

	constructor(o: { object: NSObject; propertyKeyPath: string; startingValue: number; velocity: number; friction: number; options: PMTweenOptions; });

	constructor(o: { property: NSValue; startingValue: number; velocity: number; friction: number; options: PMTweenOptions; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithObjectPropertyKeyPathStartingValueVelocityFrictionOptions(object: NSObject, propertyKeyPath: string, startingValue: number, velocity: number, friction: number, options: PMTweenOptions): this;

	initWithPropertyStartingValueVelocityFrictionOptions(property: NSValue, startingValue: number, velocity: number, friction: number, options: PMTweenOptions): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseTween(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	resumeTween(): void;

	retainCount(): number;

	self(): this;

	startTween(): void;

	stopTween(): void;

	tempoBeatWithTimestamp(timestamp: number): void;

	updateWithTimeInterval(currentTime: number): void;
}

declare class PMTweenSequence extends NSObject implements PMTweenTempoDelegate, PMTweening {

	static alloc(): PMTweenSequence; // inherited from NSObject

	static new(): PMTweenSequence; // inherited from NSObject

	completeBlock: (p1: NSObject) => void;

	readonly cyclesCompletedCount: number;

	delay: number;

	numberOfRepeats: number;

	pauseBlock: (p1: NSObject) => void;

	repeatCycleBlock: (p1: NSObject) => void;

	repeating: boolean;

	resumeBlock: (p1: NSObject) => void;

	reverseBlock: (p1: NSObject) => void;

	reversingMode: PMTweenSequenceReversingMode;

	readonly sequenceSteps: NSArray<any>;

	startBlock: (p1: NSObject) => void;

	stepBlock: (p1: NSObject) => void;

	stopBlock: (p1: NSObject) => void;

	readonly tweenDirection: PMTweenDirection;

	readonly tweenState: PMTweenState;

	updateBlock: (p1: NSObject) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	reversing: boolean; // inherited from PMTweening

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	tempo: PMTweenTempo; // inherited from PMTweening

	readonly  // inherited from NSObjectProtocol

	constructor(o: { sequenceSteps: NSArray<any> | any[]; options: PMTweenOptions; });

	addSequenceStepUseTweenTempo(sequenceStep: NSObject, useTweenTempo: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentSequenceStep(): NSObject;

	initWithSequenceStepsOptions(sequenceSteps: NSArray<any> | any[], options: PMTweenOptions): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseTween(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeSequenceStep(sequenceStep: NSObject): void;

	respondsToSelector(aSelector: string): boolean;

	resumeTween(): void;

	retainCount(): number;

	self(): this;

	startTween(): void;

	stopTween(): void;

	tempoBeatWithTimestamp(timestamp: number): void;

	updateWithTimeInterval(currentTime: number): void;
}

declare const enum PMTweenSequenceReversingMode {

	Contiguous = 0,

	Noncontiguous = 1
}

declare const enum PMTweenState {

	Tweening = 0,

	Stopped = 1,

	Paused = 2,

	Delayed = 3
}

declare class PMTweenSupport extends NSObject {

	static addTween(tween: NSObject): number;

	static alloc(): PMTweenSupport; // inherited from NSObject

	static currentTweenOperationID(): number;

	static getterForPropertyName(propertyName: string): string;

	static isValueObjCType(value: NSValue, typeToMatch: string | interop.Pointer | interop.Reference<any>): boolean;

	static new(): PMTweenSupport; // inherited from NSObject

	static objectTweens(): NSHashTable<any>;

	static removeTween(tween: NSObject): void;

	static setterForPropertyName(propertyName: string): string;

	static targetValueForObjectKeyPath(object: NSObject, keyPath: string): NSValue;
}

declare class PMTweenTempo extends NSObject {

	static alloc(): PMTweenTempo; // inherited from NSObject

	static new(): PMTweenTempo; // inherited from NSObject

	delegate: PMTweenTempoDelegate;
}

interface PMTweenTempoDelegate extends NSObjectProtocol {

	tempoBeatWithTimestamp(timestamp: number): void;
}
declare var PMTweenTempoDelegate: {

	prototype: PMTweenTempoDelegate;
};

declare class PMTweenUnit extends NSObject implements PMTweenTempoDelegate, PMTweening {

	static alloc(): PMTweenUnit; // inherited from NSObject

	static new(): PMTweenUnit; // inherited from NSObject

	additive: boolean;

	completeBlock: (p1: NSObject) => void;

	readonly currentValue: number;

	readonly cycleProgress: number;

	readonly cyclesCompletedCount: number;

	delay: number;

	duration: number;

	easingBlock: (p1: number, p2: number, p3: number, p4: number) => number;

	endingValue: number;

	numberOfRepeats: number;

	readonly operationID: number;

	pauseBlock: (p1: NSObject) => void;

	readonly propertyKeyPath: string;

	repeatCycleBlock: (p1: NSObject) => void;

	repeating: boolean;

	resumeBlock: (p1: NSObject) => void;

	reverseBlock: (p1: NSObject) => void;

	reverseEasingBlock: (p1: number, p2: number, p3: number, p4: number) => number;

	startBlock: (p1: NSObject) => void;

	startingValue: number;

	stopBlock: (p1: NSObject) => void;

	structValueUpdater: NSObject;

	readonly targetObject: NSObject;

	readonly targetProperty: NSObject;

	readonly tweenDirection: PMTweenDirection;

	readonly tweenProgress: number;

	readonly tweenState: PMTweenState;

	updateBlock: (p1: NSObject) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	reversing: boolean; // inherited from PMTweening

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	tempo: PMTweenTempo; // inherited from PMTweening

	readonly  // inherited from NSObjectProtocol

	constructor(o: { object: NSObject; propertyKeyPath: string; startingValue: number; endingValue: number; duration: number; options: PMTweenOptions; easingBlock: (p1: number, p2: number, p3: number, p4: number) => number; });

	constructor(o: { property: NSValue; startingValue: number; endingValue: number; duration: number; options: PMTweenOptions; easingBlock: (p1: number, p2: number, p3: number, p4: number) => number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithObjectPropertyKeyPathStartingValueEndingValueDurationOptionsEasingBlock(object: NSObject, propertyKeyPath: string, startingValue: number, endingValue: number, duration: number, options: PMTweenOptions, easingBlock: (p1: number, p2: number, p3: number, p4: number) => number): this;

	initWithPropertyStartingValueEndingValueDurationOptionsEasingBlock(property: NSValue, startingValue: number, endingValue: number, duration: number, options: PMTweenOptions, easingBlock: (p1: number, p2: number, p3: number, p4: number) => number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseTween(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	resumeTween(): void;

	retainCount(): number;

	self(): this;

	startTween(): void;

	stopTween(): void;

	tempoBeatWithTimestamp(timestamp: number): void;

	updateWithTimeInterval(currentTime: number): void;
}

declare var PMTweenVersionNumber: number;

declare var PMTweenVersionString: interop.Reference<number>;

interface PMTweening extends NSObjectProtocol {

	reversing: boolean;

	tempo: PMTweenTempo;

	pauseTween(): void;

	resumeTween(): void;

	startTween(): void;

	stopTween(): void;

	updateWithTimeInterval(currentTime: number): void;
}
declare var PMTweening: {

	prototype: PMTweening;
};
