/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'
import { SearchIcon } from '../components/icons/SearchIcon.tsx'

const Search = () => {
    return (
        <div class={tw`bg-accent rounded-xl font-main`}>
            <form method="get" class={tw`flex items-center p-2 w-full`}>
                <div class={tw`mx-4`}>
                    <SearchIcon color={'fill-main'} />
                </div>
                <input class={tw`bg-transparent w-full`} type="text" placeholder="Search Github username..." />
                <button type="submit" class={tw`rounded-xl bg-main py-3 px-6 flex justify-end`}>Search</button>
            </form>
        </div>
    )
}

export default Search;
