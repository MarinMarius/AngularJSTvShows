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

As I have discussed with Julia on the phone, I have kept the functionality to a minimum and have excluded unit tests, due to lack of time.

One decision that I`m not that happy with regarding this project is that I have used both bootstrap 3 and bootstrap 5. In normal appliction, I would not do this, as this may have unexpected behaviour. In this case, due to lack of time, I have used both of them in order to speed up the development time. 