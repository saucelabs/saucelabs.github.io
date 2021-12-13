---
title: "My First Hacktoberfest"
date: 2021-01-22T09:00:00+02:00
description: "Read about Yi Min Yang's experience during his first Hacktoberfest!"
author: "Diego Molina"
authorTwitterHandle: "diegofmolina"
images:
  - /images/blog/my-first-hacktoberfest/hacktoberfest.png
tags:
  - ux
  - frontend
  - hackathon
---

{{< figure src="/images/blog/my-first-hacktoberfest/hacktoberfest.png" class="img-responsive">}}

Last October was the 2020 edition of [Hacktoberfest](https://hacktoberfest.digitalocean.com/), and
the Open Source Program Office at Sauce Labs organised a few internal and external events to promote
this yearly celebration of open source. One of the folks who was very active and stood out during the
event was [Yi Min Yang](https://twitter.com/sceiler8).

Yi Min has been in the IT industry for more than eight years, and he has worn many hats during that
time. He started as a Software Developer, then switched to be an IT Consultant for software
development and testing activities. Later he got a Scrum Master certification, and even worked as
a product owner for a while. More recently, Yi Min moved to a more customer-facing role, where he
has been working in pre-sales for more than two years. Yi Min is currently working as a Solutions
Engineer at Sauce Labs.

I spoke with Yi Min about his participation in Hacktoberfest and how this helped him to get back
to contributing to open source again.

### Have you participated in a Hacktoberfest before?

Not really. I have done some work in open source before, not really contributing in the sense of
coding but more helping other users adopt an open source tool I'm personally using myself. But the
first time I heard about Hacktoberfest was here at Sauce Labs.

### What did you think when you knew we were having some internal events related to Hacktoberfest? What motivated you to participate?

I initially thought it was something like a hackathon, but more in terms of hacking. As if you were
trying to find bugs, vulnerabilities, these types of things. But after reading about it, I thought
it was a cool idea because in my previous life I have worked as a software developer, so I thought
this would be now a good time, place, and opportunity to get my hands dirty by coding a bit again.

Also, as I work in Sales, October is a good time because it is the start of a new quarter, which
makes it easier for me to invest time in non-sales related tasks.

### How was your Hacktoberfest and contributing to open source experience?

Well, in the beginning it was hard for me to get into the workflow. Not actually the process of writing
code again, but more in terms of the process you need to go through when you do some code changes and
then you want to submit those changes. You just have to get used to creating the pull requests again,
waiting for other people to review them. You also need to reply to reviews, change your code and
sometimes do less fun stuff like dealing with merge conflicts.

But you also have to then deal with some open source projects that might not have a clear structure
yet. For example, when you want to contribute to a project that has been in “sleep” mode, then you
have to start and build a foundation for it and start applying some best open source practices which
have been established over the last few years.

In general, I think it's actually quite cool because it allows a lot of people from different
backgrounds to join and work together. In my case, I started mostly doing some of these foundational
things. So as an example, for some projects, I added an issue template on GitHub, which I saw was
heavily used by other more mature open source projects. These are kind of small things you can do
easily and quickly, and you don't need to be a technical expert to do that.

I wouldn't mind having Hacktoberfest multiple times a year because I saw that during that time a lot
of people were actively engaging and contributing to different repositories and different projects.
It is great to see how such an event can trigger lots of people from different organizations and
backgrounds to actively look into open source and then contribute as well.

### How did you find something to contribute to and what did you contribute to?

I decided to look into the [open source repositories from Sauce Labs](https://opensource.saucelabs.com/projects/).
First of all, I have a background mainly in Java and a bit in C# as well. I looked at the Java
repositories and I found [SauceREST](https://opensource.saucelabs.com/saucerest-java/), which
is a Java client for Sauce Labs REST API, and I have used this Java client also in my demos for customers.
[Christian Bromann](https://twitter.com/bromann/) had started to tag and label issues in the
SauceREST repository, and some of those issues were a good starting point for the Hacktoberfest.
I went through that list and saw many issues that were not too complex and I could work on them.
But then I also started to look at the repository from a higher level, and compared it to other
repositories, like [Appium](https://github.com/appium/appium). I saw that Appium was using
these GitHub templates to help organize pull requests and issues, and this is just basically
copy/pasting and adapting a bit of a text file. Then, I thought, well, why not start with something
small like this and later build up some confidence and get familiar again with the whole process of
contributing. Later, I looked into the other issues and figured out what I could do in a short
amount of time which had a lot of impact or a lot of more value for the project.

### You mentioned that you have worked in open source before. What type of things have you done?

I've been mostly a user of open source. I've been using open source libraries for my own private projects,
but there is one open source project I quite like, it is called [Paperless](https://github.com/the-paperless-project/paperless).
It is a document management application that basically allows you to manage scanned documents. You need
to host it yourself on your own server at home—you can run it in Docker or a web server.

So for example, after scanning your receipts, Paperless then allows you to analyze the scanned text by using
optical character recognition. It uses a couple of other libraries, like [Tesseract](https://github.com/tesseract-ocr/tesseract),
and it is completely written in Python and Django. That is why I've never contributed code to it,
because I just can't wrap my head around Python.

But I've started by getting familiar with it, how to configure it, how to set it up, especially using Docker.
Paperless is quite popular in Germany, possibly because Germany is a country that still uses a lot of
paper and is full of bureaucracy.

I mostly contribute to it by answering questions a lot of people have and going through GitHub issues,
such as: how do I set it up, how do I change the time zone, how do I do this or that. I also help by
enabling people to adopt it and occasionally I try to test out new versions.

### How can you combine open source and your daily work?

Part of my work is to talk to customers and prospects, but also to help them get started with Sauce Labs.
When they want to do a proof of concept, for example, and they use Java, then it is a good idea to use the
SauceREST library. By knowing the library since I have contributed to it, I could, for one thing, recommend
the usage of SauceREST to them and I could also help them with the library, in case there is an issue or
something is wrong.

Looking at it from a higher level, I think being involved in open source means being closer to the end users
of the Sauce Labs platform by using, for example, our demo repository. I think that helps us better
understand the journey our customers go through and how hard it can be for someone non-technical or for
someone who is starting as an IT professional.

I also believe open source helps you to take one step back and to think how it was when you started. We
take many things for granted and we simply think: “How hard can it be to run a simple Selenium or an Appium
test? Put the right capabilities, run it and be done with it.” But for people who are just starting out,
they might have an issue with their setup that they're just not aware of. Getting involved with the end
user through open source helps to create that direct communication, and this clearly helps yourself to
grow as a professional.

{{< figure src="/images/blog/my-first-hacktoberfest/sauce_rest.png" class="img-responsive">}}

After talking with [Yi Min](https://www.linkedin.com/in/yi-min-yang/), learning about his open source
experience and how much he enjoyed his first Hacktoberfest, these are my takeaways:

- When finding a way to contribute to open source, it is important to find a project that is in your comfort
  zone. This will help you figure out the initial steps so you can get into the contribution flow (creating
  pull requests, answering reviews, etc…). For example, find a project that uses a programming language you
  like, or a tool you are familiar with but have never contributed to.

- An open source contributor is not someone who only writes code, it could also be someone who helps other
  people use an open source tool or a framework, who answers questions and helps by testing and giving feedback
  to the project.

- It is possible to contribute to open source as part of your daily work by finding connecting points between
  your daily tasks and open source projects that you use. For example, if it is a framework you use internally,
  you could spend 15 to 30 minutes answering questions in GitHub issues as a way to get started. Another example
  is, if your deliverable will be used by a customer, such as an API, you could create an API client that wraps
  the functionality of it and therefore make it simple for customers to use it, and as a side effect, create a
  community around your product.

What are your takeaways? How do you find time to contribute to open source?

If you are interested in all the activity related to the last Hacktoberfest in Sauce Labs, check our
[dedicated page](https://opensource.saucelabs.com/hacktoberfest/) at the Sauce Labs open source website.
