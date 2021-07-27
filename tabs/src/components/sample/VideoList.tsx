import { List, Layout, Image, Flex, Text, Divider } from "@fluentui/react-northstar";
import { AddVideo } from "./AddVideo";
import * as microsoftTeams from '@microsoft/teams-js';

export function VideoList() {

    let meetingId = null;

    microsoftTeams.meeting.getMeetingDetails(
        (error: microsoftTeams.SdkError | null, getMeetingDetails : microsoftTeams.meeting.IMeetingDetails | null) => {
        if (error) {
          return;
        }


        meetingId = getMeetingDetails?.conversation.id;
    });

    const ellipsis = <span>&hellip;</span>

    const items = [
        { key: '1', content: 'https://www.youtube.com/watch?v=usqvLtEq2qQ', header: 'My Awkward Audition for The Office',  endMedia: ellipsis, media: (
            <Image styles={{maxWidth:'70px', padding:'5px'}} src="http://i3.ytimg.com/vi/usqvLtEq2qQ/hqdefault.jpg"/>
        )},
        { key: '2', content: 'https://www.youtube.com/watch?v=VDDPoYOQYfM', header: 'Microsoft Teams Tutorial in 10 min',  endMedia: ellipsis, media: (
            <Image styles={{maxWidth:'70px', padding:'5px'}} src="http://i3.ytimg.com/vi/VDDPoYOQYfM/hqdefault.jpg"/>
        )},
        { key: '3', content: 'https://www.youtube.com/watch?v=jugBQqE_2sM', header: 'Welcome to Microsoft Teams',  endMedia: ellipsis, media: (
            <Image styles={{maxWidth:'70px', padding:'5px'}} src="http://i3.ytimg.com/vi/jugBQqE_2sM/hqdefault.jpg"/>
        )}
    ];


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
