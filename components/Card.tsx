/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'

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
        <div class={tw`bg-accent p-4 rounded-lg font-main`}>
            <img src={imageUrl} alt={`${username} profile image`} />
            <div>
                <div>
                    <h2 class={tw`text-3xl font-bold`}>{name}</h2>
                    <span class={tw`text-gray-400`}>Joined {createdAt}</span>
                </div>
                <a href={`https://github.com/${username}`} target="_target" class={tw`text-main`}>@{username}</a>
                <p class={tw`text-gray-400`}>
                    {bio ?? 'Ce profil n\'a pas de bio'}
                </p>
            </div>
            <div class={tw`second-card py-4 px-8 rounded-md w-full`}>
                <div class={tw`flex justify-between flex-wrap w-3/4`}>
                    <div>
                        <p class={tw`text-gray-300`}>Repos</p>
                        <p>{information.repos ?? '0'}</p>
                    </div>
                    <div>
                        <p class={tw`text-gray-300`}>Followers</p>
                        <p>{information.followers ?? '0'}</p>
                    </div>
                    <div>
                        <p class={tw`text-gray-300`}>Following</p>
                        <p>{information.following ?? '0'}</p>
                    </div>
                </div>
            </div>
            <div>
                <span class={tw`${location ? '' : 'text-gray-400'}`}>{location ?? 'ND'}</span>
                <span class={tw`${twitter ? '' : 'text-gray-400'}`}>{twitter ?? 'ND'}</span>
                <span class={tw`${website ? '' : 'text-gray-400'}`}>{website ?? 'ND'}</span>
                <span class={tw`${company ? '' : 'text-gray-400'}`}>{company ?? 'ND'}</span>
            </div>
        </div>
    )
}
