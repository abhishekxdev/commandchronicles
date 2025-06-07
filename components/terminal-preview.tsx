export function TerminalPreview() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 py-3 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm">CommandChronicles Terminal</span>
          </div>
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="text-green-400 mb-2">$ cc search "docker build"</div>
          <div className="text-gray-300 mb-4">
            <div className="mb-2">📁 /home/projects/webapp • 2 hours ago</div>
            <div className="text-orange-400">docker build -t myapp:latest .</div>
            <div className="text-gray-500 text-xs">✓ Exit code: 0 • Duration: 45.2s</div>
          </div>
          <div className="text-gray-300 mb-4">
            <div className="mb-2">📁 /home/projects/api • 1 day ago</div>
            <div className="text-orange-400">docker build --no-cache -f Dockerfile.prod .</div>
            <div className="text-gray-500 text-xs">✓ Exit code: 0 • Duration: 2m 15s</div>
          </div>
          <div className="text-green-400">$ _</div>
        </div>
      </div>
    </div>
  )
}
