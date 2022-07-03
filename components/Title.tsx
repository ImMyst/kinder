/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'

export const Title = () => {
    return (
        <div class={tw`text-2xl mb-4 font-main font-bold`}>
            Fresh Github Finder
        </div>
    )
}
