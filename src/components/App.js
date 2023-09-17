import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Actions from '../actions/albumsActions';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.fetchAlbums());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="app-container" data-testid="app-container">
            Hello World
        </main>
    );
}

export default App;
