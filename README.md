# Video Stage for Microsoft Teams

The goal of this project is to facilitate the delivery/sharing of videos within a meeting. Instead of sharing a video via screen sharing, we allow the presenter to load videos into the stage that are then played locally by each attendee.

## In meeting support

The presenter can play/stop videos and jump into a particular position in the video. All attendees are only able to view the video as controlled by the presenter.

Since the presenter can load multiple videos, the presenter can select which video to play

## Pre meeting support

Organizer can add videos to the meeting prior to starting the meeting.

## Post meeting support

After the meeting is done, videos are available as part of the post meeting artifacts

## Access Considerations

In this model, it assumes that attendees have access to the videos. Videos that are behind an authentication wall may not work in this model.

When loading videos, a check for this requirement will be made. Videos that require specific authentication will not be allowed to be loaded into the meeting.

## Backend Requirements

This project requires the following Azure backend requirements

- Azure CosmoDB
- Azure Pub/Sub Service