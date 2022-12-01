# Prerequisites

- Git
- Node.js
- Internet browser (Firefox, Chrome, Edge... anything will work just fine)
- Any modern IDE (integrated development environment), e.g. VS Code will work great, and is free

# Setup

After cloning this project open console in the project directory and run:

```
npm install
```

# Running

During the development, the "developer server" needs to be started. It takes all of the project files, compiles them, and hosts a http server on local machine. In order to run that server you can either open a terminal and run:

```
npm start
```

Alternatively, if you are using VS Code, you can open debug view in the sidebar, on the "run and debug" dropdown choose "Launch development server", and click on the green "run" button next to it.

# Local application

Once the development server has been started, you can open http://localhost:5173/ in your browser. Any changes that are made in the code will be immediately detected by the server, compiled and the browser will refresh, showing the latest changes. There is no need to restart the development server or to refresh the website in the browser.

Alternatively, if you are using VS Code, you will have the option to open the application webpage and debug it right from the IDE. In order to do so, open the debug view in the sidebar, on the "run and debug" dropdown choose the browser that you want to use for debugging:

- Firefox
- Chrome
- Edge
