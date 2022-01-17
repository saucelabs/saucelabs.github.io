---
title: (Ͼ˳Ͽ)...check-my-repo!!!
date: 2022-01-14T09:00:00+02:00
description: This is a text about open source, and everything you need to be proud of your repository. Because open standards ensure not only the quality and shareability of a project with necessary documentation to make it welcoming, understandable and keeping an ongoing clear communication. Most importantly, open standards guide technology development by gently enforcing space for diversity and equity.
author: 'Paloma Oliveira'
authorTwitterHandle: 'pcultural'
images:
    - /images/blog/check_my_repo_steps.png
tags:
    - open source
    - open governance
    - standards
    - diversity and equity
---

This is a text about open source, and everything you need to be proud of your repository. 

In the text I argue that by using open standards, an open source project improves its quality and shareability, since such standards exist to foster better communication between creators and consumers of the project.

If you share my admiration for standards, optimistic that this common agreement is capable of making the world a little bit better; if you want to improve your messy project no one understands to make it more shareable; or if you just want to show off how cool you are because you have the most compliant repositories, this text is for you.

## Open source as an ecosystem

For some, open source is only a technical definition about source code that is open to copy, modify and distribute. Others may defend that, before you can even participate in an open source project, you must first learn to collaborate. That&#39;s because open source is not a verb nor one thing, it&#39;s an approach to software development, a workflow, a philosophy. Whatever your understanding may be, it is surely more than making code publicly available.

