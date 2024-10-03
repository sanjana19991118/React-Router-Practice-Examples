## Key Notes

What is HTTP ?

Http -> Hypertext Transfer Protocol
text based application protocol
basics of data communication networked devices
most used protocol for web-based applications
consists of predefined standard and rules for the exchange of information.
Http is a protocol that clients and servers use to communicate.

For Data exchange to take place
Http depends on two other protocols ->

1. TCP ( Transmission Control Protocol )
2. IP ( Internet Protocol )

TCP/IP model -> for communication between clients and servers
also for communication between servers and mobile/Web APIs

OSI model -> TCP layer 4
IP layer 3

## Stateless Nature

1. Http is stateless

stateless -> each request that a client makes is an independent transaction

each request is different for the server.
server does not hold any information about the client state.

Advantage ->
reduction in the memory usage on the server
reduction in problems leading to expired session.

It is stateful in delivery -> all the packets are received and sequenced Correctly.

## URL (Uniform Resource locator)

1. Protocol (http:// or https:// )- tells the browser how to communicate with website's server in order to send and retrieve info
   HTTPS is secure with additional security

2. The Domain (abc.com) - the subdomain name the name by which the website is known, the TLD

TLD - top level domain
category of websites - .com, .org, .net

3. Path ( /edge ) - directs the browser to specific page or website.

## OSI (open system interconnection) model

created by International Organization for Standardization 1971

model which is a standard
rules for communication protocols between networks

7 layers

Application
Presentation
Session
Transport
Network
Data
Physical

Http -> is present at the application layer
here the interaction between teh users and computers happen

Application -> protocols & data manipulation
other protocols (DNS,HTTP,FTP,IMAP,MIME,POP,RTP,SMTP,TELNET,TFTP,TLS)

## HTTP Communication

1. when client wants to communicate with server
2. first thing that happens after user types the URL in the browser address bar
   OR when navigates to another page is opening a TCP/IP connection
3. TCP/IP connection is opened, the HTTP request is sent to the server
4. In the request there is a message with a series of data describing what customer has requested
5. The server then sends the response to the client
   ( also contains data that can be read)
6. The request-response is finalized.

## TCP/IP Handshake

## HTTP Messages

# What is a Request ?

It is what client needs from the server.
The request message has specific data which decribes waht was requested.

Components of Request :

1. Method -> action the customer wants to take
   GET
   POST
   HEAD
   PUT
   PATCH
   DELETE
   OPTIONS
   TRACE
2. The path -> the URI( Uniform Resource Identifier) of the resource to be searched.
3. The HTTP version of the protocol
4. The Request Headers -> having additional info for servers
5. The Request body -> optional and necessary for some methods such as POST, contains the requested resource.

# What is a Response ?

Response given by the server contains the info requested by the client.

Or also it informs errors if any in relation to what was requested.

Response contains elements as below :

1. response header ->
   the protocol version
   the request status
   the type of content included in the body

2. The Status code ->
   200 - the request was answered successfully
   301 - the request was permanently moved
   401 - the request was not authorized by the server
   404 - the request was not found by the server
   500 - Internal server error

3. The request body ->
   as in the request,
   optional
   contains data about the requested resource.

Http having cache :-

Another interesting aspect of the HTTP communication is the use of cache, which keeps copies of data that are frequently accessed.

Basically, the cache speeds up the search and delivery of frequently used data and spares the use of resources on a server, improving the performance and speed of the process

## TCP three way hand shake

reliable
connection oriented
web, FTP, email

3 way before transmission

client to server
syn
syn message to server

server to client
syn-ack
acknowledge he connecion request from the server

client to server
ack saying yes

3 way hand shake

1. The clien sends a SYN segment with the initial sequesnce #9001
   ack #0

2. server replies with SYN-ACK
   server's syn = 1, and ack = #9002
   which is the client's sequence # plus 1
   as a result the server acknowledges the connection request.

also the server has its own initial sequence # 5001

3. the client responds
   this time there is no more synchronization/connection request,
   so SYN = 0

but a client acknowledges the server connection request
and now its ACK = 5002
i.e. increasing the server side sequence number # is 1.

segment sequnece number is different from before -> clients initial sequence number was 9001 now its 9002

at this point the client and the server have agreed to open their connection with each other.

summary

a. the steps 1 and 2 establish the connection from the client and the server.
b. the steps 2 and 3 establish the connection between server and the client.
