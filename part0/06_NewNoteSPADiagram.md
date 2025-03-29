```mermaid
    participant B as Browser
    participant S as Server
    %% new note diagram (SPA)
    %% It is assumed that the HTML, CSS and JS have already been obtained.
    B->>S: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate S
    S-->>B: STATUS CODE 201 - Created
    deactivate S
    
    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate S
    Note left of S: JS requests stored notes

    S-->>B: JSON [{key: value, ...}]
    deactivate S

    Note right of B: Re-render notes 

    Note right of B:In the SPA version, no new request or redirect is generated.<br> Within the JS file, the new note data is accessed, the current notes are<br> requested from the server, and the re-rendering (if necessary) <br> of the obtained notes continues (with DOM-API).
    Note right of B: No need to render everything again, only the note elements.
```