import { onMount } from 'svelte';
import { foodImages } from './food.js';
import { careImages } from './care.js';

/**
 * Drives the hero image grid: all 4 slots draw from one active pool
 * (food or care). The pool swaps on a randomized interval, so the grid
 * blurs through a run of food shots, then a run of care shots, etc.
 *
 * Returns a reactive controller. Pass `controller.pool` straight into
 * each ImageSlot's `images` prop — ImageSlot re-anchors when the ref
 * changes, so the swap triggers the blur transition immediately.
 */
export function createHeroCycle({
  swapMin = 14000,
  swapMax = 22000,
  swapProb = 0.7
} = {}) {
  const pools = [foodImages(), careImages()].filter((p) => p.length > 0);
  const ctrl = $state({ pool: pools[0] ?? [] });

  onMount(() => {
    if (pools.length < 2) return;
    let timer;
    const schedule = () => {
      const delay = swapMin + Math.random() * (swapMax - swapMin);
      timer = setTimeout(() => {
        if (Math.random() < swapProb) {
          const next = pools.find((p) => p !== ctrl.pool);
          if (next) ctrl.pool = next;
        }
        schedule();
      }, delay);
    };
    schedule();
    return () => clearTimeout(timer);
  });

  return ctrl;
}
