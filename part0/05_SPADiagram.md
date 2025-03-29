```mermaid
    participant B as Browser
    participant S as Server
    %% SPA diagram 
    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate S
    Note left of S: Resources are requested from the server.

    S-->>B: HTML document
    deactivate S 
    Note right of B: Receives an HTML document.

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate S
    Note left of S: The HTML document points to a style sheet, which is requested.

    S-->>B: CSS file
    deactivate S
    Note right of B: Receive a CSS file.

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate S
    Note left of S: The HTML document points to a JS file, which is requested.

    S-->>B: JS file
    deactivate S
    Note right of B: Receives and starts executing the JS file

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate S
    Note left of S: Within the JS file, a request is made for the stored notes data

    S-->>B: JSON [{key: value, ...}]
    deactivate S
    Note right of B: Receive a JSON with the requested data.
```