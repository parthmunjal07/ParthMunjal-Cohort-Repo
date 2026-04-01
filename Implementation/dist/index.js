import { createServer } from "node:http";
import { createApplication } from './app/index.js';
async function main() {
    try {
        const server = createServer(createApplication());
        const PORT = 8080;
        server.listen(PORT, () => {
            console.log(`HTTP Server running on Port:${PORT}`);
        });
    }
    catch (error) {
        console.log("Error starting the server");
        throw error;
    }
}
main();
//# sourceMappingURL=index.js.map