import { useEffect, type ComponentType } from 'react';

// A simple Higher-Order Component: it wraps any component and logs to the
// console when the wrapped component mounts and unmounts. This demonstrates
// the HOC pattern of taking a component in and returning an enhanced
// component out, without altering the wrapped component's own code.
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
