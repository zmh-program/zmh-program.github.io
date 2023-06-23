function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

export function scrollTo(from: number, to: number, element: HTMLElement, duration: number = 1000, hook?: () => any) {
  const start = performance.now();
  function animate() {
    const elapsed = performance.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const position = from + (to - from) * easeInOut(progress);
    console.log(position);
    element.scrollTo(0, position);
    hook?.();
    if (progress < 1) requestAnimationFrame(animate);
  }
  animate();
}
