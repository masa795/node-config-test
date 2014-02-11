
	set NODE_PATH="C:\node\node_modules"
	set NODE_ENV="development"
	cd C:\node
	set NODE_CMD=node
	set SERVER_HOST="localhost"

	SET CONFIG=C:\node\config\development.json


node example.js  --NODE_ENV=%NODE_ENV% --NODE_PATH=%NODE_PATH% --SERVER_HOST=%SERVER_HOST%



pause