export const authMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith('auth/')) {
        const authState = store.getState().auth;
        localStorage.setItem('spotify-web-player.accesstoken', authState.token)
    }
    return result
}