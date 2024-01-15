import {component$, createContextId, Signal, useContextProvider, useSignal} from "@builder.io/qwik";

export interface OrganizerDataType{
    "name": string
    "email": string
}

interface ParticipantDataType{
    "name": string
    "email": string
}

interface ReminderDataType {
    "method": string
    "minutes_before": number
}

interface RecurrenceDataType{
    "frequency": string
    "interval": number
    "end_date": string
}
interface BusyAvailabilityDataType{
    "start_datetime": string
    "end_datetime": string
}
interface FreeAvailabilityDataType{
    "start_datetime": string
    "end_datetime": string
}
interface AvailabilityData {
    "busy": BusyAvailabilityDataType
    "free": FreeAvailabilityDataType
}

interface CustomFieldsDataType{
    "meeting_type": string
    "project_code": string
}


export interface EventDataType{
    "event_id": string
    "title": string
    "description": string
    "start_datetime": string
    "end_datetime": string
    "location": string
    "organizer": OrganizerDataType
    "participants": ParticipantDataType
    "reminders": ReminderDataType
    "recurrence": RecurrenceDataType
    "all_day": boolean
    "availability": AvailabilityData
    "time_zone": string
    "priority": string
    "attachments": string[]
    "privacy": string
    "custom_fields":CustomFieldsDataType
    "url": string
    "categories": string[]
    "response_status": string
}

export const EventDataContextId = createContextId<Signal<EventDataType>>("EVENTDATA")
export default component$(()=>{
    const eventData = useSignal<EventDataType>()
    useContextProvider(EventDataContextId, eventData)
    return(
        <div>

        </div>
    )
})