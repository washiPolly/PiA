import React from 'react'

const GoogleEventBtn = () => {

    // function appendPre(message) {
    //     var pre = document.getElementById('content');
    //     var textContent = document.createTextNode(message + '\n');
    //     pre.appendChild(textContent);
    // }

    // function handleClientLoad() {
    //     gapi.load('client:auth2', handleClick);
    // }

    var gapi = window.gapi
    var CLIENT_ID = "1045446958252-uo3li2dnmob66dvd5u1lai7k2ntudfbn.apps.googleusercontent.com"
    var API_KEY = "AIzaSyCaf0SKDGTIgHT5kIFhBu5QfjlWf2YpACk"
    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam! Cal loaded'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {
                    var event = {
                        'summary': 'Present PiA at UCR Bootcamp Demo Day',
                        'location': 'UCR Bootcamp Web Meeting',
                        'description': 'last chance before it goes back into the vault',
                        'start': {
                            'dateTime': '2020-08-05T09:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2020-08-05T17:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'recurrence': [
                            'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        'attendees': [
                            { 'email': 'chris@example.com' },
                            { 'email': 'romi@example.com' },
                            { 'email': 'polly@example.com' }
                        ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    };

                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    });

                    // request.execute(function (event) {
                    //     appendPre('Event created: ' + event.htmlLink);
                    // });
                    request.execute(event => {
                        window.open(event.htmlLink)
                    })
                })
        })
    }


    return (
        // <div>
        //     <button onClick={handleClick}>Add Google Event</button>
        // </div>


        <section className="container" id="googleForm">

            <form>
                <div className="form-group">
                    <h5 className="lead registerTitle" style={{ textAlign: "center" }}>Create Google Event</h5>
                    <label className="form-group">Subject</label>
                    <input type="text" className="form-control" placeholder="Present PiA - UCR Demo Day" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="start">Start date:</label>

                        <input className="form-control" type="date" id="start" name="trip-start"
                            value="2020-08-05"
                            min="2018-01-01" max="2018-12-31" />
                        <label for="start">End date:</label>

                        <input className="form-control" type="date" id="start" name="trip-start"
                            value="2020-08-05"
                            min="2018-01-01" max="2018-12-31" />

                    </div>
                    <div className="form-group col-md-6" >
                        <label>Details</label>
                        <textArea className="form-control" rows="4" />
                    </div>
                </div>
                <div className="form-group">


                    <label className="form-group">Address</label>
                    <input type="text" className="form-control" placeholder="UCR Bootcamp" />

                    <label className="form-group">Guests</label>
                    <input type="text" className="form-control" placeholder="chris@gmail.com, romi@gmail.com, polly@gmail.com" />
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label">
                            Send Notification
      </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Create Event</button>
            </form>


        </section >





    )
}

export default GoogleEventBtn
