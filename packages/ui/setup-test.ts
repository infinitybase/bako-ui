import '@testing-library/jest-dom';

class ResizeObserverMock {
	observe(): void {}
	unobserve(): void {}
	disconnect(): void {}
	takeRecords(): ResizeObserverEntry[] {
		return [];
	}
}

class IntersectionObserverMock {
	readonly root: Element | null = null;
	readonly rootMargin: string = '';
	readonly thresholds: ReadonlyArray<number> = [];

	constructor() {}

	observe(): void {}
	unobserve(): void {}
	disconnect(): void {}
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
}

if (typeof globalThis.ResizeObserver === 'undefined') {
	Object.defineProperty(globalThis, 'ResizeObserver', {
		configurable: true,
		writable: true,
		value: ResizeObserverMock,
	});
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
	Object.defineProperty(globalThis, 'IntersectionObserver', {
		configurable: true,
		writable: true,
		value: IntersectionObserverMock,
	});
}
