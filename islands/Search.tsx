/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'
import { SearchIcon } from '../components/icons/SearchIcon.tsx'

const Search = () => {
    return (
        <div class={tw`bg-accent rounded-xl font-main h-full`}>
            <form action="/" method="get" class={tw`flex items-center p-2 w-full h-full`}>
                <div class={tw`ml-4 mr-6 -mt-1`}>
                    <SearchIcon />
                </div>
                <input class={tw`border-none px-4 focus:outline-none focus:bg-primary h-12 rounded-xl mr-4 bg-transparent w-full`} type="text" placeholder="Search Github username..." />
                <button type="submit" class={tw`rounded-xl bg-main py-3 px-6 flex hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-main/10 justify-end`}>Search</button>
            </form>
        </div>
    )
}

export default Search;
