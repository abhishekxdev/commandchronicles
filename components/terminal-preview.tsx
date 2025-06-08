export function TerminalPreview() {
  return (
    <div className="relative w-full mx-auto terminal-glow" style={{ width: '90%', maxWidth: 'none' }}>
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-gray-800">
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-xs sm:text-sm">CommandChronicles Terminal</span>
          </div>
        </div>
        <div className="p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
          <div className="text-green-400 mb-2">$ cc search "docker build"</div>
          <div className="text-gray-300 mb-3 sm:mb-4">
            <div className="mb-2 text-xs sm:text-sm">📁 /home/projects/webapp • 2 hours ago</div>
            <div className="text-orange-400 break-all">docker build -t myapp:latest .</div>
            <div className="text-gray-500 text-xs">✓ Exit code: 0 • Duration: 45.2s</div>
          </div>
          <div className="text-gray-300 mb-3 sm:mb-4">
            <div className="mb-2 text-xs sm:text-sm">📁 /home/projects/api • 1 day ago</div>
            <div className="text-orange-400 break-all">docker build --no-cache -f Dockerfile.prod .</div>
            <div className="text-gray-500 text-xs">✓ Exit code: 0 • Duration: 2m 15s</div>
          </div>
          <div className="text-green-400">$ _</div>
        </div>
      </div>
    </div>
  )
}