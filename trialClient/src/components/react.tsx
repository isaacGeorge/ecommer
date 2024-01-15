/** @jsxImportSource react */
import {qwikify$} from '@builder.io/qwik-react';
import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {start} from "repl";

function Calendar() {
    return (
        <div>
            <p>Calendar</p>
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next myCustomButton", // will normally be on the left. if RTL, will be on the right
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                }}

                customButtons={{
                    myCustomButton: {
                        text: 'custom!',
                        click: function () {
                            alert('clicked the custom button!');
                        }
                    }
                }}
                events={[
                    {title: 'My Event', start: '2023-12-18', url: 'https://google.com/'},
                    {start: '2023-12-19', end: '2023-12-23', title: 'Tutorial shooting', color: '#5D3587'},
                    {start: '2023-12-25', end: '2023-12-28', title: 'Holiday', color: '#5F0F40'},
                    {start: '2023-12-26', color: '#E3651D', title: 'my birthday'},
                    {start: '2023-12-17T09:00:00', end: '2023-12-17T14:00:00', color: '#B31312', title: 'Lecture'},
                    {start: '2023-12-01T09:00:00', end: '2023-12-1T14:00:00', color: '#F4F27E', title: 'Year start'}
                ]}


                height={"90vh"}

            />

        </div>
    );
}

export const QCalendar = qwikify$(Calendar, {eagerness: 'hover'})