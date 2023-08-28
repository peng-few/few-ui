module.exports = {
    'packages/**/*.{ts,tsx}': files => {
        return `nx affected --target=typecheck --files=${files.join(',')}`;
    },
    'packages/**/*.{js,ts,jsx,tsx,json}': [
        files => `nx affected:lint --files=${files.join(',')}`,
        files => `nx format:write --files=${files.join(',')}`,
    ],
    'packages/**/*.spec.{ts,tsx,js}': files => {
        return `nx affected -t test --files=${files.join(" ")}`;
    },
};