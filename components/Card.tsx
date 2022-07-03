/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'
import { LocationIcon } from './icons/LocationIcon.tsx'
import { TwitterIcon } from './icons/TwitterIcon.tsx'
import { SiteIcon } from './icons/SiteIcon.tsx'
import { CompanyIcon } from './icons/CompanyIcon.tsx'

interface ProfileInfo {
    repos: number;
    followers: number;
    following: number;
}

interface Props {
    imageUrl: string;
    name: string;
    username: string;
    createdAt: string;
    bio?: string;
    information: ProfileInfo;
    location?: string;
    twitter?: string;
    website?: string;
    company?: string; 
}

export const Card = (props: Props) => {

    const {
        bio,
        createdAt,
        imageUrl,
        information,
        name,
        username,
        company,
        location,
        twitter,
        website
    } = props;

    return (
        <div class={tw`bg-accent px-8 py-10 rounded-xl font-main flex w-full`}>
            <img src={imageUrl} alt={`${username} profile image`} />
            <div class={tw`w-full`}>
                <div class={tw`flex flex-col`}>
                    <div class={tw`flex items-center justify-between`}>
                        <h2 class={tw`text-3xl font-bold`}>{name}</h2>
                        <span class={tw`text-gray-400`}>Joined {createdAt}</span>
                    </div>
                    <a
                        class={tw`text-main mt-1 w-fit`}
                        href={`https://github.com/${username}`}
                        target="_target"
                    >
                        @{username}
                    </a>
                    <p class={tw`text-gray-400 mb-6 mt-4`}>
                        {bio ?? 'This profile has no bio'}
                    </p>
                </div>
                <div class={tw`second-card py-4 px-8 rounded-xl w-full`}>
                    <div class={tw`grid grid-cols-3 gap-32 w-3/4`}>
                        <div class={tw`w-full`}>
                            <p class={tw`text-gray-400`}>Repos</p>
                            <p>{information.repos}</p>
                        </div>
                        <div class={tw`w-full`}>
                            <p class={tw`text-gray-400`}>Followers</p>
                            <p>{information.followers}</p>
                        </div>
                        <div class={tw`w-full`}>
                            <p class={tw`text-gray-400`}>Following</p>
                            <p>{information.following}</p>
                        </div>
                    </div>
                </div>
                <div class={tw`grid grid-cols-2 grid-row-2 gap-4 mt-8 w-full`}>
                    <div class={tw`flex space-x-4 ${location ? '' : 'text-gray-400'}`}>
                        <LocationIcon />
                        <span>{location ?? 'Not Available'}</span>
                    </div>
                    <div class={tw`flex space-x-4 ${twitter ? '' : 'text-gray-400'}`}>
                        <TwitterIcon />
                        <span>{twitter ?? 'Not Available'}</span>
                    </div>
                    <div class={tw`flex space-x-4 ${website ? '' : 'text-gray-400'}`}>
                        <SiteIcon />
                        {
                            website
                            ? <a href={website}>{website}</a>
                            : <span>Not Available</span>
                        }
                    </div>
                    <div class={tw`flex space-x-4 ${company ? '' : 'text-gray-400'}`}>
                        <CompanyIcon />
                        <span>{company ?? 'Not Available'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
