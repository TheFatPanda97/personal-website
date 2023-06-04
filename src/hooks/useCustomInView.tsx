import { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const useCustomInView = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView();

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node: any) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  return { setRefs, ref, inView };
};

export default useCustomInView;
