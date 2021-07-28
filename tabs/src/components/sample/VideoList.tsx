import React, { useState } from 'react';
import { List, Layout, Image, Flex, Text, Divider, Loader, Alert } from "@fluentui/react-northstar";
import { AddVideo } from "./AddVideo";
import * as microsoftTeams from '@microsoft/teams-js';
import { useQuery, gql } from "@apollo/client";

const LIST_OF_VIDEOS = gql`
    query GetVideosForMeeting($meetingId: String) {
        getVideosForMeeting(meetingId: $meetingId) {,,
            videos {
            id
            url
            description
            image
            }
        }
    }
`;

export function VideoList() {

    const [meetingId, setMeetingId] = useState("");

    if (meetingId === "") {
        microsoftTeams.getContext( (context: microsoftTeams.Context) => {
            if (context.meetingId != null) {
                setMeetingId(context.meetingId);
            }
        });
    }

    const { loading, error, data } = useQuery(LIST_OF_VIDEOS, {variables: { meetingId: meetingId } });

    if (meetingId === "" || loading) { 
        return(<Loader label="Loading..."></Loader>); 
    }

    if (error) {
        return(<Alert danger content="Error loading list..."/>);
    }

    const ellipsis = <span>&hellip;</span>

    const items = data["getVideosForMeeting"]["videos"].map( function(video: any) {

        let item = { key: video["id"], content: video["url"], header: video["description"], endMedia: ellipsis, media: (
            <Image styles={{maxWidth:'70px', padding:'5px'}} src={video["image"]}/>
        )};

        return item;
    });

    console.log(meetingId);

    return (
        <Layout styles={{padding:'20px'}}>
            <Flex column>
                <Text content="Video List" weight="bold" size="large" />
                <Text content="List of videos you can share during the meeting" size="small" />
            </Flex>
            <Divider size={1} color="brand" ></Divider>
            <List selectable items={items} />
            <Layout styles={{margin:'20px'}}>
                <Flex gap="gap.smaller">
                    <AddVideo/>
                </Flex>
            </Layout>
        </Layout>
    );

}
