import {
    TbBrandGithub,
    TbBrandSteam,
    TbBrandX,
    TbCpu,
    TbSourceCode,
    TbAssembly,
} from 'react-icons/tb'
import { SiVrchat } from 'react-icons/si'
import Favicon from './assets/favicon.ico'
import ProfilePictureOriginal from './assets/images/akula-arius.jpg'
import ProfilePictureAvif from './assets/images/akula-arius.jpg?format=avif'
import ProfilePictureJpeg from './assets/images/akula-arius.jpg?format=jpeg'
import ProfilePicturePng from './assets/images/akula-arius.jpg?format=png'
import ProfilePictureWebp from './assets/images/akula-arius.jpg?format=webp'
import { ProfileNameStandout, ProfilePictureSources } from './components/display/header'
import { Description, DescriptionTitle, Paragraph } from './components/typography'
import PanelBackground from './assets/images/blueprint-panels.svg'
import FooterBackground from './assets/images/blueprint-footer.svg'
import PageBackground from './assets/images/blueprint-bg.svg'
import { Row } from './components/layout'

export const PANEL_BACKGROUND = PanelBackground
export const FOOTER_BACKGROUND = FooterBackground
export const PAGE_BACKGROUND = PageBackground
export const FAVICON = Favicon

export const PROFILE_PICTURE: ProfilePictureSources = {
    src: ProfilePictureOriginal,
    avif: ProfilePictureAvif,
    jpeg: ProfilePictureJpeg,
    png: ProfilePicturePng,
    webp: ProfilePictureWebp,
}

export const PROFILE_NAME = (
    <>
        {/* amphi[ne]ko */}
        <ProfileNameStandout
            backgroundColor="hsla(0, 100%, 82%, 0.25)"
            href="https://en.wikipedia.org/wiki/Kamov_Ka-50"
            hoverRuby="🚁"
            hoverColor="hsla(0, 35%, 57%, 0.75)"
            ruby="10"
        >
            Akula
        </ProfileNameStandout>
        <wbr /> Arius
    </>
)

export const PROFILE_TITLE = 'Akula Arius'

export const PROFILE_TAGS: ProfileHeaderTagGroup[] = [
    {
        title: 'also-known-as',
        tags: [
            {
                tag: '雪野シグレ',
                comment: 'OC',
            },
            {
                tag: 'PhotonSPK',
                comment: '2020',
            },
        ],
    },
    {
        title: 'area-of-work',
        tags: [
            {
                tag: 'MFG',
                icon: <TbAssembly />,
            },
            {
                tag: 'EE',
                icon: <TbCpu />,
            },
            {
                tag: 'SWE',
                icon: <TbSourceCode />,
            },
        ],
    },
    {
        title: 'languages',
        tags: [
            {
                tag: 'zh-CN',
                comment: 'native',
            },
            {
                tag: 'en-US',
                comment: 'CET-6',
            },
            {
                tag: 'ja',
                comment: 'learning',
            },
        ],
    },
]

export const ACCOUNTS: Accounts[] = [
    {
        type: 'oss',
        accounts: [
            {
                platform: 'GitHub',
                name: 'Akula Arius',
                url: 'https://github.com/PhotonSPK/',
                icon: <TbBrandGithub />,
                iconBackground: '#000000',
            },
        ],
    },
    {
        type: 'social-accounts',
        accounts: [
            {
                platform: 'Twitter',
                name: '@PhotonSPK',
                url: 'https://x.com/PhotonSPK/',
                icon: <TbBrandX />,
                iconBackground: '#000000',
            },
        ],
    },
    {
        type: 'gaming',
        accounts: [
            {
                platform: 'Steam',
                name: 'AkulaQWQ',
                url: 'https://steamcommunity.com/id/PhotonSPK/',
                icon: <TbBrandSteam />,
                iconBackground: '#000000aa',
            },
            {
                platform: 'VRChat',
                name: 'Akula Arius',
                url: 'https://vrchat.com/home/user/usr_8ceb03ff-3164-47c1-8368-469033a5bafa/',
                icon: <SiVrchat />,
                iconBackground: '#000000aa',
            },
        ],
    },
]

export const DESCRIPTION_PARAGRAPHS = (
    <Row>
        <Description>
            <DescriptionTitle smallCaps>who i am?</DescriptionTitle>
            <Paragraph>Amateur .NET Programmer, kemomimi holics.</Paragraph>
            <Paragraph>Mental instability. Strive to become better every day.</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
            <Paragraph>War-themed games lover.</Paragraph>
            <Paragraph>Used to play rhythm games.</Paragraph>
        </Description>
    </Row>
)

export const COPYRIGHT = 'Copyright © 2026 Akula Arius. Illustrations have their own rights.'

interface Account {
    platform: string
    name: string | JSX.Element
    url?: string
    icon: JSX.Element
    iconBackground: string
    redacted?: boolean
}

interface Accounts {
    type: string
    accounts: Account[]
}

interface ProfileHeaderTag {
    tag: string
    comment?: string
    icon?: JSX.Element
}

interface ProfileHeaderTagGroup {
    title: string
    tags: ProfileHeaderTag[]
}
