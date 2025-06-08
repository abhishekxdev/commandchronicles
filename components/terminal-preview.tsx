export function TerminalPreview() {
  return (
    <div className="relative w-full mx-auto px-4 sm:px-6" style={{ width: '100%', maxWidth: 'none' }}>
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden min-h-[400px]">
        <div className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-800">
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-xs sm:text-sm">CommandChronicles Terminal</span>
          </div>
        </div>
        <div className="relative terminal-content-fade">
          <div className="p-6 sm:p-8 lg:p-10 font-mono text-xs sm:text-sm overflow-x-auto space-y-6 text-center">
            <div className="text-green-400 mb-2">$ cc search "docker build"</div>
            <div className="text-gray-300 mb-4 sm:mb-6">
              <div className="mb-3 text-xs sm:text-sm">📁 /home/projects/webapp • 2 hours ago</div>
              <div className="text-orange-400 break-all">docker build -t myapp:latest .</div>
              <div className="text-gray-500 text-xs mt-2">✓ Exit code: 0 • Duration: 45.2s</div>
            </div>
            <div className="text-gray-300 mb-4 sm:mb-6">
              <div className="mb-3 text-xs sm:text-sm">📁 /home/projects/api • 1 day ago</div>
              <div className="text-orange-400 break-all">docker build --no-cache -f Dockerfile.prod .</div>
              <div className="text-gray-500 text-xs mt-2">✓ Exit code: 0 • Duration: 2m 15s</div>
            </div>
            <div className="text-gray-300 mb-4 sm:mb-6">
              <div className="mb-3 text-xs sm:text-sm">📁 /home/projects/microservices • 3 days ago</div>
              <div className="text-orange-400 break-all">docker build --platform linux/amd64 -t api-service:v1 .</div>
              <div className="text-gray-500 text-xs mt-2">✓ Exit code: 0 • Duration: 1m 45s</div>
            </div>
            <div className="text-green-400">$ _</div>
          </div>
        </div>
      </div>
    </div>
  )
}