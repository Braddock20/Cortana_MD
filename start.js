/**
 * CORTANA MD - Shell Loader
 * Imports the updater and the NPM bot engine safely.
 */

// 1. Start the Auto Updater
require('./auto-updater');

// 2. Try loading the engine
try {
    require('@depro-tech/cortana-md');
} catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
        console.log("⏳ Waiting for auto-updater to install the bot engine...");
        // The process stays alive because auto-updater.js has active intervals/timeouts
    } else {
        // If it's a different error (like a syntax error inside the engine), throw it
        throw error;
    }
}