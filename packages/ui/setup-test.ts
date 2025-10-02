import '@testing-library/jest-dom';

class ResizeObserverMock {
	observe(): void {}
	unobserve(): void {}
	disconnect(): void {}
	takeRecords(): ResizeObserverEntry[] {
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
