To run the application, please use VS code with "Live Server" extension. Open index.html file and click on "Go Live" on the buttom VS code toolbar.
There is no need for npm install, as all library and frameworks are used from a CDN.

Tech Stack

JS
angular 1.8.2 - base framework
ui-bootstrap 2.5.0 - used for modal

CSS:
bootstrap@5.1.3
bootstrap@3.3.7 - required by ui-bootstrap


Arhitectural decisions:

I have chosen to have a component based approach. This helps with both maintenance and olso could serve to an easer migration to a more modern framework.