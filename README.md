# VS Code - Debug node project and javascript client side
A small project to show how to debug a node project and javascript client side in the same time with Visual Studio Code in Google Chrome browser

As a bonus, sample code is using webpack in watch mode to recompile client side on change withour relaunching debug mode.

## Mandatory tools
* Visual Studio Code
* Extension Debugger for Chrome ([sources](https://github.com/Microsoft/vscode-chrome-debug))

## Launch.json
This config is running a script described in package.json with npm, and then chrome is launching with the specified url:
```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Launch via NPM",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceRoot}",
        "runtimeExecutable": "npm",
        "runtimeArgs": [
            "run-script", "debug"
        ],
        "sourceMaps": true,
        "smartStep": true,
        "port": 5858,
        "skipFiles": [
            "node_modules/**"
        ]
      },
      {
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "webRoot": "${workspaceRoot}",
        "url": "http://localhost:3000",
        "userDataDir": "${workspaceRoot}/.vscode/chrome",
        "sourceMaps": true,
        "smartStep": true,
        "internalConsoleOptions": "openOnSessionStart",
        "skipFiles": [
            "node_modules/**"
        ],
        "sourceMapPathOverrides": {
            "webpack:///*": "${webRoot}/*"
        }
      },
      {
        "type": "chrome",
        "request": "attach",
        "name": "Attach Chrome",
        "port": 9222,
        "webRoot": "${workspaceRoot}",
        "sourceMaps": true,
        "smartStep": true,
        "internalConsoleOptions": "openOnSessionStart",
        "skipFiles": [
            "node_modules/**"
        ],
        "sourceMapPathOverrides": {
            "webpack:///*": "${webRoot}/*"
        }
      }
    ],
    "compounds": [
      {
        "name": "Node + Client",
        "configurations": ["Launch via NPM", "Chrome"]
      }
    ]
}
```

You can easily switch to "Attach Chrome" instead of launching Chrome each time. But in order to make it work, you first have to launch Chrome in debug mode:

### Windows

* Right click the Chrome shortcut, and select properties
* In the "target" field, append `--remote-debugging-port=9222`
* Or in a command prompt, execute `<path to chrome>/chrome.exe --remote-debugging-port=9222`

### macOS

* In a terminal, execute `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222`

### Linux

* In a terminal, launch `google-chrome --remote-debugging-port=9222`
