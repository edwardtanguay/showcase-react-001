(() => {
    class SimpleAsyncTask {
        constructor(options) {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    options.success('Task completed!');
                } else {
                    options.error(new Error('Task failed!'));
                }
            }, 1000);
        }
    }

    function runTask() {
        return new Promise((resolve, reject) => {
            new SimpleAsyncTask({
                success: (result) => resolve(result),
                error: (err) => reject(err),
            });
        });
    }

    async function main() {
        try {
            const result = await runTask();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    main();

})();