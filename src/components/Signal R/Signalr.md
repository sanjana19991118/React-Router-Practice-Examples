# SignalR

SignalR is a library for ASP.NET developers that makes it incredibly simple to add real-time web functionality to your applications. Real-time web functionality allows server-side code to push content to connected clients instantly as it becomes available.

## Table of Contents

- [Concept](#concept)
- [Front-End Installation and Usage](#front-end-installation-and-usage)
- [Back-End Installation and Usage](#back-end-installation-and-usage)
- [Extra Notes](#extra-notes)

## Concept

SignalR enables server-side code to push content to clients instantaneously. It allows bidirectional communication between server and client. Some key features include:

- **Persistent Connections**: Provides low-level API for use on the client and server.
- **Hubs**: A high-level pipeline that allows you to call methods on the client from the server.
- **Transports**: Automatically uses the best available transport method

### Usage

## Frontend

1. Create a connection and start it:

import \* as signalR from "@microsoft/signalr";

// Create connection
const connection = new signalR.HubConnectionBuilder()
.withUrl("/chatHub")
.build();

// Start connection
connection.start()
.then(() => console.log('Connection started!'))
.catch(err => console.error('Error while establishing connection :(', err));

// Receiving messages from server
connection.on("ReceiveMessage", (user, message) => {
const msg = `${user} says ${message}`;
console.log(msg);
});

// Sending messages to server
document.getElementById("sendButton").addEventListener("click", event => {
const user = document.getElementById("userInput").value;
const message = document.getElementById("messageInput").value;
connection.invoke("SendMessage", user, message)
.catch(err => console.error(err.toString()));
event.preventDefault();
});

## Backend

# Back-End Installation and Usage

# Installation

To install SignalR for ASP.NET Core, add the package via NuGet:

dotnet add package Microsoft.AspNetCore.SignalR

# Usage

1. Configure SignalR in Startup.cs:

public void ConfigureServices(IServiceCollection services)
{
services.AddSignalR();
}

public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
app.UseRouting();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapHub<ChatHub>("/chatHub");
    });

}

2.  Create a Hub class:

using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
public async Task SendMessage(string user, string message)
{
await Clients.All.SendAsync("ReceiveMessage", user, message);
}
}

3.

## Extra Notes

Transports: SignalR automatically selects the best transport (WebSockets, Server-Sent Events, or Long Polling) based on the server and client environment.

Scalability: SignalR supports scale-out with Redis, Azure Service Bus, or SQL Server.

Security: Ensure your SignalR hub is secure by implementing proper authentication and authorization mechanisms.
