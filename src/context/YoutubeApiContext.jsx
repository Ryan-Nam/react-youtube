import { createContext, useContext } from 'react';
import Youtube from '../api/Youtube';
import FakeYoutube from '../api/fake-youtube';

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube//new Youtube();

//umbrealla component
export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi(){
    return useContext(YoutubeApiContext);
}