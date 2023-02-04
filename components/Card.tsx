import { tw } from "twind";
import * as Icon from "./Icons.tsx";

type TProfileInfo = {
  repos: number;
  followers: number;
  following: number;
};

type TProps = {
  imageUrl: string;
  name: string;
  username: string;
  createdAt: string;
  bio?: string;
  information: TProfileInfo;
  location?: string;
  twitter?: string;
  website?: string;
  company?: string;
};

export const Card = (props: TProps) => {
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
    website,
  } = props;

  return (
    <div class="bg-accent px-8 py-10 rounded-xl space-x-8 font-main flex w-full">
      <div class="w-40 h-40">
        <img
          src={imageUrl}
          alt={`${username} profile image`}
          class="rounded-full"
        />
      </div>
      <div class="w-full">
        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <h2 class="text-3xl font-bold w-1/2 truncate">{name}</h2>
            <span class="text-gray-200">Joined {createdAt}</span>
          </div>
          <a
            class="text-main mt-1 hover:underline w-fit"
            href={`https://github.com/${username}`}
            target="_target"
          >
            @{username}
          </a>
          <p class="text-gray-400 mb-6 mt-4">
            {bio ?? "This profile has no bio"}
          </p>
        </div>
        <div class="bg-primary py-4 px-8 rounded-xl w-full">
          <div class="grid grid-cols-3 gap-32 w-3/4">
            <div class="w-full">
              <p class="text-gray-400 text-sm">Repos</p>
              <p class="font-bold text-2xl">{information.repos}</p>
            </div>
            <div class="w-full">
              <p class="text-gray-400 text-sm">Followers</p>
              <p class="font-bold text-2xl">{information.followers}</p>
            </div>
            <div class="w-full">
              <p class="text-gray-400 text-sm">Following</p>
              <p class="font-bold text-2xl">{information.following}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 grid-row-2 gap-4 mt-8 w-full">
          <div class={tw`flex space-x-4 ${location ? "" : "text-gray-400"}`}>
            <Icon.Location />
            <span>{location ?? "Not Available"}</span>
          </div>
          <div class={tw`flex space-x-4 ${twitter ? "" : "text-gray-400"}`}>
            <Icon.Twitter />
            {twitter ? (
              <a
                class="hover:underline"
                href={`https://twitter.com/${twitter}`}
                target="_blank"
              >
                @{twitter}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>
          <div class={tw`flex space-x-4 ${website ? "" : "text-gray-400"}`}>
            <Icon.Site />
            {website ? (
              <a class="hover:underline" href={website} target="_blank">
                {website.split("/")[2]}
              </a>
            ) : (
              <span>Not Available</span>
            )}
          </div>
          <div class={tw`flex space-x-4 ${company ? "" : "text-gray-400"}`}>
            <Icon.Company />
            <span>{company ?? "Not Available"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