As a matter of fact, even the [Open Source Initiative](https://opensource.org/osd), one of the most active organizations since the 90's in the education and promotion of non-proprietary code, although focused on a definition particularly concerned with legal licensing, includes aspects beyond the technical, such as "No Discrimination Against Persons or Groups". 

Christopher Hiller, recognized developer within the JavaScript community, author of [two books](https://www.goodreads.com/author/show/7135237.Christopher_Hiller) on the language and respected maintainer of key projects like Node and Mocha, mentions the importance of including humans behind the code by design. 

>When you share your code, you (should) have some idea about who is going to use it. What does this audience expect? What are the norms in this particular community?
>The "other" lies at the edge of this audience, I think. It's not that we've shared software for everybody and anybody, but rather the people who would be interested in >contributing to the software should necessarily have some common ground. And how you idealize the project's community will very much have an impact on the the diversity of contributors. If you focus entirely on "the code", your project may meet the OSI definition of open source, but you will likely have a homogenous contributor base.

My personal definition is that open source is an ecosystem composed of technical things like code, but mostly of people. Just placing code on a public repository will not achieve the ideal of making it shareable, as mostly, being open means open to the &quot;other&quot; which is not me or clones of me. And this &quot;other&quot; should be able to be part of the project. But… how to include this other when you have no idea who they may be? This is where standards come into play.

## Mitigating communication imbalance

Human communication is hard. If a simple exchange requires a sender, a channel, a message and a receiver, what about a message that is continuously being sent in asynchronous ways, into multiple senders, receivers, channels, across the globe, through multiple languages and codes (both programming and cultural ones) as it can be an open source project?

Clear information should be available for everyone in the open source project ecosystem, meaning, it must have ways to achieve the message to be sent and received asynchronously through the multiple players minimizing information imbalance.

When it comes to open source, ensuring that those outside your closest relations are on equal footing  in terms of access to information and ability to influence the project  foster collaboration principles, improve your project, and brings diversity and equity into the open source space.

To minimize the information imbalance it is necessary to apply conscious measures in different scopes of project communication: procedurally, daily, and long-term.

Procedural, as the name implies, is about the processes, the systems used. For example, maintaining a single issue tracker that is public and transparent, allowing any interested person to have open access to the issues identified by the project; having mechanisms for all participants to provide feedback or discuss possible new features; offering meet spaces that are public, scheduled in advance and recorded, allowing those who don&#39;t have access in real time to plan and follow up on decisions.

The daily communication is about the day-to-day aspects, such as the status of the project (proof of concept, in active development, deprecated, etc); how to submit issues, propose enhancements or new features, how to contribute, and so on.

Long term is the kind of information that guarantees the history and continuation of the project. Good documentation is fundamental to understand how the project has developed so far, where it has been, and where it is going. Documents include: the mission statement, concepts, goals, list of features and requirements, and an overview of the project&#39;s roadmap.

It may seem like a lot of work at first, but it will rapidly bring many benefits: facilitates new contributors onboarding, decreases maintainers&#39; work time, comply with open source licensing obligations, and protects proprietary intellectual property. Hopefully, it will help open source to have a diversity rate much more balanced than the 3%[^1] currently occupied by women.

Before you feel swamped… remember that open source is about community and support, this is why there&#39;s several different tools and [templates](https://github.com/saucelabs/new-project) available to help you in this endeavor.

One of such tools is [check-my-repo](https://github.com/saucelabs/check-my-repo), an automated web-app that daily checks the health of all its repositories. It will help you find out whether each of your repositories contains files that will facilitate the communication and security of your projects.

## Check-My-Repo: automating repositories health verification

[Check-my-repo](https://github.com/saucelabs/check-my-repo) is an open source tool created during my internship in the [Open Source Program Office at Sauce Labs](https://opensource.saucelabs.com/). It is an automated web application built upon [Repolinter](https://todogroup.github.io/repolinter/) that verifies the main necessary parameters to comply with open source best practices: from Readme to License. Automating this verification helps with maintenance, forwarding compliant software projectseasier to service, test, upgrade, maintain and contribute.

It is designed to serve you on a push of a button (maybe 4 buttons…) using GitHub Actions to daily check all of your repositories, displaying the results on a GitHub page under your username.

### Step-by-step instructions do have a check-my-repo to call your own

This will take less than 30 seconds… Are you ready?

1. Go to [https://github.com/saucelabs/check-my-repo](https://github.com/saucelabs/check-my-repo) and fork the repository
2. Go to **Actions** tab, on your check-my-repo forked repository, and enable the workflows
3. Make sure **Verify Repos Health Daily** workflow is enabled
4. Go to Pages and make **gh-pages** as your source

That&#39;s it!


As action is set to run 00\*\*\*\* cron, meaning at 00 minutes past the hour, you will only see your actual results after this action runs. First results you will see are Sauce Labs default ones.

{{< figure src="/images/blog/check_my_repo_steps.png" class="img-responsive" >}}
_Alt: Step-by-step visual guide about how to fork and apply check-my-repo to your repository_


### Explaining the rules

What the application will do is go into each of the repositories and check if certain files exist. If it doesn&#39;t detect a file, the missing file will be indicated in the list of missing files per repository. Described below are the rules, or files, that it currently looks for, explaining its main purpose and why each one is needed.

#### Binaries

The security rule looks for binary files, executables and passwords, which should not be contained in an open project, for security reasons.

#### License

Compliance with open source software (OSS) license requirements is necessary and complex. Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly. It is also important to protect you legally.

#### Readme

A friendly README and clear code examples will make it easier for anyone who lands on your project to get started. It is about knowing your audience and their needs. The [Open Source Guide](https://opensource.guide/starting-a-project/#writing-a-readme) reminds us that the README is more than just a set of instructions, it&#39;s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion.

#### Changelog

The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project. While Changelog is a file, a SemVer, a semantic version, may be a better choice in systems with many dependencies. Doesn&#39;t matter what you choose, this makes it easier for people to understand the development speed of the project, or it&#39;s lack of maintenance. Check-my-repo searches if the project has a CHANGELOG.md file in the project root or if it contains a release tag on GitHub.

#### Contributing

A guideline saves lots of time from both maintainers and contributors. Eager contributors rely on this file to be their guiding hand. The more descriptive, with understandable and commented examples, perhaps using tutorials and other strategies considering different cognitive aspects of the possible contributor (while some people prefer text, some video, some audio...), the easier and faster it will be for your contributor to actively incorporate themselves into the project.

#### Ownership

The main purpose of this file is to make sure that someone is put in charge of the project and to prevent it from being forgotten. Another reason is to provide a contact for potential contributors. When no one other than the original author has maintenance rights, continuation of the project through bifurcation can lead to confusion about the status and reliability of the project.

#### Test Directory

Having tests on your project can avoid regresion, breaks and many other issues. A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them; you add security; helps assure quality and digital confidence; which leads to users satisfaction. If your project has an automated test set, it will help to have changes incorporated into your project more quickly, easing the burden on reviewers and maintainers.

#### Code of Conduct

A code of conduct establishes expectations and facilitates a healthy and constructive community.

_When a project seems hostile or unwelcoming, even if it&#39;s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It&#39;s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow._

You can read more about it at [Open Source Guide](https://opensource.guide/code-of-conduct/).

#### LicenseOnReadme

Although the license is valid in any format, as long as it is added to the project, having it in the main file ensures it will be clearly visible. So even if the license exists in a separate file it is important to have a mention of it in the README. Some projects add copyright and license on the first line of every file of the project.

#### Security

A SECURITY.md is where a security policy goes, a place to instruct users how to report a security vulnerability. This allows users to easily report and maintainers to quickly take actions upon vulnerabilities.

#### Support

A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. It can include: how and where a user can get help and support, which communication channels should be used and what not to do to avoid communication noise. This file helps both users and maintainers to communicate to each other having their needs to get into the right channel.

Now imagine a project with all that. Will it help to build and keep a community? Will noise in communication be mitigated? Will it save tons of maintainers time to help people onboard and solve issues?

Have I convinced you?

So get a check-my-repo to call &quot;my own&quot; and make your friends envy you for how beautiful and healthy your repositories are.

## Conclusion

Creating and maintaining an open source project is very rewarding. Creating collaboratively is an incredible experience and has the intrinsic potential to take such creation into possibilities that one person alone or a small group could never achieve.

But working openly and collaboratively is also a challenge for the maintainers and a responsibility for the community to ensure that this space is equitable.

Tools like check-my-repo help in a practical way with the maintenance of repositories by automatically checking whether projects comply with minimum best practices.

But it doesn&#39;t have to stop there.

There is a lot of work ahead as shown by the results of surveys on the health of open source communities, which end up reflecting the worst of the technology industry, since open source is usually practiced voluntarily in the spare time of its community.

That&#39;s why ensuring that these standards are used is so important for the continuation and improvement of a practice that has so much potential.



_\*This text is based on a talk for_ [_Pizza Python Hamburg 2021_](https://hamburg.python.pizza/) _https://www.youtube.com/watch?v=hXKdtY8gHbs&amp;t=9240s_



[1]: In February 2017 Wired magazine published the following article based on a GitHub survey, analizing diversity in open source https://www.wired.com/2017/06/diversity-open-source-even-worse-tech-overall/ . Although outdated, the article still reflects several issues still happening today. Recently, Linux Foundation together with several associations, including CHAOSS project, conducted another survey https://www.linuxfoundation.org/blog/addressing-diversity-equity-and-inclusion-in-2021-and-beyond/ , which shows several improvements related to diversity, equity and social justice awareness. Unfortunately the survey does not explicitly show in numbers if the 3% was improved or not, so, for now, we will still use it as a measurement.
