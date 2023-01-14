
// @flow 
import * as React from 'react';

export const Footer = (props) => {
    return (
        <div>
            <footer className="p-4 space-y-1 flex flex-col items-center border-t-[1px] border-gray-200 shadow-md md:flex-row md:justify-between md:p-6 dark:bg-gray-800 w-full">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span className="hover:underline hover:cursor-pointer">WatchFilms™</span>. All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};