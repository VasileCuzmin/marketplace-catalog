import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
  expanded: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null, expanded: false };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  render() {
    const { error, expanded } = this.state;

    if (error) {
      return (
        <div className="flex items-center justify-center px-4 py-24">
          <div className="bg-white rounded-2xl shadow-card p-10 max-w-lg w-full text-center">
            <p className="text-5xl mb-6">🌿</p>
            <h1 className="text-xl font-bold text-ps-inky-blue mb-1">Something went wrong</h1>
            <p className="text-sm text-ps-purple-gray mb-6">
              We couldn't load this page.
            </p>

            <button
              onClick={() => this.setState({ expanded: !expanded })}
              className="text-xs text-ps-purple-gray hover:text-ps-inky-blue transition-colors mb-2 flex items-center gap-1 mx-auto"
            >
              <span>{expanded ? '▾' : '▸'}</span>
              {expanded ? 'Hide' : 'Show'} error details
            </button>

            {expanded && (
              <p className="font-mono text-xs text-left bg-ps-surface text-ps-inky-blue rounded-lg px-4 py-3 mb-6 break-all">
                {error.message}
              </p>
            )}

            <div className={`flex gap-3 justify-center ${expanded ? '' : 'mt-6'}`}>
              <button onClick={() => window.history.back()} className="btn-secondary">
                ← Go back
              </button>
              <button
                onClick={() => this.setState({ error: null, expanded: false }, () => window.location.reload())}
                className="btn-primary"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
