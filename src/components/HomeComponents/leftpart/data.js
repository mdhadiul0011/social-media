import React from 'react'
import { NewsFeed } from '../../../../public/svg/NewsFeed'
import { Messages } from '../../../../public/svg/Messages'
import { Friends } from '../../../../public/svg/Friends'
import { Media } from '../../../../public/svg/Media'
import { Settings } from '../../../../public/svg/Settings'

const LeftData = [
    {
        icon: NewsFeed,
        title: "NewsFeed",
        to: '/'
    },
    {
        icon: Messages,
        title: "Message",
        to: '/',
    },
    {
        icon: Friends,
        title: "Friends",
        to: '/friends'
    },
    {
        icon: Media,
        title: "Media",
        to: '/'
    },
    {
        icon: Settings,
        title: "Settings"
    },
]


export default LeftData
