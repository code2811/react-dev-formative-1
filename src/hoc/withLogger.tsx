import { useEffect, type ComponentType } from 'react';

// Wrap a component and log when it mounts or unmounts.
export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  displayName?: string,
) {
  const name = displayName ?? WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';

  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${name} mounted`);
      return () => {
        console.log(`[withLogger] ${name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  ComponentWithLogger.displayName = `withLogger(${name})`;
  return ComponentWithLogger;
}
